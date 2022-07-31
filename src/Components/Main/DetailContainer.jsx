import React, { useEffect, useState } from 'react'
import CardDetail from './CardDetail';

const DetailContainer = () => {
    const [item, setItem] = useState({})
    useEffect(() => {
        fetch('https://fake-products-eric.herokuapp.com/api/products/detail/61ddfddb9a56e7e64e0bfeae')
        .then(res => res.json())
        .then(res => setItem(res));
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
            <h2>Detalles</h2>
            <CardDetail item={item} />
        </div>
  )
}

export default DetailContainer