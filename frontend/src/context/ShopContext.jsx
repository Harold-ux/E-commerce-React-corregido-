import React, { createContext, useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../db/firebaseConfig";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [carritoTotal, setCarritoTotal] = useState(0);
  const [idProducto, setIdProducto] = useState(null); 
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [newCollections, setNewCollections] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsSnapshot = await getDocs(collection(db, "products"));
        const productsArray = productsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(productsArray);

        const newCollectionsQuery = query(collection(db, "products"), where("category", "==", "new_collections"));
        const newCollectionsSnapshot = await getDocs(newCollectionsQuery);
        const newCollectionsArray = newCollectionsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setNewCollections(newCollectionsArray);

        const popularProductsQuery = query(collection(db, "products"), where("category", "==", "popular"));
        const popularProductsSnapshot = await getDocs(popularProductsQuery);
        const popularProductsArray = popularProductsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setPopularProducts(popularProductsArray);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (cantidad) => {
    setCarritoTotal((prevTotal) => prevTotal + cantidad);
  };

  const contextValue = {
    products,
    newCollections,
    popularProducts,
    carritoTotal,
    handleAddToCart,
    setCarritoTotal,
    idProducto,
    setIdProducto,
    cartItems,
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