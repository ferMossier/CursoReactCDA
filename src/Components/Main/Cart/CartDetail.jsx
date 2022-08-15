import React from "react";

const CartDetail = ({ prod, deleteOne, disminuir, aumentar }) => {
  return (
    <div
      key={prod.id}
      style={{
        display: "flex",
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
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
        <article>
          <h3>{prod.name}</h3>
          <div>
            <button
              onClick={() => disminuir(prod)}
              disabled={prod.cantidad === 1}
            >
              -
            </button>
            <h4>{prod.cantidad}</h4>
            <button
              onClick={() => aumentar(prod)}
              disabled={prod.cantidad === prod.stock}
            >
              +
            </button>
            <h4>* $ {prod.price}</h4>
            <h4>${prod.price * prod.cantidad}.-</h4>
          </div>
        </article>
        <button onClick={() => deleteOne(prod.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartDetail;
