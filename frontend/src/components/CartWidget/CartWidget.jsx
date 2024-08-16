import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./CartWidget.css";
import useLoading from "../../hooks/useLoading";

const CartWidget = () => {
  const { carritoTotal } = useContext(ShopContext);
  const { loadingScreen, showLoading, hideLoading } = useLoading();
  const [showCartContent, setShowCartContent] = useState(false);

  useEffect(() => {
    showLoading();

    const timer = setTimeout(() => {
      hideLoading();
      setShowCartContent(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, [showLoading, hideLoading]);

  if (!showCartContent) {
    return loadingScreen;
  }

  return (
    <div className="cart-container">
      {carritoTotal > 0 ? (
        <div className="cart">
          <div className="cart-message">
            Productos en el carrito:
            <div className="cart-sphere">
              <span className="cart-count">{carritoTotal}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart">
          <img src="/gifs/carrito-de-compra-5.gif" alt="Carrito vacío" />
          <div className="cart-message">No hay productos en el carrito</div>
        </div>
      )}
    </div>
  );
};

export default CartWidget;
