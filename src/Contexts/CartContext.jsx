import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Función para conectar mi contexto con la información necesaria
  const addToCart = (item, cantidad) => {
    console.log({ ...item, cantidad });
    if (isInCart(item.id)) {
      // Sumar Cantidad
      alert("Ya está en el carrito");
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteOne = (id) => {
    const productosFiltrados = cart.filter((prod) => prod.id !== id);
    setCart(productosFiltrados);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, deleteOne }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
