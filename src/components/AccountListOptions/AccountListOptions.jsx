import React from 'react';
import Icon from 'components/Icon';
import PropTypes from 'prop-types';
import './styles.css';


const AccountListOptions = ({ label }) => (
  <div className="AccountListOptions-container">
    <div className="AccountListOptions-text">{label}</div>
    <div className="AccountListOptions-text">
      <Icon name="next-1" />
    </div>
  </div>
);

AccountListOptions.propTypes = {
  label: PropTypes.string.isRequired,
};

export default AccountListOptions;
