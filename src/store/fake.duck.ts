import { Reducer } from "redux";
import { Epic, combineEpics, ofType } from "redux-observable";
import { tap, mapTo, switchMap, map } from "rxjs/operators";
import { objectVal } from "rxfire/database";

import { db } from "../db/firebase";
import { reduceReducers } from "./utils";
import { Actions, State, FakeState, FAKE_LOADED } from "./types";

export type FakeReducer = Reducer<FakeState, Actions>;

export type FakeEpic = Epic<Actions, Actions, State>;

/** REDUCERS */
/** -------- */

const fakeLogReducer: FakeReducer = (state = {}, action) => {
  console.log("fakeLogReducer", {
    state,
    action,
  });

  return state;
};

const fakeLoadedReducer: FakeReducer = (state = {}, action) => {
  if (action.type !== "FAKE_LOADED") {
    return state;
  }

  return state;
};

/** EPICS */
/** ----- */

const fakeInitEpic: FakeEpic = (action$) =>
  action$.pipe(
    ofType("FAKE_INIT"),
    tap((action) => console.log("fakeInitEpic", { action })),
    switchMap(() => objectVal<FAKE_LOADED["payload"]>(db.ref("fake"))),
    map((value) => ({ type: "FAKE_LOADED", payload: value }))
  );

const fakeLogEpic: FakeEpic = (action$, state$) =>
  state$.pipe(
    tap((state) => {
      console.log("fakeLogEpic", { state });
    }),
    mapTo({ type: "FAKE_SKIP" } as Actions)
  );

/** EXPORTS */
/** ----- */

export const fakeEpics = combineEpics(fakeLogEpic, fakeInitEpic);

export const fakeReducers = reduceReducers<FakeState, Actions>(
  {},
  fakeLogReducer,
  fakeLoadedReducer
);
