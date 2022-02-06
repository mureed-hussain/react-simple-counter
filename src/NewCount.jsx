import React, { useState } from "react";
import "./Counter.css";

export const NewCount = () => {
  const [count, setCount] = useState(0);
  const [reset, setReset] = useState(0);
  const Counter = () => {
    setCount(count + 1);
  };

  const Less = () => {
    setCount(count - 1);
  };

  const Reset = () => {
    setCount(reset);
  };

  if (Less > 0) {
    return alert("Now it,s Less than zero");
  } else {
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Counter}>Increase</button>
      <button onClick={Less}>Dcrease</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

// export default NewCount;
