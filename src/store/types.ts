import { Action } from "redux";

/** INIT */
/** --- */

export interface INIT extends Action {
  type: "INIT";
}

/** FAKE */
/** --- */

export type FakeState =
  | {
      name?: string;
    }
  | undefined;

export interface FAKE_SKIP extends Action {
  type: "FAKE_SKIP";
}

export interface FAKE_INIT extends Action {
  type: "FAKE_INIT";
}

export interface FAKE_LOADED extends Action {
  type: "FAKE_LOADED";
  payload: {
    name: string;
  };
}

/** Union Types */
/** ---------- */

export interface State {
  fake?: FakeState;
}

export type Actions = INIT | FAKE_SKIP | FAKE_INIT | FAKE_LOADED;
