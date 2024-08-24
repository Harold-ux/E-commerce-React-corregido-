import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./ItemCount.css";

const ItemCount = ({ stock, selectedSize, product }) => {
  const [quantity, setQuantity] = useState(0);
  const { handleAddToCart } = useContext(ShopContext);

  useEffect(() => {}, [selectedSize]);

  const handleClickIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    } else {
      alert("Cantidad máxima permitida!!");
    }
  };

  const handleClickDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      alert("Stock agotado!!");
    }
  };

  const addToCart = () => {
    if (quantity === 0) {
      alert(
        "Por favor seleccione la cantidad de productos que desea agregar al carrito."
      );
      return;
    }
    if (!selectedSize) {
      alert("Por favor, seleccione una talla antes de agregar al carrito.");
      return;
    }

    handleAddToCart({ quantity, product });
    const productCart = { ...product, quantity };
    setQuantity(0);
    console.log(productCart);
  };

  return (
    <>
      <div className="cantidad">
        <h4>Selecciona cantidad</h4>
        <span className="count">{quantity}</span>
      </div>
      <div className="caja">
        <button className="size-box" onClick={handleClickDecrement} disabled={quantity <= 0}>
          -
        </button>
        <button className="size-box" onClick={addToCart}>
          Agregar al carrito
        </button>
        <button
          className="size-box"
          onClick={handleClickIncrement}
          disabled={quantity >= stock}
        >
          +
        </button>
      </div>
    </>
  );
};

export default ItemCount;
