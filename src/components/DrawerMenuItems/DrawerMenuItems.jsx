import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const DrawerMenuItems = ({ label }) => (
  <div className="DrawerMenuItemsContainer">
    <ul className="DrawerMenuItems">
      {label}
    </ul>
  </div>
);

DrawerMenuItems.propTypes = {
  label: PropTypes.string.isRequired,
};

export default DrawerMenuItems;
