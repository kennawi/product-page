import React, { Component } from "react";
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCartOpen: false,
    };
  }

  handleToggleCart = () => {
    this.setState((prevState) => ({
      isCartOpen: !prevState.isCartOpen,
    }));
  };

  render() {
    const { isCartOpen } = this.state;
    const { cartItems } = this.props;

    return (
      <div>
        <CartIcon
          itemCount={cartItems.length}
          onClick={this.handleToggleCart}
        />

        {isCartOpen && <CartDropdown cartItems={cartItems} />}
      </div>
    );
  }
}

export default Cart;
