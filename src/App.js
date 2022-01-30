import React from "react";
import Counter from "./Counter";
import "./App.css";
import { NewCount } from "./NewCount";
const App = () => {
  return (
    <div>
      <Counter />
      <NewCount />
    </div>
  );
};

export default App;
