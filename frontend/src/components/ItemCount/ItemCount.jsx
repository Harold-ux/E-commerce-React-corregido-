import { collection, getDocs, doc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext.jsx";
import db from "../../db/firebaseConfig.js";
import "./ItemCount.css";

const ItemCount = ({ stock }) => {
  const { idCategory } = useParams();
  const [count, setCount] = useState(0);
  const [productLoaded, setProductLoaded] = useState(false);
  const { handleAddToCart, setIdCategory, getProductCart } = useContext(ShopContext);
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    const productsRef = collection(db, "newProducts");
    getDocs(productsRef)
      .then((productsDb) => {
        const data = productsDb.docs.map((product) => {
          return { id: product.id, ...product.data() };
        });

        console.log(data);
      })
      .finally();
  };

  useEffect(() => {
    if (!productLoaded) {
      getProducts();
      setProductLoaded(true);
    }
  }, [productLoaded, idCategory]);

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
        <button className="size-box" onClick={restar}>
          -
        </button>
        <button className="size-box" onClick={agregarAlCarrito}>
          Agregar al carrito
        </button>
        <button className="size-box" onClick={sumar}>
          +
        </button>
      </div>
    </>
  );
};

export default ItemCount;
