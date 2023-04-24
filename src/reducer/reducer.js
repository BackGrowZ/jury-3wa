import checkbox from "./function/checkbox.js";
import { comment, commentBloc } from "./function/comment.js";
import rating from "./function/rating.js";
import oldRNCP from "../data/oldRNCP.json";

const initialState = oldRNCP;

const reducer = (state, action) => {
  switch (action.type) {
    case "rate":
      const data = rating(state, action);
      return {
        ...state,
        blocs: data,
      };
    case "commentary":
      const com = comment(state, action);
      return {
        ...state,
        blocs: com,
      };
    case "commentaryBloc":
      const comBloc = commentBloc(state, action);
      return {
        ...state,
        blocs: comBloc,
      };
    case "checkbox":
      const check = checkbox(state, action);
      return {
        ...state,
        blocs: check,
      };
    case "reset":
      return {
        ...state,
        blocs: initialState.blocs,
      };
    default:
      return state;
  }
};

export { reducer, initialState };
