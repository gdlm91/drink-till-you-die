import { ofType } from "redux-observable";
import { flatMap } from "rxjs/operators";
import { of } from "rxjs";

import { Actions, Epic } from "./types";

// This can be extended to INIT other parts of the state, just ad more actions to the stream
export const initEpic: Epic = (action$) =>
  action$.pipe(
    ofType("INIT"),
    flatMap(() => of<Actions>({ type: "PLAYER_INIT" }))
  );
