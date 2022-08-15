import React, { createContext } from "react";
import { useState } from "react";

export const FavContext = createContext();

export const FavProvider = ({ children }) => {
  const [fav, setFav] = useState([]);
  console.log(fav);

  const addToFav = (item) => {
    if (isInfav(item.id)) {
      const filterFavorites = fav.filter((favo) => favo.id !== item.id);
      setFav(filterFavorites);
    } else {
      setFav([...fav, { ...item, favorite: true }]);
    }
  };

  const isInfav = (id) => {
    return fav.some((favorite) => favorite.id === id);
  };
  return (
    <FavContext.Provider value={{ fav, addToFav }}>
      {children}
    </FavContext.Provider>
  );
};
