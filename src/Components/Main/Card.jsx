import React from "react";
import s from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ prod }) => {
  return (
    <div className={s.card}>
      <img src={prod.img} alt={prod.name} />
      <div className={s.info}>
        <h3>{prod.name}</h3>
        <h4>$ {prod.price}</h4>
        <Link to={`/detail/${prod.id}`}>Ver detalle</Link>
      </div>
    </div>
  );
};

export default Card;
