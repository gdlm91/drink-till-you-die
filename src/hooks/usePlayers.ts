import { useSelector } from "react-redux";
import { State } from "../store/types";

export const usePlayers = () => {
  const players = useSelector((state: State) => state.players);

  return { players };
};
