import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";

import { State, Actions } from "../store/types";

export const useDice = () => {
  const dice = useSelector((state: State) => state.dice);
  const dispatch: Dispatch<Actions> = useDispatch();

  const roll = () => {
    dispatch({ type: "DICE_ROLL" });
  };

  return { dice, roll };
};
