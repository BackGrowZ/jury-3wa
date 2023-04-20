import { useState } from "react";

const Checkbox = ({ label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="checkbox">
      <input type="checkbox" checked={checked} onChange={() => setChecked((value) => !value)} />
      {label && <span className="checkbox__label">{label}</span>}
    </label>
  );
};

export default Checkbox;
