// import React from "react";
import "./App.css";
// EXAMPLE 1
// const App = () => {
//   return (
//   <div>
//     <h1>I  am a funtional component</h1>
//     <Person />
//     <Person />
//     <Person />
//   </div>
//   );
// };
// const Person = () => {
//   return <h2>Hello There</h2>
// }
// export default App;

// EXAMPLE 2
const App = () => {
  return (
    <div>
      <h1>I'm a functional component</h1>
      <Person
        className="person"
        age="36"
        job="Illustrator"
        petName="Pikachu"
        type="mouse"
      />
      <Person
        name="Phoebee"
        age="7"
        job="Child"
        petName="Squirtle"
        type="Cat"
      />
      <Person
        name="Dylan"
        age="41"
        job="Junior Developer"
        petName="Charmander"
        type="Dog"
      />
    </div>
  );
};

const Person = (props) => {
  return (
    <div className="person">
      <h2>
        Hello there {props.name} and i'm {props.age}
      </h2>
      <Job job={props.job} />
      <Pet petName={props.petName} type={props.type} />
    </div>
  );
};
// or
// const Person = ({name,age}) => {
//   return <h2>Hello there {name} and i'm {age}</h2>
// } THIS WORKS THE SAME AS PROPS

const Job = (props) => {
  return <p>job role: {props.job}</p>;
};
const Pet = (props) => {
  return (
    <p>
      my pet is called {props.petName} its a {props.type}
    </p>
  );
};

export default App;
