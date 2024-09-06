import React, { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";
import { slowScrollToTop } from "../utils/slowScroll";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingProduct) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevItems, item];
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás deshacer esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, vaciar",
      cancelButtonText: "Cancelar",
      customClass: {
        popup: "custom-swal-popup",
        title: "custom-swal-title",
        text: "custom-swal-content"
      }
    }).then((result) => {
      if (result.isConfirmed) {
        setCartItems([]);
        Swal.fire({
          icon: "success",
          title: "¡Vaciado!",
          text: "Tu carrito ha sido vaciado.",
          customClass: {
            popup: "custom-swal-popup",
            title: "custom-swal-title",
            text: "custom-swal-content"
          }
        }).then(() => {
          slowScrollToTop();
        });
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,  
    clearCartWithAlert,
    totalQuantity: cartItems.reduce((total, item) => total + item.quantity, 0),
    totalAmount: cartItems.reduce((total, item) => total + item.new_price * item.quantity, 0),
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
