import React, { useState, useEffect } from "react";
import "./Counter.css";

const Counter = () => {
  // use state is a method and returns an array. the first is the state/value
  // The second position is a function to change the state
  // setCounter will change the variable state. It's a function, and you can give it any name
  const [counter, setCounter] = useState(0);

  //use effect recieves a callback function and a dependencies array
  useEffect(() => {}, []);

  // every state modifier call will re-render the application;
  const handleOnClick = (operator) => {
    const value = operator === "+" ? counter + 1 : counter - 1;
    setCounter(value);
  };

  return (
    <>
      <div className="counter">
        <span>{counter}</span>
        <button onClick={() => handleOnClick("-")}>-</button>
        <button onClick={() => handleOnClick("+")}>+</button>
      </div>
    </>
  );
};

export default Counter;
