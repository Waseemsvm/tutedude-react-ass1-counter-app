import { useState } from "react";

export default function Counter1() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter1">
        <h4 className="fun-head">Functional Component</h4>
      <div className="count-display">
        <text>{count}</text>
      </div>
      <div className="buttons-container">
        <button
          disabled={count < 1}
          className="button"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <button
          className="button"
          onClick={(e) => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
