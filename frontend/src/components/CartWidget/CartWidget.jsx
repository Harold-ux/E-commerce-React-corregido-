import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./CartWidget.css"; // Importa el archivo CSS

const CartWidget = () => {
  const { carritoTotal, productoEnCarrito } = useContext(ShopContext);

  return (
    <div className="cart-container">
      {carritoTotal > 0 ? (
        <div className="cart">
          <div className="empty-cart-message">Productos en el carrito: {carritoTotal}</div>
        </div>
      ) : (
        <div className="cart" >
          <img src="/gifs/carrito-de-compra-5.gif" alt="" />
          <div className="empty-cart-message">No hay productos en el carrito</div>
        </div>
      )}
    </div>
  );
};

export default CartWidget;
