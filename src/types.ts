export interface Player {
  accountId: string;
  name: string;
  emoji: string;
  connected: boolean;
  active?: boolean;
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
}

export interface CurrentPlayerState {
  accountId: string;
}

export interface PositionsState {
  [accountId: string]: number;
}

export interface GameState {
  dice: DiceState;
  currentPlayer: CurrentPlayerState;
  positions: PositionsState;
}
