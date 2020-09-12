import { Reducer } from "redux";
import { combineEpics, ofType } from "redux-observable";
import { of } from "rxjs";
import { switchMap, map, catchError, mapTo } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { objectVal } from "rxfire/database";

import { db } from "../db/firebase";
import { reduceReducers } from "./utils";
import { Actions, Epic, GameState } from "./types";

export type GameReducer = Reducer<GameState, Actions>;

const INITIAL_STATE: GameState = {};
const API_URL = `${process.env.REACT_APP_HTTPS_FUNCTIONS}`;

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

const gameLoaded: Epic = (action$, state$) =>
  action$.pipe(
    ofType("GAME_LOADED"),
    map(() => {
      const state = state$.value;

      // If the game was "loaded" but it doesn't have any players or game state, then it means it was reset. Unregister.
      if (
        (!state.players || Object.values(state.players).length === 0) &&
        (!state.game || Object.values(state.game).length === 0)
      ) {
        return {
          type: "ACCOUNT_UNREGISTER",
        };
      }

      return {
        type: "__IGNORE",
      };
    })
  );

const gameReset: Epic = (action$, state$) =>
  action$.pipe(
    ofType("GAME_RESET"),
    switchMap(() => ajax.post(`${API_URL}/reset-game`)),
    mapTo({ type: "__IGNORE" })
  );

/** EXPORTS */
/** ----- */

export const gameEpics = combineEpics(gameInit, gameReset, gameLoaded);

export const gameReducers = reduceReducers<GameState, Actions>(
  INITIAL_STATE,
  gameLoadedReducer,
  gameFinalizedReducer
);
