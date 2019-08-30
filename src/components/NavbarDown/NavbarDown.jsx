import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/Icon';
import './styles.css';

const NavbarDown = () => (
  <div className="navbar-down">
    <ul className="col-father">
      <li className="col-child">
        <Link to="/">
          <Icon name="house" />
        </Link>
      </li>
      <li className="col-child">
        <Link to="/cart">
          <Icon name="shopping-cart" />

        </Link>
      </li>
      <li className="col-child">
        <Link to="/wishlist">
          <Icon name="heart" />
        </Link>
      </li>
      <li className="col-child">
        <Link to="/account">
          <Icon name="avatar" />
        </Link>
      </li>
    </ul>
  </div>
);

export default NavbarDown;
