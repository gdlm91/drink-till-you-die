import { ofType, combineEpics } from "redux-observable";
import { flatMap } from "rxjs/operators";
import { of } from "rxjs";

import { Actions, Epic } from "./types";

// This can be extended to INIT other parts of the state, just add more actions to the stream
const initEpic: Epic = (action$) =>
  action$.pipe(
    ofType("INIT"),
    flatMap(() => of<Actions>({ type: "ACCOUNT_INIT" }))
  );

// This can be extended to INIT_AUTH other parts of the state, just add more actions to the stream
const initAuthorizedEpic: Epic = (action$) =>
  action$.pipe(
    ofType("INIT_AUTH"),
    flatMap(() =>
      of<Actions>(
        { type: "PLAYERS_INIT" },
        { type: "GAME_INIT" },
        { type: "DICE_INIT" },
        { type: "CURRENT_PLAYER_INIT" },
        { type: "POSITIONS_INIT" }
      )
    )
  );

export const initEpics = combineEpics(initEpic, initAuthorizedEpic);
