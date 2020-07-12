import { ofType } from "redux-observable";
import { flatMap } from "rxjs/operators";
import { of } from "rxjs";

import { Actions, Epic } from "./types";

// This can be extended to FINALIZE other parts of the state, just add more actions to the stream
export const finalizeEpic: Epic = (action$) =>
  action$.pipe(
    ofType("FINALIZE"),
    flatMap(() => of<Actions>({ type: "DICE_FINALIZE" }))
  );
