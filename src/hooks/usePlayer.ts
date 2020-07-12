import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { State, PLAYER_REGISTER, Actions } from "../store/types";

export const usePlayer = () => {
  const player = useSelector((state: State) => state.player);
  const dispatch: Dispatch<Actions> = useDispatch();

  const register = (payload: PLAYER_REGISTER["payload"]) => {
    dispatch({ type: "PLAYER_REGISTER", payload });
  };

  const unregister = () => {
    dispatch({ type: "PLAYER_UNREGISTER" });
  };

  return { player, register, unregister };
};
