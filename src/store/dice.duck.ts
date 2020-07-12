import { Reducer } from "redux";
import { combineEpics, ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { tap, mapTo, switchMap, map } from "rxjs/operators";
import { objectVal } from "rxfire/database";

import { db } from "../db/firebase";
import { reduceReducers } from "./utils";
import { Actions, Epic } from "./types";
import { DiceState } from "../types";
import { ajaxPost } from "rxjs/internal/observable/dom/AjaxObservable";

export type DiceReducer = Reducer<DiceState, Actions>;

const DICE_URL = `${process.env.REACT_APP_HTTPS_FUNCTIONS}/dice`;

/** REDUCERS */
/** -------- */

/** EPICS */
/** ----- */

const diceRoll: Epic = (action$) =>
  action$.pipe(
    ofType("DICE_ROLL"),
    switchMap(() => ajaxPost(`${DICE_URL}/roll`)),
    mapTo({ type: "__IGNORE" })
  );

/** EXPORTS */
/** ----- */

export const diceEpics = combineEpics(diceRoll);

// export const diceReducers = reduceReducers<DiceState, Actions>(
//   {},
//   fakeLogReducer,
//   fakeLoadedReducer
// );
