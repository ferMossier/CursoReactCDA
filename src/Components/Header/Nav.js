import React from "react";
import s from "./Nav.module.css";
import carrito from "../../Assets/cart.svg";
import { Link } from "react-router-dom";

//Otra opción a Link es NavLink, que ofrece lo mismo que Link pero además agrega
//una clase al componente renderizado.

const Nav = ({ isInHeader, prueba }) => {
  return (
    <nav className={isInHeader ? s.nav : s.navFooter}>
      <Link to="/">
        <h2>CDA</h2>
      </Link>
      <ul>
        <Link
          to={isInHeader ? "/category/remeras" : "https://www.instagram.com/"}
          onClick={prueba}
        >
          {isInHeader ? "Remeras" : "Instagram"}
        </Link>
        <Link to="/category/camisas">{isInHeader ? "Camisas" : "Facebok"}</Link>
        <Link to="/category/gorras">{isInHeader ? "Gorras" : "Linkedin"}</Link>
      </ul>
      <Link to="/cart">
        <img src={isInHeader ? carrito : "logo192.png"} alt="logo" />
      </Link>
    </nav>
  );
};

export default Nav;
