import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

import { Actions } from "../store/types";

export const useGame = () => {
  const dispatch: Dispatch<Actions> = useDispatch();

  const resetGame = () => {
    dispatch({ type: "GAME_RESET" });
  };

  return { resetGame };
};
