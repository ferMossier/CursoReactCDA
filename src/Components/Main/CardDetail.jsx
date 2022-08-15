import React, { useContext } from "react";
import style from "./CardDetail.module.css";
import Counter from "../Counter/Counter";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext";
import { isIn } from "../../Utils/utils";
//Componente  presentacional
const CardDetail = ({ item }) => {
  const { addToCart, cart } = useContext(CartContext);

  const isInCart = isIn(cart, item.id);
  const onAdd = (cantidad) => {
    addToCart(item, cantidad);
    navigate("/cart");
    // console.log(cantidad);
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
          {isInCart ? (
            <Link to="/cart">Ya está en el carrito</Link>
          ) : (
            <Counter initial={1} stock={item.stock} onAdd={onAdd} />
          )}
        </div>
        <button onClick={finalizarCompra}>Finalizar Compra</button>
      </div>
    </>
  );
};

export default CardDetail;
