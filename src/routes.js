import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import ProductsList from './pages/ProductsList';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ProductsList} />
      <Route path="/detalhes-produto/:id" exact component={ProductDetail} />
    </BrowserRouter>
  )
}
