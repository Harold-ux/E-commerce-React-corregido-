import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../Breadcrum/Breadcrum.jsx";
import ProductDisplay from "../Product/ProductDisplay.jsx";
import { ShopContext } from "../../context/ShopContext.jsx";

const Product = () => {
  const { products, handleAddToCart } = useContext(ShopContext);
  const { productId } = useParams();
  const product = products.find((product) => product.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default Product;
