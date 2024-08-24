import { collection, getDocs, query, where } from "firebase/firestore";
import React, { createContext, useEffect, useState } from "react";
import db from "../db/firebaseConfig";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [newCollections, setNewCollections] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsSnapshot = await getDocs(collection(db, "products"));
        const productsArray = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsArray);

        const newCollectionsQuery = query(
          collection(db, "products"),
          where("category", "==", "new_collections")
        );
        const newCollectionsSnapshot = await getDocs(newCollectionsQuery);
        const newCollectionsArray = newCollectionsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNewCollections(newCollectionsArray);

        const popularProductsQuery = query(
          collection(db, "products"),
          where("category", "==", "popular")
        );
        const popularProductsSnapshot = await getDocs(popularProductsQuery);
        const popularProductsArray = popularProductsSnapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() })
        );
        setPopularProducts(popularProductsArray);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = ({ quantity, product }) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevItems, { ...product, quantity }];
    });
  };

  const carritoTotal = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleVaciarCarrito = () => {
    if (window.confirm("¿Estás seguro de que deseas vaciar el carrito?")) {
      setCartItems([]);
    }
  };
  
  const contextValue = {
    products,
    newCollections,
    popularProducts,
    carritoTotal,
    handleAddToCart,
    cartItems,
    handleVaciarCarrito,
    setCartItems,
    db,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
