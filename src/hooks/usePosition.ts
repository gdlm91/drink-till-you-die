import { useSelector } from "react-redux";

import { State } from "../store/types";
import { Player, PlayersList } from "../types";

export const usePosition = (position: number) => {
  const players = useSelector((state: State) => {
    const { players: listOfPlayers, positions } = state;

    if (!listOfPlayers || !positions) {
      return [];
    }

    return (
      Object.entries(positions)
        .filter(([accountId, pos]) => pos === position)
        .map(
          ([accountId, pos]) =>
            (listOfPlayers as PlayersList)[accountId] as Player
        )
        // we shouldn't need this, but just in case Players is an empty object when loading
        .filter(Boolean)
    );
  });

  return { players };
};
