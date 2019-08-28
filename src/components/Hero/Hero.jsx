import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Hero = ({ image, title, description }) => (
  <div className="Hero" style={{ backgroundImage: `url(${image})` }}>
    <div className="Hero-bg">
      <div className="Hero-content">
        <h3 className="Hero-title">{title}</h3>
        <div className="Hero-description">{description}</div>
        <div className="Hero-button">SHOP NOW </div>
      </div>
    </div>
  </div>
);

Hero.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Hero;
