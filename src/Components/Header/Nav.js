import React from 'react';
import s from './Nav.module.css';
import carrito from '../../Assets/cart.svg';
//import { AiOutlineShoppingCart } from 'react-icons/ai';

const Nav = ({ isInHeader, prueba }) => {
    return (
        <nav className={isInHeader ? s.nav : s.navFooter}>
            <h2>CDA</h2>
            <ul>
                <li onClick={prueba}>{isInHeader ? 'Remeras' : 'Instagram'}</li>
                <li>{isInHeader ? 'Camisas' : 'Facebok'}</li>
                <li>{isInHeader ? 'Gorras' : 'Linkedin'}</li>
            </ul>
            {/* {isInHedaer ? <img src="logo192.png" /> : <img src={carrito} />} */}
            <img src={isInHeader ? carrito : 'logo192.png'} alt="logo" />
            {/* <img src='adress desde la web' alt="logo" /> */}
            {/* <AiOutlineShoppingCart size={30} color="red" /> */}
        </nav>
    );
};

export default Nav;
