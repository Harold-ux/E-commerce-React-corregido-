import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useCart } from "../../context/CartContext";
import "./ItemCount.css";

const ItemCount = ({ stock, selectedSize, product }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    console.log("Selected size changed:", selectedSize);
  }, [selectedSize]);

  useEffect(() => {
    console.log("Valores recibidos del CartContext:", cartItems); 
  }, [cartItems]);

  const handleClickIncrement = () => {
    console.log("Increment clicked, Quantity:", quantity, "Stock:", stock);
  
    if (typeof stock === 'number' && quantity < stock) {
      const newQuantity = quantity + 1;
  
      if (newQuantity === stock) {
        Swal.fire({
          icon: "info",
          title: "Stock alcanzado",
          text: "Has alcanzado el límite del stock disponible.",
          customClass: {
            popup: "custom-swal-popup",
            title: "custom-swal-title",
            text: "custom-swal-content"
          }
        });
      }
  
      setQuantity(newQuantity);
    } else {
      console.log("Increment button disabled - Max stock reached.");
      Swal.fire({
        icon: "warning",
        title: "Límite alcanzado",
        text: "Cantidad máxima permitida!",
        customClass: {
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          text: "custom-swal-content"
        }
      });
    }
  };
  

  const handleClickDecrement = () => {
    console.log("Decrement clicked, Quantity:", quantity);
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      console.log("Decrement button disabled - Min quantity reached.");
      Swal.fire({
        icon: "warning",
        title: "No puedes disminuir más!",
        text: "Has alcanzado el mínimo permitido.",
        customClass: {
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          text: "custom-swal-content"
        }
      });
    }
  };

  const addToCartHandler = () => {
    console.log("Datos enviados a addToCart:", { ...product, quantity, selectedSize });

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

    addToCart({ ...product, quantity, selectedSize });
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
        <button
          className="size-box"
          onClick={handleClickDecrement}
          disabled={quantity <= 1}
        >
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
