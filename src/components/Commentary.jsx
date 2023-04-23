import { useContext } from "react";
import { ReducerContext } from "../reducer/context";

const Commentary = ({value, blocId, evaluationId}) => {
  const  [state, dispatch] = useContext(ReducerContext);

  const handleChange = (e) => {
    let type = "commentary";
    let evaluation = evaluationId;
    let blocs = blocId;
    if (evaluation === undefined) {
      type = "commentaryBloc";
    }
    const data = {type, blocs, evaluation, value:e.target.value}
    dispatch(data);
  };

  return (
    <div>
      <textarea value={value} rows={10} cols={50} onChange={(e) => handleChange(e)} />
    </div>
  );
};

export default Commentary;
