import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createEpicMiddleware, combineEpics, Epic } from "redux-observable";

import { State, Actions } from "./types";

import { initEpics } from "./init.duck";
import { accountEpics, accountReducers } from "./account.duck";
import { playersEpics, playersReducers } from "./players.duck";
import { gameEpics, gameReducers } from "./game.duck";
import { diceEpics, diceReducers } from "./dice.duck";
import { finalizeEpic } from "./finalize.duck";
import {
  currentPlayerEpics,
  currentPlayerReducers,
} from "./currentPlayer.duck";
import { positionsEpics, positionsReducers } from "./positions.duck";

const rootEpic: Epic = combineEpics(
  initEpics,
  accountEpics,
  playersEpics,
  gameEpics,
  diceEpics,
  currentPlayerEpics,
  positionsEpics,
  finalizeEpic
);

const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers<State, Actions>({
  account: accountReducers,
  players: playersReducers,
  game: gameReducers,
  dice: diceReducers,
  currentPlayer: currentPlayerReducers,
  positions: positionsReducers,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

store.dispatch({ type: "INIT" });

export default store;
