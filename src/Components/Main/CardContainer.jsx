import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardList from "./CardList";

//Componente contenedor
//Mantiene el estado. Son componentes de lógica
const CardContainer = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const URL = "https://fake-products-eric.herokuapp.com/api/products";

  useEffect(() => {
    setLoading(true);
    (categoryId ? fetch(`${URL}/category/${categoryId}`) : fetch(URL))
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
        setLoading(false);
      });
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
      {loading ? <h1>CARGANDO...</h1> : <CardList items={items} />}
    </div>
  );
};

export default CardContainer;
