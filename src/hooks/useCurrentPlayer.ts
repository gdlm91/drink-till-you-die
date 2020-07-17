import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";

import { State, Actions } from "../store/types";

export const useCurrentPlayer = () => {
  const currentPlayer = useSelector((state: State) => {
    const { players, currentPlayer, positions } = state;

    // case where something isn't loaded yet
    if (!players || !currentPlayer || !positions || !currentPlayer.accountId) {
      return undefined;
    }

    const position = positions[currentPlayer.accountId];
    const player = players[currentPlayer.accountId];

    if (position === undefined || !player) {
      return undefined;
    }

    return {
      ...player,
      position,
      ...currentPlayer,
    };
  });

  const dispatch: Dispatch<Actions> = useDispatch();

  const nextPlayer = () => {
    dispatch({ type: "CURRENT_PLAYER_NEXT" });
  };

  return { currentPlayer, nextPlayer };
};
