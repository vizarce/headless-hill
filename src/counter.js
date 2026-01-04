import React from "react";
import { useState } from "react";

export function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <div className={props.class}>
      <h3>Кліків: {count}</h3>
      <button
        className={props.bclass}
        style={{ border: "1px solid white" }}
        onClick={() => setCount(count + 1)}
      >
        Збільшити
      </button>
      <button className={props.bnclass} onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export function CounterSimple() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>Кліків: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Збільшити</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}
