import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { State, Actions } from "../store/types";

export const useCurrentPlayer = () => {
  const currentPlayer = useSelector((state: State) => state.currentPlayer);
  const dispatch: Dispatch<Actions> = useDispatch();

  const nextPlayer = () => {
    dispatch({ type: "CURRENT_PLAYER_NEXT" });
  };

  return { currentPlayer, nextPlayer };
};
