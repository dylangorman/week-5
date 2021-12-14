// USE STATE

import { useState } from "react";

// using class components
const IntroState = () => {
  const [persons, setPersons] = useState([
    { name: "Dan", age: 33 },
    { name: "Ben", age: 23 },
  ]);

  const [loggedIn, setLoggedIn] = useState(false);

  const greeting = (value) => {
    alert("hello" + value);
  };
// SHORT CIRCUIT 
return(
  <div>
  {loggedIn && <Person name={persons[0].name} func={greeting} />}
  </div>
)


  // IF STATEMENT 
  if (!loggedIn) {
    return (
      <div>
        <h1> your not logged in</h1>
        <button onClick={() => setLoggedIn(true)}>log in</button>
      </div>
    );
  return (
    <div>
      <Person name={persons[0].name} func={greeting} />
      <Person name={persons[1].name} func={greeting} />
    </div>
  );
};
const Person = (props) => {
  return (
    <div>
      <h1 onCLick={() => props.func(props.name)}>{props.name}</h1>
    </div>
  );
};
export default IntroState

