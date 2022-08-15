import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "./CardDetail";

const DetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const URL = "https://fake-products-eric.herokuapp.com/api/products/detail";

  useEffect(() => {
    fetch(`${URL}/${id}`)
      .then((res) => res.json())
      .then((res) => setItem(res));
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Detalles</h2>
      <CardDetail item={item} />
    </div>
  );
};

export default DetailContainer;
