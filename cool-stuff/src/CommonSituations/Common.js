import { useState } from "react";

const Common = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);
  const [userInput, setUserInput] = useState("");

  const addHandler = () => {
    const newArray = [...numbers];
    newArray.push(numbers[numbers.length - 1] + 1);
    setNumbers(newArray);
  };

  const removeHandler = (index) => {
    const newArray = [...numbers];
    newArray.splice(index, 1);
    setNumbers(newArray);
  };
  const update = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div>
      <h1>numbers</h1>

      <input type="text" onChange={update} />
      <h3>{userInput}</h3>
      {numbers.map((num, index) => {
        return (
          <>
            <h1 key={index}>{num}</h1>
            <button onClick={() => removeHandler(index)}>remove one</button>
          </>
        );
      })}
      <button onClick={addHandler}>add one</button>
    </div>
  );
};

export default Common;

// const another = () => {
// }
// const handler =() => {
//   addHandler()
//   another()
// }
