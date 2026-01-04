import React from "react";
import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <div className={props.class}>
      <p>Кліків: {count}</p>
      <button className={props.bclass} onClick={() => setCount(count + 1)}>
        Збільшити
      </button>
    </div>
  );
}
