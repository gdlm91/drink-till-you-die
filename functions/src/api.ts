import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import express from "express";
import cors from "cors";
import findIndex from "lodash/findIndex";

import { DiceValues, Player, GameState } from "../../src/types";

interface PlayersList {
  [key: string]: Player;
}

const app = express();

app.use(cors({ origin: true }));

const generateRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const gameStateRef = admin.database().ref("/game");

app.post("/roll-dice", async (req, res) => {
  const gameState: GameState = (await gameStateRef.once("value")).val();
  const { dice: diceState } = gameState;

  if (diceState && diceState.isRolling) {
    res.json({ message: "Dice already rolling" });
  }

  const setDiceState = (newDiceState: GameState["dice"]) => {
    gameStateRef.update({
      dice: newDiceState,
    });
  };

  const rolls = generateRandomInt(5, 10);

  const rollDice = async () => {
    let newValue: number;

    for (let rollCount = rolls; rollCount >= 0; rollCount--) {
      newValue = generateRandomInt(1, 6) as DiceValues;
    }

    setTimeout(() => {
      setDiceState({
        isRolling: false,
        value: newValue as DiceValues,
        rolled: true,
      });
    }, 500 * rolls);
  };

  setDiceState({
    isRolling: true,
  });

  rollDice();

  res.json({ message: "Rolling dice now... Good luck!" });
});

app.post("/next-player", async (req, res) => {
  const gameState: GameState = (await gameStateRef.once("value")).val();
  const { currentPlayer: playerState } = gameState;
  const playersRef = admin.database().ref("/players");
  const players: PlayersList = (await playersRef.once("value")).val();
  const playersKeys: string[] = Object.keys(players);

  if (!playerState.accountId) {
    res.json("No current player... Something must be broken");
    return;
  }

  if (!gameState.dice.rolled) {
    res.json("The player hasn't rolled the dice yet... Git them some time");
    return;
  }

  const currentPlayerIndex = playersKeys.indexOf(playerState.accountId);
  // create a stack of players without the current player, going from the current player all the way back to it's position.
  const playersStack = [
    ...playersKeys.slice(currentPlayerIndex + 1),
    ...playersKeys.slice(0, currentPlayerIndex),
  ];

  const nextPlayerIndex = findIndex(
    playersStack,
    (key) => players[key].connected
  );

  // If no next player, I guess you're playing alone or everybody left.
  const nextPlayerId =
    nextPlayerIndex >= 0
      ? playersStack[nextPlayerIndex]
      : playerState.accountId;

  gameStateRef.update({
    currentPlayer: {
      accountId: nextPlayerId,
      requestAction: false,
    },
    dice: {
      ...gameState.dice,
      rolled: false,
    },
  } as Partial<GameState>);

  res.json({ message: "Calling next player." });
});

app.post("/reset-game", async (req, res) => {
  const playersRef = admin.database().ref("/players");
  const players: PlayersList = (await playersRef.once("value")).val();

  await playersRef.remove();
  await gameStateRef.remove();
  await admin.auth().deleteUsers(Object.keys(players));

  res.json({ message: "Game resert." });
});

export const api = functions.https.onRequest(app);
