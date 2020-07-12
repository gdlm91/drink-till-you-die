import { Reducer } from "redux";
import { combineEpics, ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { mapTo, switchMap, map, catchError } from "rxjs/operators";
import { objectVal } from "rxfire/database";

import { db } from "../db/firebase";
import { reduceReducers } from "./utils";
import { Actions, Epic, DiceState } from "./types";
import { of } from "rxjs";

export type DiceReducer = Reducer<DiceState, Actions>;

const DICE_URL = `${process.env.REACT_APP_HTTPS_FUNCTIONS}/dice`;

const INITIAL_STATE: DiceState = {};

/** REDUCERS */
/** -------- */

const diceRollReducer: DiceReducer = (state = INITIAL_STATE, action) => {
  if (action.type !== "DICE_ROLL") {
    return state;
  }

  return {
    ...state,
    isRolling: true,
  };
};

const diceRolledReducer: DiceReducer = (state = INITIAL_STATE, action) => {
  if (action.type !== "DICE_ROLLED") {
    return state;
  }

  return {
    ...state,
    ...action.payload,
  };
};

const diceFinalizedReducer: DiceReducer = (state = INITIAL_STATE, action) => {
  if (action.type !== "DICE_FINALIZE") {
    return state;
  }

  return INITIAL_STATE;
};

/** EPICS */
/** ----- */

const diceInit: Epic = (action$, state$) =>
  action$.pipe(
    ofType("DICE_INIT"),
    switchMap(() => {
      const ref = db.ref("/game/dice");

      return objectVal<DiceState>(ref);
    }),
    catchError((error) => {
      console.error(error);

      return of(INITIAL_STATE);
    }),
    map((diceState: DiceState) => ({
      type: "DICE_ROLLED",
      payload: diceState,
    }))
  );

const diceRoll: Epic = (action$) =>
  action$.pipe(
    ofType("DICE_ROLL"),
    switchMap(() => ajax.post(`${DICE_URL}/roll`)),
    mapTo({ type: "__IGNORE" })
  );

/** EXPORTS */
/** ----- */

export const diceEpics = combineEpics(diceInit, diceRoll);

export const diceReducers = reduceReducers<DiceState, Actions>(
  INITIAL_STATE,
  diceRollReducer,
  diceRolledReducer,
  diceFinalizedReducer
);
