import React, { useState, useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
  const { carritoTotal } = useContext(ShopContext);
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>LOGO</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: 'none' }} to="/">Tienda</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link style={{ textDecoration: 'none' }} to="/category/men">Hombres</Link>
          {menu === "mens" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link style={{ textDecoration: 'none' }} to="/category/women">Mujeres</Link>
          {menu === "womens" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: 'none' }} to="/category/kids">Niños</Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Ingresa</button></Link>
        <Link to="/CartWidget"><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{carritoTotal}</div>
      </div>
    </div>
  );
};

export default Navbar;
