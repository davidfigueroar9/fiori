import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import { Link } from 'react-router-dom';

import './styles.css';

const Carrousel = ({ categories, title }) => (
  <div className="Carrousel">
    <div className="Carrousel-header">
      <div className="Carrousel-header-title">{title}</div>
      <div className="Carrousel-header-show">
        <div className="ViewAll">
          <Link to="/categories" style={{ color: 'black' }}>View All</Link>
        </div>
      </div>
    </div>
    <div className="Carrousel-categories">
      {categories.map(c => (
        <div className="Carrousel-item" style={{ backgroundImage: `url(${c.image})` }}>
          {c.name}
          <Icon name="next-1" />
        </div>
      ))}
    </div>
  </div>
);

Carrousel.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
};

export default Carrousel;
