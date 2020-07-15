import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { State, ACCOUNT_REGISTER, Actions } from "../store/types";

export const useAccount = () => {
  const account = useSelector((state: State) => state.account);
  const dispatch: Dispatch<Actions> = useDispatch();

  const register = (payload: ACCOUNT_REGISTER["payload"]) => {
    dispatch({ type: "ACCOUNT_REGISTER", payload });
  };

  const unregister = () => {
    dispatch({ type: "ACCOUNT_UNREGISTER" });
  };

  return { account, register, unregister };
};
