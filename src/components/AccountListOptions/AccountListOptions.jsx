import React from 'react';
import Icon from 'components/Icon';
import './styles.css';


const AccountListOptions = props => (
  <div className="AccountListOptions-container">
    <div className="AccountListOptions-text">{props.label}</div>
    <div className="AccountListOptions-text">
      <Icon name="next-1" />
    </div>
  </div>
);

export default AccountListOptions;
