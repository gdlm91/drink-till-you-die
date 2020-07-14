import { Reducer } from "redux";
import { combineEpics, ofType } from "redux-observable";
import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { objectVal } from "rxfire/database";

import { db } from "../db/firebase";
import { reduceReducers } from "./utils";
import { Actions, Epic, PositionsState } from "./types";

export type PositionReducer = Reducer<PositionsState, Actions>;

const INITIAL_STATE: PositionsState = {};

/** REDUCERS */
/** -------- */

const positionsLoadedReducer: PositionReducer = (
  state = INITIAL_STATE,
  action
) => {
  if (action.type !== "POSITIONS_LOADED") {
    return state;
  }

  return {
    ...(action.payload || INITIAL_STATE),
  };
};

const positionsFinalizedReducer: PositionReducer = (
  state = INITIAL_STATE,
  action
) => {
  if (action.type !== "POSITIONS_FINALIZE") {
    return state;
  }

  return INITIAL_STATE;
};

/** EPICS */
/** ----- */

const positionsInit: Epic = (action$, state$) =>
  action$.pipe(
    ofType("POSITIONS_INIT"),
    switchMap(() => {
      const ref = db.ref("/game/positions");

      return objectVal<PositionsState>(ref);
    }),
    catchError((error) => {
      console.error(error);

      return of({});
    }),
    map((positionsState: PositionsState) => ({
      type: "POSITIONS_LOADED",
      payload: positionsState || {},
    }))
  );

/** EXPORTS */
/** ----- */

export const positionsEpics = combineEpics(positionsInit);

export const positionsReducers = reduceReducers<PositionsState, Actions>(
  INITIAL_STATE,
  positionsLoadedReducer,
  positionsFinalizedReducer
);
