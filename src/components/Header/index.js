import React, { useState, useEffect } from 'react';

import './styles.css';

import cartIcon from '../../assets/images/shopping-cart.svg';

export default function Header(props) {

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    console.log("header props", props)
    const { addToCart } = props;
    if(addToCart){
      setCartProducts([...cartProducts, addToCart])
      localStorage.setItem("shoppingCart", JSON.stringify(cartProducts))
    }
  }, [props])

  return (
    <header className="header">
      <h1 className="brand">Store</h1>
      <div className="cart">
        <img src={cartIcon} alt="Shopping cart icon" className="cart-icon"></img>
        <span className="cart-badge">{cartProducts.length}</span>
      </div>

    </header>
  )
}
