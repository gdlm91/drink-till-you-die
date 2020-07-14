import { useSelector } from "react-redux";
import { State } from "../store/types";
import { PositionsState, Player, PlayersList } from "../types";
import { usePlayers } from "./usePlayers";

export const usePosition = (position: number) => {
  const { players: listOfPlayers } = usePlayers();

  const players = useSelector((state: State) => {
    return (
      listOfPlayers &&
      Object.entries<number>(state.positions || ({} as PositionsState))
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
