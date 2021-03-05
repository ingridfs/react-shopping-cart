import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

export default function Routes() {
  return (
    <BrowserRouter>

      <Route path="/" exact component={Home} />
      <Route path="/detalhes-produto/:id" exact component={ProductDetail} />
    </BrowserRouter>
  )
}
