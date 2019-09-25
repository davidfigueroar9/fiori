import React, { Component } from 'react';
import Navbar from 'components/Navbar';
import db from 'resources/db';
import './styles.css';

class Categories extends Component {

  state = {
    ShowCategory: false
  }

  render() {
    return (
      <div className="viewAll">
        <Navbar title="Categories" />
        <div className="Categories-container">
          {
          db.categories.map(c => (
          <div className="Categories-item">
            <div className="Categories-image" style={{ backgroundImage: `url(${c.image})` }} />
            <div className="Categories-name">{c.name}</div>
          </div>
          ))
         }
        </div>
      </div>
    );
  }
}

export default Categories;
