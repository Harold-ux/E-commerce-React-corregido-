import React, { useState } from "react";
import "./Product.css";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import SelectableSizes from "../../components/SelectSizes/SelectSizes";
import ItemCount from "../ItemCount/ItemCount";

const ProductDisplay = ({ product, handleAddToCart }) => {
  const [setSelectedSizes] = useState([]);
  const [stock] = useState(10); // Suponiendo que hay 10 en stock

  const handleSizeChange = (sizes) => {
    setSelectedSizes(sizes);
  };

  const handleAddToCartWithDetails = (count) => {
    handleAddToCart({ id: product.id, count });
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
      </div>
      <div className="productdisplay-main">
        <img className="productdisplay-main-img" src={product.image} alt="" />
        <div className="productdisplay-right">
          <h2>{product.name}</h2>
          <div className="productdisplay-right-start">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
              ${product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
              ${product.new_price}
            </div>
          </div>
          <div className="productdisplay-right-description">
            {product.description}
          </div>
          <div className="productdisplay-right-size">
            <h4>Selecciona talla</h4>
            <SelectableSizes onSizeChange={handleSizeChange} />
          </div>
          <ItemCount stock={stock} toCart={handleAddToCartWithDetails} />
          <div>
            <p className="productdisplay-right-category">
              <span>Category :</span> {product.category} , sport
            </p>
            <p className="productdisplay-right-category">
              <span>Tags :</span> modern , latest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;