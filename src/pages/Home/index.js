import React from 'react';
import Header from '../../components/Header';
import ProductsList from '../../components/ProductsList';

import './styles.css';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <ProductsList />
      </main>
    </div>
  );
}
