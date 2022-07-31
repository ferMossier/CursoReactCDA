import React from 'react'
import style from './Header.module.css';
import Nav from './Nav';

const Header = () => {
    // const prueba = () => {
    //     console.log('Click');
    // };
    return (
        <header className={style.header}>
            <Nav isInHeader={true} />
        </header>
    );
};

export default Header;
