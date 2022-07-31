import React, { useEffect, useState } from 'react';
import CardList from './CardList';

//Componente contenedor
//Mantiene el estado. Son componentes de lógica
const CardContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://fake-products-eric.herokuapp.com/api/products')
            .then((res) => res.json())
            .then((res) => setItems(res));
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h2>Artículos</h2>
            <CardList items={items} />
        </div>
    );
};

export default CardContainer;
