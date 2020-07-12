import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createEpicMiddleware, combineEpics, Epic } from "redux-observable";
import { catchError } from "rxjs/operators";

import { State, Actions } from "./types";

import { initEpic } from "./init.duck";
import { playerEpics, playerReducers } from "./player.duck";

const rootEpic: Epic = (action$, state$, dependencies) =>
  combineEpics(initEpic, playerEpics)(action$, state$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    })
  );

const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers<State, Actions>({
  player: playerReducers,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

store.dispatch({ type: "INIT" });

export default store;
