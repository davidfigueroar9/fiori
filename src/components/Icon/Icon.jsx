/* eslint-disable semi */
import React from 'react';
import PropTypes from 'prop-types';
import Heart from 'resources/icons/heart.svg';
import Account from 'resources/icons/avatar.svg';
import Cart from 'resources/icons/shopping-cart.svg';
import Home from 'resources/icons/house.svg';
import Menu from 'resources/icons/menu.svg';
import Search from 'resources/icons/search.svg';
import Notification from 'resources/icons/notification.svg';


const Icon = ({ name }) => {
  if (name === 'heart') {
    return (
      <img width="20" height="20" src={Heart} alt="Heart" />
    );
  }
  if (name === 'avatar') {
    return (
      <img width="20" height="20" src={Account} alt="Account" />
    );
  }
  if (name === 'shopping-cart') {
    return (
      <img width="20" height="20" src={Cart} alt="Cart" />
    );
  }
  if (name === 'house') {
    return (
      <img width="20" height="20" src={Home} alt="Home" />
    );
  }
  if (name === 'menu') {
    return (
      <img width="20" height="20" src={Menu} alt="Menu" />
    );
  }
  if (name === 'search') {
    return (
      <img width="20" height="20" src={Search} alt="Search" />
    );
  }
  if (name === 'notification') {
    return (
      <img width="20" height="20" src={Notification} alt="Notification" />
    );
  }

  return null;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
