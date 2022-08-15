import React from "react";
import CardContainer from "./CardContainer";
import DetailContainer from "./DetailContainer";
import Cart from "./Cart/Cart";
import styles from "./Main.module.css";
import { Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/" element={<CardContainer />} />
        <Route path="/category/:categoryId" element={<CardContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<DetailContainer />} />
      </Routes>
    </div>
  );
};

export default Main;
