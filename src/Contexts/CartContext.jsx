import React, { createContext, useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("items");
    return localData ? JSON.parse(localData) : [];
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalUnidades, setTotalUnidades] = useState(0);

  const addToCart = (item, cantidad) => {
    console.log({ ...item, cantidad });
    if (isInCart(item.id)) {
      sumarCantidad(item, cantidad);
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  const sumarCantidad = (item, cantidad) => {
    const productsUpdate = cart.map((prod) => {
      if (prod.id === item.id) {
        const newProduct = {
          ...prod,
          cantidad: prod.cantidad + cantidad,
        };
        return newProduct;
      } else {
        return prod;
      }
    });
    setCart(productsUpdate);
  };
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("items");
  };

  const deleteOne = (id) => {
    const productosFiltrados = cart.filter((prod) => prod.id !== id);
    setCart(productosFiltrados);
  };

  const total = useCallback(() => {
    const copia = [...cart];
    let count = 0;
    copia.forEach((prod) => {
      count += prod.price * prod.cantidad;
    });
    return setTotalPrice(count);
  }, [cart]);

  const unidades = useCallback(() => {
    const copia = [...cart];
    let count = 0;
    copia.forEach((prod) => {
      count += prod.cantidad;
    });
    return setTotalUnidades(count);
  }, [cart]);

  const disminuir = (item) => {
    const cartUpdate = cart.map((prod) =>
      prod.id === item.id ? { ...prod, cantidad: prod.cantidad - 1 } : prod
    );
    setCart(cartUpdate);
  };
  const aumentar = (item) => {
    const cartUpdate = cart.map((prod) =>
      prod.id === item.id ? { ...prod, cantidad: prod.cantidad + 1 } : prod
    );
    setCart(cartUpdate);
  };

  useEffect(() => {
    total();
    unidades();
    localStorage.setItem("items", JSON.stringify(cart));
  }, [cart, total, unidades]);

  return (
    <CartContext.Provider
      value={{
        cart,
        totalPrice,
        totalUnidades,
        addToCart,
        clearCart,
        deleteOne,
        total,
        disminuir,
        aumentar,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
