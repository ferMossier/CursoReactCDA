import React from "react";
import s from "./Card.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavContext } from "../../Contexts/FavContext";
import { isIn } from "../../Utils/utils";

const Card = ({ prod }) => {
  const { addToFav, fav } = useContext(FavContext);
  const isInFav = isIn(fav, prod.id);
  return (
    <div className={s.card}>
      <img src={prod.img} alt={prod.name} />
      <div className={s.info}>
        <h3>{prod.name}</h3>
        <h4>$ {prod.price}</h4>
        <Link to={`/detail/${prod.id}`}>Ver detalle</Link>
        <button onClick={() => addToFav(prod)}>
          {isInFav ? "Ya Está en fav" : "Add to Fav"}
        </button>
      </div>
    </div>
  );
};

export default Card;
