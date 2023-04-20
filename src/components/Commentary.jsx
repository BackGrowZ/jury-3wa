import { useState } from "react";

const Commentary = () => {
  const [commentary, setCommentary] = useState("");

  return (
    <div>
      <textarea value={commentary} rows={10} cols={50} onChange={(e) => setCommentary(e.target.value)} />
    </div>
  );
};

export default Commentary;
