import { Reducer } from "redux";
import { combineEpics, ofType } from "redux-observable";
import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { objectVal } from "rxfire/database";

import { db } from "../db/firebase";
import { reduceReducers } from "./utils";
import { Actions, Epic, GameState } from "./types";

export type GameReducer = Reducer<GameState, Actions>;

const INITIAL_STATE: GameState = {};

/** REDUCERS */
/** -------- */

const gameLoadedReducer: GameReducer = (state = INITIAL_STATE, action) => {
  if (action.type !== "GAME_LOADED") {
    return state;
  }

  return {
    ...(action.payload || INITIAL_STATE),
  };
};

const gameFinalizedReducer: GameReducer = (state = INITIAL_STATE, action) => {
  if (action.type !== "GAME_FINALIZE") {
    return state;
  }

  return INITIAL_STATE;
};

/** EPICS */
/** ----- */

const gameInit: Epic = (action$, state$) =>
  action$.pipe(
    ofType("GAME_INIT"),
    switchMap(() => {
      const ref = db.ref("/game");

      return objectVal<GameState>(ref);
    }),
    catchError((error) => {
      console.error(error);

      return of({});
    }),
    map((gameState: GameState) => ({
      type: "GAME_LOADED",
      payload: gameState || {},
    }))
  );

/** EXPORTS */
/** ----- */

export const gameEpics = combineEpics(gameInit);

export const gameReducers = reduceReducers<GameState, Actions>(
  INITIAL_STATE,
  gameLoadedReducer,
  gameFinalizedReducer
);
