import React from "react";
import CartItem from "./CartItem";

const CartDropdown = ({ cartItems }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        position: "absolute",
        background: "white",
        minHeight: "100px",
        top: "30px",
        border: "solid 1px gray",
        borderRadius: "20px",
        padding: "2rem",
      }}
      className="cart-dropdown"
    >
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
