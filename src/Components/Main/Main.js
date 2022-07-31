import React from "react";
import styles from "./Main.module.css";
import Counter from "../Counter/Counter";

const Main = () => {
  const onAdd = () => {
    console.log("agregado al carrito");
  };

  return (
    <div className={styles.main}>
      <Counter init={0} stock={10} onAdd={onAdd} />
    </div>
  );
};

export default Main;
