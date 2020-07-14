import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createEpicMiddleware, combineEpics, Epic } from "redux-observable";

import { State, Actions } from "./types";

import { initEpics } from "./init.duck";
import { finalizeEpic } from "./finalize.duck";
import { accountEpics, accountReducers } from "./account.duck";
import { diceEpics, diceReducers } from "./dice.duck";

const rootEpic: Epic = combineEpics(
  initEpics,
  accountEpics,
  diceEpics,
  finalizeEpic
);

const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers<State, Actions>({
  account: accountReducers,
  dice: diceReducers,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

store.dispatch({ type: "INIT" });

export default store;
