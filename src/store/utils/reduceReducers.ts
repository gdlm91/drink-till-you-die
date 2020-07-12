import { Reducer, Action } from "redux";

export function reduceReducers<S, A extends Action>(
  initialState: S,
  ...reducers: Reducer<S, A>[]
): Reducer<S, A> {
  return (state, action) => {
    return reducers.reduce(
      (accState, reducer) => reducer(accState, action),
      state || initialState
    );
  };
}
