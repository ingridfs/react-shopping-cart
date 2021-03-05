import React from 'react';
import ProductsList from '../../components/ProductsList';
import ProductDetail from '../ProductDetail';

import './styles.css';

export default function Home() {
  return (
    <div className="container">
      <header>
          <h1 className="page-title">Home page</h1>
      </header>
      <main>
        <ProductsList />
        <ProductDetail />
      </main>
    </div>
  );
}
