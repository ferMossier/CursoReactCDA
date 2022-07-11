import React from "react";
// import './Header.css'
import style from './Header.module.css';

const styles = {
    navbar:{
        backgroundColor: 'blue'
    }
}

const Header = () => {
    return(
        <header className={style.navbar}>
            <nav>
                <h2>CDA</h2>
                <ul style = {styles.navbar}>
                    <li>Remeras</li>
                    <li>Camisas</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;