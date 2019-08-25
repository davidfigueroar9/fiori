import React from 'react';
import './styles.css';

const AccountHeader = props => (
  <div className="AccountHeader">
    <div className="AccountHeader-text">
      <div className="AccountHeader-text-name">
        {props.name}
      </div>
      <div className="AccountHeader-text-info">
        {props.info}
      </div>
    </div>
    <div className="AccountHeader-profile-image" style={{ backgroundImage: `url(${props.image})` }} />
  </div>
);
export default AccountHeader;
