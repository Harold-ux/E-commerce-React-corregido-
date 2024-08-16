import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./ItemCount.css";

const ItemCount = ({ stock, selectedSize }) => {
  const [count, setCount] = useState(0);
  const { handleAddToCart } = useContext(ShopContext);

  useEffect(() => {
  }, [selectedSize]);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("Cantidad máxima permitida!!");
    }
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Stock agotado!!");
    }
  };

  const agregarAlCarrito = () => {
    if (count === 0) {
      alert("Por favor seleccione la cantidad de productos que desea agregar al carrito.");
      return;
    }
    if (!selectedSize) {
      alert("Por favor, seleccione una talla antes de agregar al carrito.");
      return;
    }
    
    
    handleAddToCart(count);
    setCount(0);
  };

  return (
    <>
      <div className="cantidad">
        <h4>Selecciona cantidad</h4>
        <span className="count">{count}</span>
      </div>
      <div className="caja">
        <button className="size-box" onClick={restar} disabled={count <= 0}>
          -
        </button>
        <button className="size-box" onClick={agregarAlCarrito}>
          Agregar al carrito
        </button>
        <button className="size-box" onClick={sumar} disabled={count >= stock}>
          +
        </button>
      </div>
    </>
  );
};

export default ItemCount;
