import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { GameState, DiceState, DiceValues } from "../../src/types";
import { getNextPosition } from "./utils";

const gameStateRef = admin.database().ref("/game");

export const initPosition = functions.database
  .ref("/players/{accountId}")
  .onCreate(async (snapshot, context) => {
    const gameState: GameState | null = (
      await gameStateRef.once("value")
    ).val();
    const accountId: string = context.params["accountId"];

    if (!gameState) {
      await gameStateRef.set({
        currentPlayer: {
          accountId: accountId,
        },
        dice: {
          isRolling: false,
          value: 1,
        },
      } as GameState);
    }

    const { positions } = gameState || { positions: {} };

    positions[accountId] = 0;

    return gameStateRef.update({
      positions: positions,
    } as Partial<GameState>);
  });

export const deletePosition = functions.database
  .ref("/players/{accountId}")
  .onDelete(async (snapshot, context) => {
    const gameState: GameState | null = (
      await gameStateRef.once("value")
    ).val();
    const accountId: string = context.params["accountId"];

    if (!gameState) {
      return;
    }

    const { positions } = gameState || { positions: {} };

    delete positions[accountId];

    return gameStateRef.update({
      positions: positions,
    } as Partial<GameState>);
  });

export const nextPosition = functions.database
  .ref("/game/dice")
  .onUpdate(async (snapshot) => {
    const diceStateAfter: DiceState = snapshot.after.val();

    // wait until it stops
    if (diceStateAfter.isRolling) {
      return;
    }

    const gameState: GameState | null = (
      await gameStateRef.once("value")
    ).val();

    if (!gameState) {
      return;
    }

    if (!gameState.currentPlayer.accountId) {
      return;
    }

    const { accountId } = gameState.currentPlayer;
    const currentPosition =
      gameState?.positions[gameState.currentPlayer.accountId];
    const { value: nextCount } = diceStateAfter;

    gameStateRef.update({
      positions: {
        ...gameState?.positions,
        [accountId]: getNextPosition(currentPosition, nextCount as DiceValues),
      },
    } as Partial<GameState>);
  });
