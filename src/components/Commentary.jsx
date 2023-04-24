import { useContext, useState } from "react";
import { ReducerContext } from "../reducer/context";

const Commentary = ({ value, blocId, evaluationId }) => {
  const [state, dispatch] = useContext(ReducerContext);
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    let type = "commentary";
    let evaluation = evaluationId;
    let blocs = blocId;
    if (evaluation === undefined) {
      type = "commentaryBloc";
    }
    const data = { type, blocs, evaluation, value: e.target.value };
    dispatch(data);
  };

  if (evaluationId === undefined) {
    return <textarea value={value} rows={10} cols={50} onChange={(e) => handleChange(e)} />;
  }

  return (
    <div>
      {show ? (
        <textarea value={value} rows={10} cols={50} onChange={(e) => handleChange(e)} />
      ) : (
        <button onClick={() => setShow(!show)}>add com</button>
      )}
    </div>
  );
};

export default Commentary;
