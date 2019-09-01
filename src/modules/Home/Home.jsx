import React from 'react';
import Navbar from 'components/Navbar';
import Hero from 'components/Hero';
import db from 'resources/db';
import Carrousel from 'components/Carrousel';
import './styles.css';

const Home = () => (
  <div className="home">
    <Navbar title="FIORI" />
    <Hero
      title={db.home.hero.title}
      description={db.home.hero.description}
      image={db.home.hero.image}
    />
    <Carrousel
      categories={db.categories}
      title="Categories"
    />
  </div>
);

export default Home;
