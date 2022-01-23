import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [reset, setReset] = useState(0);

  return (
    <div className="Counter">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Dcrease</button>
      <button onClick={() => setCount(reset)}>Reset</button>
    </div>
  );
};

export default Counter;
