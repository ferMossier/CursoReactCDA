import React from "react";
import style from "./CardDetail.module.css";
import Counter from '../Counter/Counter'

const CardDetail = ({ item }) => {
    const onAdd = () => {
        console.log("producto agregado al carrito");
    }
  return (
    <>
      <div className={style.CardDetail}>
        <img src={item.img} alt={item.name} />
        <div>
          <h3>{item.name}</h3>
          <h4>$ {item.price}</h4>
        </div>
        <div>
        <Counter initial={1} stock={10} onAdd={onAdd}/>
      </div>
      </div>
      
    </>
  );
};

export default CardDetail;
