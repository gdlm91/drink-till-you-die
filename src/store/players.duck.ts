import { Reducer } from "redux";
import { combineEpics, ofType } from "redux-observable";
import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { objectVal } from "rxfire/database";

import { db } from "../db/firebase";
import { reduceReducers } from "./utils";
import { Actions, Epic, PlayersState } from "./types";
import { PlayersList } from "../types";

export type PlayersReducer = Reducer<PlayersState, Actions>;

const INITIAL_STATE: PlayersState = [];

/** REDUCERS */
/** -------- */

const playersLoadedReducer: PlayersReducer = (
  state = INITIAL_STATE,
  action
) => {
  if (action.type !== "PLAYERS_LOADED") {
    return state;
  }

  return [...(Object.values(action.payload) || INITIAL_STATE)];
};

const playersFinalizedReducer: PlayersReducer = (
  state = INITIAL_STATE,
  action
) => {
  if (action.type !== "PLAYERS_FINALIZE") {
    return state;
  }

  return INITIAL_STATE;
};

/** EPICS */
/** ----- */

const playersInit: Epic = (action$, state$) =>
  action$.pipe(
    ofType("PLAYERS_INIT"),
    switchMap(() => {
      const ref = db.ref("/players");

      return objectVal<PlayersList>(ref);
    }),
    catchError((error) => {
      console.error(error);

      return of({});
    }),
    map((playersList: PlayersList) => ({
      type: "PLAYERS_LOADED",
      payload: playersList || {},
    }))
  );

/** EXPORTS */
/** ----- */

export const playersEpics = combineEpics(playersInit);

export const playersReducers = reduceReducers<PlayersState, Actions>(
  INITIAL_STATE,
  playersLoadedReducer,
  playersFinalizedReducer
);
