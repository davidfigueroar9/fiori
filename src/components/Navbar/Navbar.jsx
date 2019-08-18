import React from 'react';
import './styles.css';

const Navbar = (props) => {
  return (
    <div className="header">
        <div className="header-left">
            <i className="material-icons">menu</i>
            <h2 className="header-left-text">FIORI</h2>
        </div>
        <div className="header-right">
            <i className="material-icons header-right-icon">notifications_none</i>
            <i className="material-icons">search</i>

        </div>
    </div>

  );
}

export default Navbar;