import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.css';

export default function ProductsList() {

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    api.get('').then( response => {
      const { products } = response.data;
      console.log(products)
      setProductList(products)
    })
  }, []);

  function handleProductClick(item) {

  }

  return (
    <div className="product-list">
       {productList.map( item => {
         return (
          <div key={item.id} className="product-list-item" onClick={handleProductClick(item)}>
            <img className="product-image" src={item.picture} alt={item.title}/>
            <p className="product-text"> {item.title}</p>
            <span className="product-price">R${item.price}</span>
            <div className="product-buttons">
              <button>Adicionar ao Carrinho</button>
            </div>
          </div>
         )
      })}  
    </div>
  );
}
