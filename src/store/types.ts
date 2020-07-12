import { Action } from "redux";
import { Epic as _Epic } from "redux-observable";

//#region __UTILS

export interface __IGNORE extends Action {
  type: "__IGNORE";
}

//#endregion

//#region INIT

export interface INIT extends Action {
  type: "INIT";
}

export interface INIT_AUTH extends Action {
  type: "INIT_AUTH";
  payload: {
    accountId: string;
  };
}

//#endregion

//#region PLAYERS

export interface PLAYER_INIT extends Action {
  type: "PLAYER_INIT";
}

export interface PLAYER_SHOW_REGISTRATION extends Action {
  type: "PLAYER_SHOW_REGISTRATION";
}

export interface PLAYER_REGISTER extends Action {
  type: "PLAYER_REGISTER";
  payload: {
    name: string;
    emoji: string;
  };
}

export interface PLAYER_LOAD extends Action {
  type: "PLAYER_LOAD";
  payload: {
    accountId: string;
  };
}

export interface PLAYER_UNREGISTER extends Action {
  type: "PLAYER_UNREGISTER";
}

export type PlayerState =
  | {
      accountId?: string;
      active?: boolean;
      loading?: boolean;
      requestRegistration?: boolean;
    }
  | undefined;

//#endregion

//#region DICE

export interface DICE_ROLL extends Action {
  type: "DICE_ROLL";
}

//#endregion

//#region FAKE

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

//#endregion

//#region UNION

export interface State {
  fake?: FakeState;
  player?: PlayerState;
}

export type Actions =
  | __IGNORE
  | INIT
  | INIT_AUTH
  | PLAYER_INIT
  | PLAYER_SHOW_REGISTRATION
  | PLAYER_REGISTER
  | PLAYER_LOAD
  | PLAYER_UNREGISTER
  | DICE_ROLL
  | FAKE_SKIP
  | FAKE_INIT
  | FAKE_LOADED;

export type Epic = _Epic<Actions, Actions, State>;

//#endregion UNION
