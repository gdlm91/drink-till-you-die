import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as cors from "cors";

import { DiceValues, DiceState } from "../../src/types";

admin.initializeApp();

const app = express();

app.use(cors({ origin: true }));

const generateRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

app.post("/roll", async (req, res) => {
  const diceStateRef = admin.database().ref("/game/dice");
  const diceState: DiceState = (await diceStateRef.once("value")).val();

  if (diceState && diceState.isRolling) {
    res.json({ message: "Dice already rolling" });
  }

  const setDiceState = (newDiceState: DiceState) => {
    diceStateRef.set(newDiceState);
  };

  const rolls = generateRandomInt(5, 15);

  const rollDice = async () => {
    let newValue: number;

    for (let rollCount = rolls; rollCount >= 0; rollCount--) {
      newValue = generateRandomInt(1, 6) as DiceValues;
    }

    setTimeout(() => {
      setDiceState({
        isRolling: false,
        value: newValue as DiceValues,
      });
    }, 500 * rolls);
  };

  setDiceState({
    isRolling: true,
  });

  rollDice();

  res.json({ message: "Rolling dice now... Good luck!" });
});

export const dice = functions.https.onRequest(app);
