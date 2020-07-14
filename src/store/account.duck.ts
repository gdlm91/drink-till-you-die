import { Reducer } from "redux";
import { combineEpics, ofType } from "redux-observable";
import { of, from, combineLatest } from "rxjs";
import { mapTo, switchMap, map } from "rxjs/operators";
import { authState } from "rxfire/auth";

import { db, auth, firebase } from "../db/firebase";
import { reduceReducers } from "./utils";
import { Actions, Epic, AccountState, ACCOUNT_REGISTER } from "./types";
import { Player } from "../types";

export type AccountReducer = Reducer<AccountState, Actions>;

const INITIAL_STATE = { loading: true };

/** REDUCERS */
/** -------- */

const accountShowRegistrationReducer: AccountReducer = (
  state = INITIAL_STATE,
  action
) => {
  if (action.type !== "ACCOUNT_SHOW_REGISTRATION") {
    return state;
  }

  return {
    loading: false,
    requestRegistration: true,
  };
};

const accountRegisterReucer: AccountReducer = (
  state = INITIAL_STATE,
  action
) => {
  if (action.type !== "ACCOUNT_REGISTER") {
    return state;
  }

  return {
    loading: true,
    requestRegistration: true,
  };
};

const accountLoadReucer: AccountReducer = (state = INITIAL_STATE, action) => {
  if (action.type !== "ACCOUNT_LOAD") {
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

const accountUnregisterReducer: AccountReducer = (
  state = INITIAL_STATE,
  action
) => {
  if (action.type !== "ACCOUNT_UNREGISTER") {
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

const accountInitEpic: Epic = (action$) =>
  action$.pipe(
    ofType("ACCOUNT_INIT"),
    switchMap(() => {
      const setPersistence$ = from(
        auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      );

      return setPersistence$;
    }),
    switchMap(() => authState(auth)),
    map((user) => {
      if (!user) {
        return { type: "ACCOUNT_SHOW_REGISTRATION" };
      }

      return {
        type: "ACCOUNT_LOAD",
        payload: {
          accountId: user.uid,
        },
      };
    })
  );

const accountLoadedEpic: Epic = (action$) =>
  action$.pipe(ofType("ACCOUNT_LOAD"), mapTo({ type: "INIT_AUTH" }));

const accountRegisterEpic: Epic = (action$) =>
  action$.pipe(
    ofType("ACCOUNT_REGISTER"),
    switchMap((action) => {
      const signIn$ = from(auth.signInAnonymously());

      return combineLatest(of(action), signIn$);
    }),
    switchMap(([action, credentials]) => {
      const { user } = credentials;
      const ref = db.ref(`players/${user?.uid}`);
      const { payload } = action as ACCOUNT_REGISTER;

      const saveAccountInfo$ = from(
        ref.set({
          accountId: credentials.user?.uid,
          emoji: payload.emoji,
          name: payload.name,
          connected: true,
        } as Player)
      );

      return saveAccountInfo$;
    }),
    // __IGNORE, accountInitEpic will pick up the auth change
    mapTo({ type: "__IGNORE" })
  );

const accountUnregisterEpic: Epic = (action$) =>
  action$.pipe(
    ofType("ACCOUNT_UNREGISTER"),
    switchMap(() => {
      const user = auth.currentUser;
      const ref = db.ref(`players/${user?.uid}`);

      return combineLatest(from(ref.remove()), from(user!.delete()));
    }),
    switchMap(() => from(auth.signOut())),
    mapTo({ type: "FINALIZE" })
  );

/** EXPORTS */
/** ------ */

export const accountReducers = reduceReducers<AccountState, Actions>(
  INITIAL_STATE,
  accountShowRegistrationReducer,
  accountRegisterReucer,
  accountLoadReucer,
  accountUnregisterReducer
);

export const accountEpics = combineEpics(
  accountInitEpic,
  accountLoadedEpic,
  accountRegisterEpic,
  accountUnregisterEpic
);
