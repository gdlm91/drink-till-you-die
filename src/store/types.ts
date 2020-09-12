import { Action } from "redux";
import { Epic as _Epic } from "redux-observable";
import {
  PlayersList,
  Player,
  GameState as _GameState,
  DiceState as _DiceState,
  CurrentPlayerState as _CurrentPlayerState,
  PositionsState as _PositionsState,
} from "../types";

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

//#region ACCOUNT

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

//#region PLAYERS

export type PlayersState = PlayersList | undefined;

export interface PLAYERS_INIT extends Action {
  type: "PLAYERS_INIT";
}

export interface PLAYERS_LOADED extends Action {
  type: "PLAYERS_LOADED";
  payload: PlayersList;
}

export interface PLAYERS_FINALIZE extends Action {
  type: "PLAYERS_FINALIZE";
}

//#endregion

//#region GAME

export type GameState = _GameState | {} | undefined;

export interface GAME_INIT extends Action {
  type: "GAME_INIT";
}

export interface GAME_LOADED extends Action {
  type: "GAME_LOADED";
  payload: GameState;
}

export interface GAME_FINALIZE extends Action {
  type: "GAME_FINALIZE";
}

export interface GAME_RESET extends Action {
  type: "GAME_RESET";
}

//#endregion

//#region CURRENT_PLAYER

export type CurrentPlayerState = _CurrentPlayerState | undefined;

export interface CURRENT_PLAYER_INIT extends Action {
  type: "CURRENT_PLAYER_INIT";
}

export interface CURRENT_PLAYER_LOADED extends Action {
  type: "CURRENT_PLAYER_LOADED";
  payload: GameState;
}

export interface CURRENT_PLAYER_NEXT extends Action {
  type: "CURRENT_PLAYER_NEXT";
}

export interface CURRENT_PLAYER_FINALIZE extends Action {
  type: "CURRENT_PLAYER_FINALIZE";
}

//#endregion

//#region POSITIONS

export type PositionsState = _PositionsState | undefined;

export interface POSITIONS_INIT extends Action {
  type: "POSITIONS_INIT";
}

export interface POSITIONS_LOADED extends Action {
  type: "POSITIONS_LOADED";
  payload: GameState;
}

export interface POSITIONS_FINALIZE extends Action {
  type: "POSITIONS_FINALIZE";
}

//#endregion

//#region UNION

export interface State {
  account?: AccountState;
  players?: PlayersState;
  game?: GameState;
  dice?: DiceState;
  currentPlayer?: CurrentPlayerState;
  positions?: PositionsState;
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
  | PLAYERS_INIT
  | PLAYERS_LOADED
  | PLAYERS_FINALIZE
  | GAME_INIT
  | GAME_LOADED
  | GAME_FINALIZE
  | GAME_RESET
  | DICE_INIT
  | DICE_ROLL
  | DICE_ROLLED
  | DICE_FINALIZE
  | CURRENT_PLAYER_INIT
  | CURRENT_PLAYER_LOADED
  | CURRENT_PLAYER_NEXT
  | CURRENT_PLAYER_FINALIZE
  | POSITIONS_INIT
  | POSITIONS_LOADED
  | POSITIONS_FINALIZE;

export type Epic = _Epic<Actions, Actions, State>;

//#endregion UNION
