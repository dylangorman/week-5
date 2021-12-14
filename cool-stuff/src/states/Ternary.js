import "./Ternary.css";

import { useState } from "react";

/*
The Ternary Conditional Operator.
This is shorthand for the 'if (){}else{}' statement
Syntax: condition ? truthy expression : falsy expression
eg: isLoggedIn ? doWhenTrue : doWhenFalse
read more at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
*/

const SignInButton = () => {
  // useState hook
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="nav">
      <div className="btn">
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default SignInButton;
