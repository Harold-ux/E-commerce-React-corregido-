import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useLoading from "../../hooks/useLoading.jsx";
import "./Cart.css";
import { useCart } from "../../context/CartContext.jsx";
import { slowScrollToTop } from "../../utils/slowScroll.js";

const Cart = () => {
  const {
    cartItems = [],
    clearCart,
    removeFromCart,
    totalQuantity,
    totalAmount,
  } = useCart();
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

  const handleClearCart = () => {
    clearCart();
    slowScrollToTop();
  };

  if (!showCartContent) {
    return loadingScreen;
  }

  return (
    <Link to="/cart" className="cart-container">
      {totalQuantity > 0 ? (
        <div className="cart">
          <h2>Productos en el carrito</h2>
          <div className="cart-items">
            {cartItems.map((item) => {
              console.log(`Producto en el carrito: ID ${item.id}`); // Aquí verificas los IDs en el carrito
              return (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <div className="cart-item-header">
                      <span className="cart-item-name">{item.name}</span>
                      <button
                        className="remove-item-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                    <span className="cart-item-price">
                      Precio:{" "}
                      <span className="cart-item-price-value">
                        ${item.new_price}
                      </span>
                    </span>
                    <span className="cart-item-description">
                      {item.description}
                    </span>
                    <span className="cart-item-quantity">
                      Cantidad: {item.quantity}
                    </span>
                    <span className="cart-item-size">
                      Talla: {item.selectedSize}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-footer">
            <button className="vaciar-carrito-btn" onClick={handleClearCart}>
              Vaciar carrito
            </button>
            <div className="cart-total">
              <span className="cart-count">
                Total: ${totalAmount.toFixed(2)}
              </span>
            </div>
          </div>
          <Link to="/checkout">Continuar con la compra</Link>
        </div>
      ) : (
        <div className="cart-empty">
          <img src="/gifs/carrito-de-compra-5.gif" alt="Carrito vacío" />
          <div className="cart-message">No hay productos en el carrito</div>
          <Link to="/" className="return-home-btn">
            Volver a la tienda
          </Link>{" "}
        </div>
      )}
    </Link>
  );
};

export default Cart;
