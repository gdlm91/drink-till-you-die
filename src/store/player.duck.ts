import { Reducer } from "redux";
import { combineEpics, ofType } from "redux-observable";
import { of, from, combineLatest } from "rxjs";
import { mapTo, switchMap, map } from "rxjs/operators";
import { authState } from "rxfire/auth";

import { db, auth, firebase } from "../db/firebase";
import { reduceReducers } from "./utils";
import { Actions, Epic, PlayerState, PLAYER_REGISTER } from "./types";
import { Player } from "../types";

export type PlayerReducer = Reducer<PlayerState, Actions>;

const INITIAL_STATE = { loading: true };

/** REDUCERS */
/** -------- */

const playerShowRegistrationReducer: PlayerReducer = (
  state = INITIAL_STATE,
  action
) => {
  if (action.type !== "PLAYER_SHOW_REGISTRATION") {
    return state;
  }

  return {
    loading: false,
    requestRegistration: true,
  };
};

const playerRegisterReucer: PlayerReducer = (state = INITIAL_STATE, action) => {
  if (action.type !== "PLAYER_REGISTER") {
    return state;
  }

  return {
    loading: true,
    requestRegistration: true,
  };
};

const playerLoadReucer: PlayerReducer = (state = INITIAL_STATE, action) => {
  if (action.type !== "PLAYER_LOAD") {
    return state;
  }

  const { accountId } = action.payload;

  return {
    accountId,
    active: false,
    loading: false,
    requestRegistration: false,
  };
};

const playerUnregisterReducer: PlayerReducer = (
  state = INITIAL_STATE,
  action
) => {
  if (action.type !== "PLAYER_UNREGISTER") {
    return state;
  }

  return {
    accountId: undefined,
    loading: false,
    active: false,
    requestRegistration: true,
  };
};

/** EPICS */
/** ----- */

const playerInitEpic: Epic = (action$) =>
  action$.pipe(
    ofType("PLAYER_INIT"),
    switchMap(() => {
      const setPersistence$ = from(
        auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      );

      return setPersistence$;
    }),
    switchMap(() => authState(auth)),
    map((user) => {
      if (!user) {
        return { type: "PLAYER_SHOW_REGISTRATION" };
      }

      return {
        type: "PLAYER_LOAD",
        payload: {
          accountId: user.uid,
        },
      };
    })
  );

const playerRegisterEpic: Epic = (action$) =>
  action$.pipe(
    ofType("PLAYER_REGISTER"),
    switchMap((action) => {
      const signIn$ = from(auth.signInAnonymously());

      return combineLatest(of(action), signIn$);
    }),
    switchMap(([action, credentials]) => {
      const { user } = credentials;
      const ref = db.ref(`players/${user?.uid}`);
      const { payload } = action as PLAYER_REGISTER;

      const savePlayerInfo$ = from(
        ref.set({
          accountId: credentials.user?.uid,
          active: false,
          emoji: payload.emoji,
          name: payload.name,
          connected: true,
        } as Player)
      );

      return savePlayerInfo$;
    }),
    // __IGNORE, playerInitEpic will pick up the auth change
    mapTo({ type: "__IGNORE" })
  );

const playerUnregisterEpic: Epic = (action$) =>
  action$.pipe(
    ofType("PLAYER_UNREGISTER"),
    switchMap(() => {
      const user = auth.currentUser;
      const ref = db.ref(`players/${user?.uid}`);

      return combineLatest(from(ref.remove()), from(user!.delete()));
    }),
    switchMap(() => from(auth.signOut())),
    // __IGNORE, playerInitEpic will pick up the auth change and reducer will clean up state
    mapTo({ type: "__IGNORE" })
  );

/** EXPORTS */
/** ------ */

export const playerReducers = reduceReducers<PlayerState, Actions>(
  INITIAL_STATE,
  playerShowRegistrationReducer,
  playerRegisterReucer,
  playerLoadReucer,
  playerUnregisterReducer
);

export const playerEpics = combineEpics(
  playerInitEpic,
  playerRegisterEpic,
  playerUnregisterEpic
);
