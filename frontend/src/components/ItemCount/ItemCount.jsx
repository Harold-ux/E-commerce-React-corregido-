import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./ItemCount.css";

const ItemCount = ({ stock, selectedSize, product }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart, cartItems } = useCart();
  const navigate = useNavigate();

  // Buscar la cantidad ya agregada al carrito para este producto
  const cartItem = cartItems.find((item) => item.id === product.id && item.selectedSize === selectedSize);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  // Calcular el stock restante basado en lo que ya está en el carrito
  const remainingStock = stock - quantityInCart;

  useEffect(() => {
    console.log("Selected size changed:", selectedSize);
  }, [selectedSize]);

  useEffect(() => {
    console.log("Valores recibidos del CartContext:", cartItems);
  }, [cartItems]);

  const handleClickIncrement = () => {
    console.log("Increment clicked, Quantity:", quantity, "Remaining Stock:", remainingStock);

    if (quantity < remainingStock) {
      const newQuantity = quantity + 1;

      // Permitir incrementar hasta el valor máximo del stock restante
      setQuantity(newQuantity);

      if (newQuantity === remainingStock) {
        Swal.fire({
          icon: "info",
          title: "Has alcanzado el stock máximo",
          text: "No puedes agregar más de lo disponible en stock.",
          customClass: {
            popup: "custom-swal-popup",
            title: "custom-swal-title",
            text: "custom-swal-content",
          },
        });
      }
    } else if (quantity >= remainingStock) {
      Swal.fire({
        icon: "warning",
        title: "Límite alcanzado",
        text: "No puedes agregar más del stock disponible.",
        customClass: {
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          text: "custom-swal-content",
        },
      });
    }
  };

  const handleClickDecrement = () => {
    console.log("Decrement clicked, Quantity:", quantity);
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      Swal.fire({
        icon: "warning",
        title: "No puedes disminuir más!",
        text: "Has alcanzado el mínimo permitido.",
        customClass: {
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          text: "custom-swal-content",
        },
      });
    }
  };

  const addToCartHandler = () => {
    console.log("Datos enviados a addToCart:", {
      ...product,
      quantity,
      selectedSize,
    });

    if (quantity === 0) {
      Swal.fire({
        icon: "warning",
        title: "Cantidad requerida",
        text: "Por favor seleccione la cantidad de productos que desea agregar al carrito.",
        customClass: {
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          text: "custom-swal-content",
        },
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
          text: "custom-swal-content",
        },
      });
      return;
    }

    addToCart({ ...product, quantity, selectedSize });
    setQuantity(0); // Reiniciar cantidad a 0
    Swal.fire({
      icon: "success",
      title: "Producto agregado",
      text: "El producto ha sido agregado al carrito.",
      customClass: {
        popup: "custom-swal-popup",
        title: "custom-swal-title",
        text: "custom-swal-content",
      },
    }).then(() => {
      Swal.fire({
        icon: "question",
        title: "¿Quieres ir al carrito?",
        text: "Puedes revisar o editar tu carrito... ó, seguir comprando.",
        showCancelButton: true,
        confirmButtonText: "Ir al carrito",
        cancelButtonText: "Seguir comprando",
        customClass: {
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          text: "custom-swal-content",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/cart");
        }
      });
    });
  };

  const isOutOfStock = quantity === remainingStock; // Deshabilitar botón cuando se alcanza el stock restante

  return (
    <>
      <div className="cantidad">
        <div className="caja">
          <h4>Seleccione cantidad</h4>
          <button
            className="size-box"
            onClick={handleClickDecrement}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="count">{quantity}</span>
          <button
            className="size-box"
            onClick={handleClickIncrement}
            disabled={quantity >= remainingStock}
          >
            +
          </button>
        </div>
        <button
          className={`size-box-add ${quantity >= remainingStock ? "disabled" : ""}`}
          onClick={addToCartHandler}
          disabled={quantity === 0 || quantity > remainingStock}
        >
          {quantity >= remainingStock ? "Stock alcanzado" : "Agregar al carrito"}
        </button>
      </div>
    </>
  );
};

export default ItemCount;
