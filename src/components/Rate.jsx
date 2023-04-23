import { useContext } from "react";
import { ReducerContext } from "../reducer/context";

const Rate = ({value, blocId, evaluationId}) => {
  const  [state, dispatch] = useContext(ReducerContext);

  const ratingChange = (value) => {
    dispatch({type:"rate", blocs:blocId, evaluation:evaluationId, value:value})
  }

  return (
    <div>
      <h3>Rate {value}</h3>
      <input type="range" value={value} min={0} max={5} step={1} onChange={(e) => ratingChange(e.target.value)} />
    </div>
  );
};

export default Rate;
