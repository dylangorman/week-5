// import { useState } from "react";
// const MapMethod = () => {
//   const people = ["Bilbo", "frodo", "gandalf"];
//   return (
//     <div>
//       <h1>map method</h1>
//       {people.map((person) => {
//         return <h2>{person}</h2>;
//       })}
//     </div>
//   );
// };

import { useState } from "react";

const MapMethod = () => {
  const [christmasMovies, setChristmasMovies] = useState([
    { movie: "point break", date: "1991" },
    { movie: "fellowship of the ring", date: "2001" },
    { movie: "potter", date: "2001" },
    { movie: "die hard", date: "1989" },
  ]);

  return (
    <div>
      <h1>map method - movies</h1>
      {christmasMovies.map((film, index) => {
        return <Card key={index} name={film.movie} date={film.date} />;
      })}
    </div>
  );
};
const Card = (props) => {
  return (
    <div>
      <h2>Title of Movie: {props.name}</h2>
      <p>release date: {props.date}</p>
    </div>
  );
};
export default MapMethod;
