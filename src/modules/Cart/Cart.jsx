import React, { Component } from 'react';
import Navbar from 'components/Navbar';
import './styles.css';

class Cart extends Component {
  state = {
    open: false,
  }

  onOpen = () => {
    this.setState({ open: true });
  }
  onClose = () => {
    this.setState ({ open: false });
  }

  render() {
    const { open } = this.state;
    return (
      <div className="home">
        <Navbar title="Cart" />
        <button onClick={this.onOpen}>open</button>
        { open && (
          <h2 onClick={this.onClose}>thi is open</h2>
        ) }
      </div>
    );
  }
}

export default Cart;
