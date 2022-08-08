import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardList from "./CardList";

//Componente contenedor
//Mantiene el estado. Son componentes de lógica
const CardContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const URL = "https://fake-products-eric.herokuapp.com/api/products";

  useEffect(() => {
    (categoryId ? fetch(`${URL}/category/${categoryId}`) : fetch(URL))
      .then((res) => res.json())
      .then((res) => setItems(res));
  }, [categoryId]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Artículos</h2>
      <CardList items={items} />
    </div>
  );
};

export default CardContainer;
