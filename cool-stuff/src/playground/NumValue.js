import { useState } from "react";
const NumValue = () => {
  const [num, setNum] = useState(0);
  const minusHandler = () => {
    setNum(num - 1);
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>add one</button>
      <button onClick={minusHandler}>minus one</button>
    </div>
  );
};
export default NumValue;
