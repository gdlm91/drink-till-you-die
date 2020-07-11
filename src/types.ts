export interface User {
  name: string;
  emoji: string;
}

export interface Action {
  id: number;
  action: string;
  explanation: string;
}

export type DiceValues = 1 | 2 | 3 | 4 | 5 | 6;
