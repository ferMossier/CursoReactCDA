import React from "react";
import style from "./CardDetail.module.css";
import Counter from "../Counter/Counter";
import { useNavigate } from "react-router-dom";

//Componente  presentacional
const CardDetail = ({ item }) => {
  const onAdd = () => {
    console.log("producto agregado al carrito");
  };
//El hook useNavigate permite navegar en forma programática. Util para logins, formularios, etc.
  const navigate = useNavigate();

  const finalizarCompra = () => {
    navigate("/cart");
  };

  return (
    <>
      <div className={style.CardDetail}>
        <img src={item.img} alt={item.name} />
        <div>
          <h2>{item.name}</h2>
          <h3>$ {item.price}</h3>
          <h4>{item.categoria}</h4>
        </div>
        <div>
          <Counter initial={1} stock={item.stock} onAdd={onAdd} />
        </div>
        <button onClick={finalizarCompra}>Finalizar Compra</button>
      </div>
    </>
  );
};

export default CardDetail;
