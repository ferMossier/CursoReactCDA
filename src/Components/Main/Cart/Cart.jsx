import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Contexts/CartContext";
import CartDetail from "./CartDetail";

const Cart = () => {
  const { cart, clearCart, deleteOne, totalPrice, disminuir, aumentar } =
    useContext(CartContext);
  console.log(cart);
  if (cart.length === 0) {
    return (
      <div>
        <h2>No agregaste ningún producto al carrito de compras</h2>
        <Link to="/">Aquí</Link> podrás elegir tus productos
      </div>
    );
  }
  return (
    <>
      <div>
        {cart.map((prod) => (
          <CartDetail
            key={prod.id}
            prod={prod}
            deleteOne={deleteOne}
            disminuir={disminuir}
            aumentar={aumentar}
          />
        ))}
        <div>
          <button onClick={clearCart}>Vaciar carrito</button>
          <h2>Total: ${totalPrice}</h2>
        </div>
      </div>
    </>
  );
};

export default Cart;
