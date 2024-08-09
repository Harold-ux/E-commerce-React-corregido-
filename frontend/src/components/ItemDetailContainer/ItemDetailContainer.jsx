import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/firebaseConfig";
import { ShopContext } from "../../context/ShopContext";
import { Loading } from "../Loading/Loading.jsx";
import ItemDetail from "./ItemDetail.jsx";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { products, popularProducts, newCollections } = useContext(ShopContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let foundProduct = products.find((item) => item.id === productId) ||
                           popularProducts.find((item) => item.id === productId) ||
                           newCollections.find((item) => item.id === productId);
        if (!foundProduct) {
          const collections = ["products", "popular", "new_collections"];
          for (const collectionName of collections) {
            const docRef = doc(db, collectionName, productId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              foundProduct = { id: docSnap.id, ...docSnap.data() };
              break;
            }
          }
        }

        setProduct(foundProduct);
      } catch (error) {
        console.error("Error obteniendo el producto: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId, products, popularProducts, newCollections]);

  if (loading) {
    return (
      <div className="loading">
        <Loading />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="loading">
        Producto no encontrado!
      </div>
    );
  }

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
