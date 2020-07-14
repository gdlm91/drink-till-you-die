import { Action } from "redux";
import { Epic as _Epic } from "redux-observable";
import { DiceState as _DiceState } from "../types";

//#region __UTILS

export interface __IGNORE extends Action {
  type: "__IGNORE";
}

export interface INIT extends Action {
  type: "INIT";
}

export interface INIT_AUTH extends Action {
  type: "INIT_AUTH";
}

export interface FINALIZE extends Action {
  type: "FINALIZE";
}

//#endregion

//#region PLAYERS

export interface ACCOUNT_INIT extends Action {
  type: "ACCOUNT_INIT";
}

export interface ACCOUNT_SHOW_REGISTRATION extends Action {
  type: "ACCOUNT_SHOW_REGISTRATION";
}

export interface ACCOUNT_REGISTER extends Action {
  type: "ACCOUNT_REGISTER";
  payload: {
    name: string;
    emoji: string;
  };
}

export interface ACCOUNT_LOAD extends Action {
  type: "ACCOUNT_LOAD";
  payload: {
    accountId: string;
  };
}

export interface ACCOUNT_UNREGISTER extends Action {
  type: "ACCOUNT_UNREGISTER";
}

export type AccountState =
  | {
      accountId?: string;
      active?: boolean;
      loading?: boolean;
      requestRegistration?: boolean;
    }
  | undefined;

//#endregion

//#region DICE

export type DiceState = _DiceState | undefined;

export interface DICE_INIT extends Action {
  type: "DICE_INIT";
}

export interface DICE_ROLL extends Action {
  type: "DICE_ROLL";
}

export interface DICE_ROLLED extends Action {
  type: "DICE_ROLLED";
  payload: DiceState;
}

export interface DICE_FINALIZE extends Action {
  type: "DICE_FINALIZE";
}

//#endregion

//#region UNION

export interface State {
  account?: AccountState;
  dice?: DiceState;
}

export type Actions =
  | __IGNORE
  | INIT
  | INIT_AUTH
  | FINALIZE
  | ACCOUNT_INIT
  | ACCOUNT_SHOW_REGISTRATION
  | ACCOUNT_REGISTER
  | ACCOUNT_LOAD
  | ACCOUNT_UNREGISTER
  | DICE_INIT
  | DICE_ROLL
  | DICE_ROLLED
  | DICE_FINALIZE;

export type Epic = _Epic<Actions, Actions, State>;

//#endregion UNION
