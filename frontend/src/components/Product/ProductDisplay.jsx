import React, { useState, useEffect, useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import star_dull_icon from "../../assets/star_dull_icon.png";
import star_icon from "../../assets/star_icon.png";
import SelectSizes from "../../components/SelectSizes/SelectSizes";
import ItemCount from "../ItemCount/ItemCount";
import "./Product.css";

const ProductDisplay = ({ product, handleAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [stock, setStock] = useState(0);

  const { products } = useContext(ShopContext);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === product.id);
    if (foundProduct) {
      setStock(foundProduct.stock);
      console.log(
        `Valor del stock para el producto con ID ${product.id}: ${foundProduct.stock}`
      );
    }
  }, [product.id, products]);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCartWithDetails = (count) => {
    handleAddToCart({ id: product.id, count, product });
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
            <h4>Seleccione talla</h4>
            <SelectSizes onSizeChange={handleSizeChange} />
          </div>
          <ItemCount
            stock={stock}
            toCart={handleAddToCartWithDetails}
            selectedSize={selectedSize}
            product={product}
          />
          <div className="etiquetas">
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
