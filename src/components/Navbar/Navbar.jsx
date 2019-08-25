import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/Icon';
import './styles.css';

const Navbar = props => (
  <div className="header">
    <div className="header-left">
      <Link to="/">
        <Icon name="menu" />
      </Link>
      <h2 className="header-left-text">{ props.title }</h2>
    </div>
    <div className="header-right">
      <span className="header-right-icon">
        <Link to="/">
          <Icon name="search" />
        </Link>
      </span>
      <span className="header-right-icon">
        <Link to="/">
          <Icon name="notification" />
        </Link>
      </span>
    </div>
  </div>


);

export default Navbar;
