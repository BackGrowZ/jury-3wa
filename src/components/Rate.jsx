import { useState } from "react";

const Rate = () => {
  const [rate, setRate] = useState(0);

  return (
    <div>
      <h3>Rate {rate}</h3>
      <input type="range" value={rate} min={0} max={5} step={1} onChange={(e) => setRate(e.target.value)} />
    </div>
  );
};

export default Rate;
