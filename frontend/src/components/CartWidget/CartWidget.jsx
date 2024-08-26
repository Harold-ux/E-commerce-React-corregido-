import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useLoading from "../../hooks/useLoading";
import "./CartWidget.css";
import { useCart } from "../../context/CartContext.jsx";

const CartWidget = () => {
  const { cartItems = [], clearCart, totalQuantity, totalAmount } = useCart();
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
    <Link to="/cartwidget" className="cart-container">
      {totalQuantity > 0 ? (
        <div className="cart">
          <h2>Productos en el carrito:</h2>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-price">
                    Precio: ${item.new_price}
                  </span>
                  <span className="cart-item-description">
                    {item.description}
                  </span>
                  <span className="cart-item-quantity">
                    Cantidad: {item.quantity}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-footer">
            <button className="vaciar-carrito-btn" onClick={clearCart}>
              Vaciar carrito
            </button>
            <div className="cart-total">
              <span className="cart-count">Total: ${totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-empty">
          <img src="/gifs/carrito-de-compra-5.gif" alt="Carrito vacío" />
          <div className="cart-message">No hay productos en el carrito</div>
        </div>
      )}
    </Link>
  );
};

export default CartWidget;
