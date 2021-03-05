import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import './styles.css';

import cartIcon from '../../assets/images/shopping-cart.svg';

export default function Header(props) {

  const [ cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const localStorageProducts = localStorage.getItem('shoppingCart')
    const latestProducts = JSON.parse(localStorageProducts)
    if(latestProducts){
      setCartProducts([...latestProducts])
    }

  }, [, props])

  useEffect(() => {
    const { addToCart } = props;
    if(Object.entries(addToCart).length >= 1  ) {
      const updatedCart = [...cartProducts, addToCart]
      setCartProducts(updatedCart) 
      localStorage.setItem('shoppingCart', JSON.stringify(updatedCart))
    }
  }, [props])

  return (
    <header className="header">
      <Link to="/" className="brand">
        <h1>Store</h1>
      </Link>
      <div className="cart">
        <img src={cartIcon} alt="Shopping cart icon" className="cart-icon"></img>
        <span className="cart-badge">{cartProducts ? cartProducts.length : 0 }</span>
      </div>

    </header>
  )
}
