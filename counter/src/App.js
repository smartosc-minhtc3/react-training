import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const valueColor = count > 0 ? "green" : count < 0 ? "red" : "black";

  return (
    <div class="container">
      <h1>Counter</h1>
      <span className="value" style={{ color: valueColor }}>
        {count}
      </span>
      <div class="btn-group">
        <button
          class="btn btn-decrease"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          DECREASE
        </button>
        <button
          class="btn btn-reset"
          onClick={() => {
            setCount(0);
          }}
        >
          RESET
        </button>
        <button
          class="btn btn-increase"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          INCREASE
        </button>
      </div>
    </div>
  );
}

export default App;
