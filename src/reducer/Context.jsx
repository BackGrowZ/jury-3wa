import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

const ReducerContext = createContext([]);

const ReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ReducerContext.Provider value={[state, dispatch]}>
      {children}
    </ReducerContext.Provider>
  );
};

export { ReducerContext, ReducerProvider };