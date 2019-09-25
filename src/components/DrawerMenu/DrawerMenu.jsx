import React from 'react';
import Icon from 'components/Icon';
import DrawerMenuItems from 'components/DrawerMenuItems';
import { Link } from 'react-router-dom';
import db from 'resources/db';
import './styles.css';


const DrawerMenu = ({ open, onClose }) => (
  <div
    onClick={ onClose }
    className={`DrawerMenu ${open ? 'DrawerMenuOpen' : ''}`}>
      <div onClick={e => e.stopPropagation() } className="DrawerMenuOptions">
        <div onClick={onClose} className= "DrawerCloseIcon">
          <Icon name="cancel" />
        </div>
        <div className="DrawerMenuHeader">
          <div className="DrawerMenuHeader-text">
            <div className="DrawerMenuHeader-text-name">{db.userdetails.username}</div>
            <span className="DrawerMenuHeader-text-info">{db.userdetails.email}</span>
          </div>
          <div className="DrawerMenuHeader-profile-image" style={{ backgroundImage: `url(${db.userdetails.image})` }} />
        </div>
        <div clasName="DrawerMenuItems">
          <Link to="/account/">
            <DrawerMenuItems label="Account" />
          </Link>
          <Link to="/Cart/">
            <DrawerMenuItems label="Cart" />
          </Link>
          <Link to="/wishlist/">
            <DrawerMenuItems label="Wishlist" />
          </Link>
          <Link to="/new-arrivals/">
            <DrawerMenuItems label="Show Now New Arrivals" />
          </Link>
          <Link to="/categories/">
            <DrawerMenuItems label="Categories" />
          </Link>
        </div>
      </div>
  </div>
);

export default DrawerMenu;
