import React, { useContext } from "react";
import { CartContext } from "../../../Contexts/CartContext";

const Cart = () => {
  const { cart, clearCart, deleteOne } = useContext(CartContext);
  console.log(cart);
  return (
    <>
      <div>
        {cart.map((prod) => (
          <div
            key={prod.id}
            style={{
              display: "flex",
              border: "1px solid black",
              margin: "10px",
              padding: "9px",
            }}
          >
            <img src={prod.img} alt={prod.name} width="70px" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div>
                <h2>{prod.name}</h2>
                <h2>Cantidad: {prod.cantidad}</h2>
                <h2>${prod.price}</h2>
                <h3>Subtotal: {prod.price * prod.cantidad}</h3>
              </div>
              <button onClick={() => deleteOne(prod.id)}>Eliminar</button>
            </div>
          </div>
        ))}
        {cart.length !== 0 ? (
          <>
            <button onClick={clearCart}>Vaciar carrito</button>
            <h2>Total: $</h2>
          </>
        ) : (
          <h1>No hay productos</h1>
        )}
      </div>
    </>
  );
};

export default Cart;
