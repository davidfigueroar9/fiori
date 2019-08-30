import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import './styles.css';

const Categories = ({ categories }) => (
  <div className="Categories-container">
    { categories.map(c => (
      <div className="Categories-item">
        <div className="Categories-image" style={{ backgroundImage: `url(${c.image})` }}>
          <Icon name="heart" />
        </div>
        <div className="Categories-name">{c.name}</div>
        <div className="Categories-price">{c.price}</div>
      </div>
    )) }
  </div>
);

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};

export default Categories;
