import React from 'react';
import './styles.css';

const Hero = props => (
  <div className="Hero" style={{ backgroundImage: `url(${props.image})` }}>
    <div className="Hero-bg">
      <div className="Hero-content">
        <h3 className="Hero-title">{props.title}</h3>
        <div className="Hero-description">{props.description}</div>
        <div className="Hero-button">SHOP NOW </div>
      </div>
    </div>
  </div>
);

export default Hero;
