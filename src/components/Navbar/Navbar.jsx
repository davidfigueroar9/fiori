import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import DrawerMenu from 'components/DrawerMenu';
import './styles.css';

class Navbar extends Component {
  state = {
    openMenu: false,
  }

  onOpenMenu = () => {
    this.setState({ openMenu: true });
  }

  onCloseMenu = () => {
    this.setState({ openMenu: false });
  }

  render() {
    const { title } = this.props;
    const { openMenu } = this.state;
    return (
      <div className="header">
        <div className="header-left">
          <div onClick={this.onOpenMenu}> { /* eslint-disable-line */ }
            <Icon name="menu" />
          </div>
          <h2 className="header-left-text">{ title }</h2>
        </div>
        <div className="header-right">
          <span className="header-right-icon">
            <Link to="/busqueda/">
              <Icon name="search" />
            </Link>
          </span>
          <span className="header-right-icon">
            <Link to="/">
              <Icon name="notification" />
            </Link>
          </span>
        </div>
        <DrawerMenu open={openMenu} onClose={this.onCloseMenu} />
      </div>
    );
  }
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
