import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../Breadcrum/Breadcrum.jsx";
import ProductDisplay from "../Product/ProductDisplay.jsx";
import { ShopContext } from "../../context/ShopContext.jsx";
import "./Product.css";

const Product = () => {
  const { products, handleAddToCart } = useContext(ShopContext);
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);

  return (
    <div>
      <div className="breadcrumb-container">
        <Breadcrum product={product} />
      </div>
      <div className="productdisplay-container">
        <ProductDisplay product={product} handleAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};


export default Product;
