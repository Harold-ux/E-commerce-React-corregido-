import React from "react";
import "./ItemDetailContainer.css";

const ItemDetail = ({ product }) => {
  if (!product) {
    return <div>Producto no encontrado!</div>;
  }

  return (
    <div className="item-detail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <div className="item-detail-prices">
        <div className="item-price-new">${product.new_price}</div>
        <div className="item-price-old">${product.old_price}</div>
      </div>
      <div className="productdisplay-right-description">{product.description}</div>
    </div>
  );
};

export default ItemDetail;
