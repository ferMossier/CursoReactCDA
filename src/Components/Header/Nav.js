import React from "react";
import s from "./Nav.module.css";
import carrito from "../../Assets/cart.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";

//Otra opción a Link es NavLink, que ofrece lo mismo que Link pero además agrega
//una clase al componente renderizado.

const Nav = ({ isInHeader, prueba }) => {
  const { totalUnidades } = useContext(CartContext);

  return (
    <nav className={isInHeader ? s.nav : s.navFooter}>
      <Link to="/">
        <h2>CDA</h2>
      </Link>
      <ul>
        <Link to={isInHeader && "/category/remeras"} onClick={prueba}>
          {isInHeader ? (
            "Remeras"
          ) : (
            <a href="https://www.instagram.com/">Instagram</a>
          )}
        </Link>
        <Link to={isInHeader && "/category/camisas"}>
          {isInHeader ? (
            "Camisas"
          ) : (
            <a href="https://www.facebook.com/">Facebok</a>
          )}
        </Link>
        <Link to={isInHeader && "/category/gorras"}>
          {isInHeader ? (
            "Gorras"
          ) : (
            <a href="https://www.Linkedin.com/">Linkedin</a>
          )}
        </Link>
        <Link to="/category/billeteras">{isInHeader && "Billeteras"}</Link>
        <Link to="/category/rinoneras">{isInHeader && "Riñoneras"}</Link>
      </ul>
      <Link to={isInHeader && "/cart"}>
        {isInHeader ? (
          <img src={carrito} alt="logo" />
        ) : (
          <img src="logo192.png" alt="logo" />
        )}
        <span>{isInHeader && totalUnidades}</span>
      </Link>
    </nav>
  );
};

export default Nav;
