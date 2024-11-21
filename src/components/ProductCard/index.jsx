import React from "react";
import "./index.css";

export function ProductCard(props) {
  const { image, category, title, price } = props.data;

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <span className="category">{category}</span>
      <h4>{title}</h4>
      <span className="price">${price}</span>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
}
