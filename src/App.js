import React from 'react';
import Navbar from './components/Navbar';
import NavbarDonw from './components/NavbarDown';
import Hero from './components/Hero';
//import Categories from './components/Categories';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <NavbarDonw/>
    </div>
  );
}

export default App;
