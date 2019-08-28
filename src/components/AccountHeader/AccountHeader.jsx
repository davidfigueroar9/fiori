import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const AccountHeader = ({ name, info, image }) => (
  <div className="AccountHeader">
    <div className="AccountHeader-text">
      <div className="AccountHeader-text-name">
        {name}
      </div>
      <div className="AccountHeader-text-info">
        {info}
      </div>
    </div>
    <div className="AccountHeader-profile-image" style={{ backgroundImage: `url(${image})` }} />
  </div>
);

AccountHeader.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default AccountHeader;
