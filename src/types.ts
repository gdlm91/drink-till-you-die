export interface Player {
  accountId: string;
  name: string;
  emoji: string;
  connected: boolean;
}

export interface PlayersList {
  [acountId: string]: Player | undefined;
}

export interface Action {
  id: number;
  action: string;
  explanation: string;
}

export type DiceValues = 1 | 2 | 3 | 4 | 5 | 6;

export interface DiceState {
  isRolling?: boolean;
  value?: DiceValues;
  rolled?: boolean;
}

export interface CurrentPlayerState {
  accountId?: string;
  requestAction?: boolean;
}

export interface PositionsState {
  [accountId: string]: number | undefined;
}

export interface GameState {
  dice: DiceState;
  currentPlayer: CurrentPlayerState;
  positions: PositionsState;
}
