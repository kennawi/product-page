import React from "react";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <div style={{ display: "flex", gap: "20px" }} className="item-details">
        <p className="item-name">{item.name}</p>
        <p className="item-price">{item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
