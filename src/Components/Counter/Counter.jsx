import React, { useState } from "react";
import Boton from "../UI/Boton";

const Counter = ({ stock, init, onAdd }) => {
  const [count, setCount] = useState(init);

  const aumentar = () => {
    count < stock && setCount(count + 1);
  };

  const restar = () => {
    init < count && setCount(count - 1);
  };

  return (
    <div style={{ padding: "30px", margin: "20px" }}>
      <Boton func={aumentar} texto="+" variant={"primary"}/>
      <p>{count}</p>
      <Boton func={restar} texto="-" variant={"primary"} />
      <div>
        < Boton func={onAdd} texto="ADD" variant={"secondary"} />
      </div>
    </div>
  );
};

export default Counter;
