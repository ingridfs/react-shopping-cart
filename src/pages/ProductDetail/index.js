import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import api from '../../services/api';

import './styles.css';

export default function ProductDetail() {

  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [addToCart, setAddToCart] = useState({});

  useEffect(() => {
    api.get('').then( response => {
      const { products } = response.data;
      const productDetail = products.find( product => product.id == id);
      setProduct(productDetail);
    })
  }, []);
  
  return (
    <div className="container">
      <Header addToCart={addToCart}/>
      <main>
        <div className="product-details">
          <div className="description">
            <img src={product.picture} alt={product.title}/>
            <div className="description-text">
              <h2>{product.title}</h2>
              <h2>R${product.price}</h2>
              <button onClick={() => setAddToCart(product)}>Adicionar ao Carrinho</button>
            </div>
          </div>

          <div className="info">
            <h3>Descrição do Produto</h3>
            <p>{product.description}</p>

            <h3>Detalhes do Produto</h3>
            <p>Marca: {product.brand}</p>
            <p>Memória: {product.memory}</p>
            <p>Tipo de chip: {product.chipType}</p>
          </div>
        </div>

      </main>
    </div>
  )
}
