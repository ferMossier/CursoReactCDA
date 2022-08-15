import React, { useState } from "react";

const Counter = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const aumentar = () => {
    count < stock && setCount(count + 1);
  };

  const restar = () => {
    initial < count && setCount(count - 1);
  };

  const reset = () => {
    setCount(initial);
  };
  //En esta función sucede el state uplifting (pasaje de info de hijo a padre)
  //Sucede porque el padre le pasa una función al hijo y este ejecuta esa función enviándole un dato como parámetro
  const agregar = () => {
    onAdd(count);
  };
  return (
    <div style={{ padding: "30px", margin: "20px" }}>
      <button onClick={restar}>-</button>
      <p>{count}</p>
      <button onClick={aumentar}>+</button>
      <div>
        <button onClick={agregar}>Add</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
