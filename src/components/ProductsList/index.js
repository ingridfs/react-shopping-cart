import React, { useEffect, useState } from 'react';

import './styles.css';

const BASE_URL = "https://api-desafio-front.justdigital.com.br/";

export default function ProductsList() {

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
    .then(response => response.json())
    .then(json => {
      const { products } = json;
      setProductList(Array(...products))
    })
  }, []);

  return (
    <div className="product-list">
       {productList.map( item => {
         return (
          <div key={item.id} className="product-list-item">
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
