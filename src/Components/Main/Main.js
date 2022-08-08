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
        {/* :id -> Los dos puntos indican que lo que viene después es dinámico */}
        <Route path="/detail/:id" element={<DetailContainer />} />
      </Routes>
    </div>
  );
};

//Todo lo que quede por fuera del routes va a estar siempre visible.
//En este caso serían los componentes <Header></Header> y <Footer></Footer>
export default Main;
