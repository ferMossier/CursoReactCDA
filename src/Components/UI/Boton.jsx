import React from "react";

const Boton = ({ texto, variant, func}) => {
  return <button className={`${variant}`} onClick={func}>{texto}</button>;
};

export default Boton;
