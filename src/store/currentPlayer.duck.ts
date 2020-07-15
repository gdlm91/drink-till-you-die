import { Reducer } from "redux";
import { combineEpics, ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { switchMap, map, catchError, mapTo } from "rxjs/operators";
import { objectVal } from "rxfire/database";

import { db } from "../db/firebase";
import { reduceReducers } from "./utils";
import { Actions, Epic, CurrentPlayerState } from "./types";

export type CurrentPlayerReducer = Reducer<CurrentPlayerState, Actions>;

const API_URL = `${process.env.REACT_APP_HTTPS_FUNCTIONS}`;

const INITIAL_STATE: CurrentPlayerState = {};

/** REDUCERS */
/** -------- */

const currentPlayerLoadedReducer: CurrentPlayerReducer = (
  state = INITIAL_STATE,
  action
) => {
  if (action.type !== "CURRENT_PLAYER_LOADED") {
    return state;
  }

  return {
    ...(action.payload || INITIAL_STATE),
  };
};

const currentPlayerFinalizedReducer: CurrentPlayerReducer = (
  state = INITIAL_STATE,
  action
) => {
  if (action.type !== "CURRENT_PLAYER_FINALIZE") {
    return state;
  }

  return INITIAL_STATE;
};

/** EPICS */
/** ----- */

const currentPlayerInit: Epic = (action$, state$) =>
  action$.pipe(
    ofType("CURRENT_PLAYER_INIT"),
    switchMap(() => {
      const ref = db.ref("/game/currentPlayer");

      return objectVal<CurrentPlayerState>(ref);
    }),
    catchError((error) => {
      console.error(error);

      return of({});
    }),
    map((currentPlayerState: CurrentPlayerState) => ({
      type: "CURRENT_PLAYER_LOADED",
      payload: currentPlayerState || {},
    }))
  );

const currentPlayerNext: Epic = (action$) =>
  action$.pipe(
    ofType("CURRENT_PLAYER_NEXT"),
    switchMap(() => ajax.post(`${API_URL}/next-player`)),
    mapTo({ type: "__IGNORE" })
  );

/** EXPORTS */
/** ----- */

export const currentPlayerEpics = combineEpics(
  currentPlayerInit,
  currentPlayerNext
);

export const currentPlayerReducers = reduceReducers<
  CurrentPlayerState,
  Actions
>(INITIAL_STATE, currentPlayerLoadedReducer, currentPlayerFinalizedReducer);
