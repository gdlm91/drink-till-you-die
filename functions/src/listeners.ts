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
          requestAction: false,
        },
        dice: {
          isRolling: false,
          rolled: false,
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
    const { currentPlayer, positions }: GameState =
      (await gameStateRef.once("value")).val() || {};

    // some piece of state is missing
    if (!currentPlayer?.accountId || !positions) {
      return;
    }

    // wait until it stops, or that the user actually rolls
    if (diceStateAfter.isRolling || !diceStateAfter.rolled) {
      return;
    }

    const { accountId } = currentPlayer;
    const { value: nextCount } = diceStateAfter;
    const currentPosition = positions[accountId];

    // some piece of state is missing
    if (currentPosition === undefined) {
      return;
    }

    gameStateRef.update({
      positions: {
        ...positions,
        [accountId]: getNextPosition(currentPosition, nextCount as DiceValues),
      },
      currentPlayer: {
        ...currentPlayer,
        requestAction: true,
      },
    } as Partial<GameState>);
  });
