import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import { ShopContext } from "../Context/ShopContext";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

const Product = () => {
  const { products, handleAddToCart } = useContext(ShopContext);
  const { productId } = useParams();
  
  // Convertir productId a número
  const numericProductId = Number(productId);
  
  const product = products.find(
    (product) => product.id === numericProductId 
  );

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default Product;
