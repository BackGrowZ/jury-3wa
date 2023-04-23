import { useContext } from "react";
import { ReducerContext } from "../reducer/context";

const Checkbox = ({ label, value, blocId, evaluationId, checkboxId}) => {
  const  [state, dispatch] = useContext(ReducerContext);

  const handleChange = (e) => {
    dispatch({type:"checkbox", blocs:blocId, evaluation:evaluationId, checkbox:checkboxId, value:e.target.checked});
  };

  return (
    <label className="checkbox" >
      <input type="checkbox" checked={value} onChange={(e) => handleChange(e)} />
      {label && <span className="checkbox__label">{label}</span>}
    </label>
  );
};

export default Checkbox;
