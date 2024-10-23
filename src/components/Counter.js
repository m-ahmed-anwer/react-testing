import React, { useState } from "react";
import "./Counter.css";

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCount(initialCount);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter</h1>
      <p data-testid="count-value" className="count-value">
        {count}
      </p>
      <button className="counter-button" onClick={increment}>
        Increment
      </button>
      <button className="counter-button" onClick={decrement}>
        Decrement
      </button>
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
