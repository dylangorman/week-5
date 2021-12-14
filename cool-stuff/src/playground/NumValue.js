import { useState } from "react";
const NumValue = () => {
  const [num, setNum] = useState(0);
  const minusHandler = () => {
    setNum(num - 1);
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onCLick={() => setNum(num + 1)}>add one</button>

      {/* handler way  */}
      <button onCLick={minusHandler}>minus one</button>
    </div>
  );
};

export default NumValue;
