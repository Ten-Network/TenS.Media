import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, title, quantity, price } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt={title} />
    <div className="item-details">
      <span className="name">{title}</span>
      <span className="price">
        {quantity} x Rs {price}
      </span>
    </div>
  </div>
);

export default React.memo(CartItem);
