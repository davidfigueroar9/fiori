import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './modules/Home';
import Cart from './modules/Cart';
import Account from './modules/Account';
import Wishlist from './modules/Wishlist';
import NavbarDown from './components/NavbarDown';
import NewArrivals from './modules/NewArrivals';
import Categories from './modules/Categories';
import Busqueda from './modules/Busqueda';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/cart/" component={Cart} />
        <Route path="/account/" component={Account} />
        <Route path="/wishlist/" component={Wishlist} />
        <Route path="/new-arrivals/" component={NewArrivals} />
        <Route path="/categories/" component={Categories} />
        <Route path="/busqueda/" component={Busqueda} />
        <NavbarDown />
      </div>
    </Router>
  );
}

export default App;
