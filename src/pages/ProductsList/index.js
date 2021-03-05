import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import api from '../../services/api';

import './styles.css';

export default function ProductsList() {

  const history = useHistory();

  const [productList, setProductList] = useState([]);
  const [addToCart, setAddToCart] = useState({});


  useEffect(() => {
    api.get('').then( response => {
      const { products } = response.data;
      setProductList(products)
    })
  }, []);

  function handleProductClick(id) {
    history.push(`/detalhes-produto/${id}`)
  }

  return (
    <div className="container">
      <Header addToCart={addToCart}/>
      <main>
        <div className="product-list">
          {productList.map( item => {
            return (
              <div key={item.id} className="product-list-item" >
                <div onClick={() => handleProductClick(item.id)}>
                  <img className="product-image" src={item.picture} alt={item.title}/>
                  <p className="product-text"> {item.title}</p>
                  <span className="product-price">R${item.price}</span>
                </div>
                <div className="product-buttons">
                <button onClick={() => setAddToCart(item)}>Adicionar ao Carrinho</button>
                </div>
              </div>
            )
          })}  
        </div>
      </main>
    </div>
  );
}
