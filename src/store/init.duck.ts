import { Epic, ofType } from "redux-observable";
import { tap, flatMap } from "rxjs/operators";
import { of } from "rxjs";

import { Actions } from "./types";

// This can be extended to INIT other parts of the state, just ad more actions to the stream
export const initEpic: Epic<Actions, Actions> = (action$) =>
  action$.pipe(
    ofType("INIT"),
    tap((action) => console.log("initEpic", { action })),
    flatMap(() => of<Actions>({ type: "FAKE_INIT" }))
  );
