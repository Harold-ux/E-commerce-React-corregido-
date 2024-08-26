import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useCart } from "../../context/CartContext";
import "./ItemCount.css";
import { BiFontSize } from "react-icons/bi";

const ItemCount = ({ stock, selectedSize, product }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart();

  useEffect(() => {}, [selectedSize]);

  const handleClickIncrement = () => {
    console.log("Increment clicked, Quantity:", quantity, "Stock:", stock);
    if (typeof stock === 'number' && quantity < stock) {
      setQuantity(quantity + 1);
    } else {
      console.log("Alert should trigger - Quantity:", quantity, "Stock:", stock);
      Swal.fire({
        icon: "warning",
        title: "Límite alcanzado",
        text: "Cantidad máxima permitida!!",
        customClass: {
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          text: "custom-swal-content"
        }
      });
    }
  };
  

  const handleClickDecrement = () => {
    console.log("Decrement clicked");
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      Swal.fire({
        icon: "warning",
        title: "Stock agotado",
        text: "No puedes disminuir más!",
        customClass: {
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          text: "custom-swal-content"
        }
      });
    }
  };

  const addToCartHandler = () => {
    console.log("Add to cart clicked");
    if (quantity === 0) {
      Swal.fire({
        icon: "warning",
        title: "Cantidad requerida",
        text: "Por favor seleccione la cantidad de productos que desea agregar al carrito.",
        customClass: {
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          text: "custom-swal-content"
        }
      });
      return;
    }
    if (!selectedSize) {
      Swal.fire({
        icon: "warning",
        title: "Talla requerida",
        text: "Por favor, seleccione una talla antes de agregar al carrito.",
        customClass: {
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          text: "custom-swal-content"
        }
      });
      return;
    }

    addToCart({ ...product, quantity });
    setQuantity(0);
    Swal.fire({
      icon: "success",
      title: "Producto agregado",
      text: "El producto ha sido agregado al carrito.",
      customClass: {
        popup: "custom-swal-popup",
        title: "custom-swal-title",
        text: "custom-swal-content"
      }
    });
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
        <button className="size-box" onClick={addToCartHandler}>
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
