// A QUICK REFRESH ON HOW OR and AND OPERATORS WORK

// HOW OR || OPERATORS WORK
// console.log("Peter" || "Ray" || "Egon" || "Winston");
// console.log("" || "Ray" || "Egon" || "Winston");
// console.log("" || null || "Egon" || "Winston");
// console.log("" || null || NaN || "Winston");

// HOW and && OPERATORS WORK
// console.log("Peter" && "Ray" && "Egon" && "Winston");
// console.log("" && "Ray" && "Egon" && "Winston");
// console.log("Peter" && null && "Egon" && "Winston");
// console.log("Peter" && "Ray" && NaN && "Winston");

// SO LETS SET UP THIS FUNCTION
// EXAMPLE 1
// const dylansScore = 70;
// const leonsScore = 60;

// dylansScore > leonsScore &&
//   console.log(
//     `Dylan has a higher score then Leon. ${dylansScore} vs. ${leonsScore}`
//   );
// dylansScore < leonsScore &&
//   console.log(
//     `Dylan has a lower score then Leon. ${dylansScore} vs. ${leonsScore}`
//   );

// EXAMPLE 2
const user = {
  firstName: "Dylan",
  lastName: "Gorman",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },

  getAge: function () {
    return 33;
  },
};
user.getFullName && console.log(user.getFullName());
user.getAge && console.log(user.getAge());

// function ShortCircuit(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 && (
//         <h2>You have {unreadMessages.length} unread messages.</h2>
//       )}
//     </div>
//   );
// }

// const messages = ["React", "Re: React", "Re:Re: React"];
