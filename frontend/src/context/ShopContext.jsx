import { collection, getDocs, query, where } from "firebase/firestore";
import React, { createContext, useEffect, useState } from "react";
import db from "../db/firebaseConfig";
import Swal from "sweetalert2";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
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
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al obtener los datos. Por favor, inténtalo de nuevo.",
        });
      }
    };

    fetchData();
  }, []);

  const contextValue = {
    products,
    newCollections,
    popularProducts,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
