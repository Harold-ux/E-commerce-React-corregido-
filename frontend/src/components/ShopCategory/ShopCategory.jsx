import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dropdown_icon from "../../assets/dropdown_icon.png";
import ItemList from "../ItemListContainer/ItemList";
import db from "../../db/firebaseConfig.js";
import "./ShopCategory.css";

const ShopCategory = (props) => {
  const { categoryId } = useParams();
  const category = props.category || categoryId;
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    setVisibleCount(8);

    if (category) {
      const fetchProducts = async () => {
        try {
          const productsRef = collection(db, "products");
          const q = query(productsRef, where("category", "==", category));
          const querySnapshot = await getDocs(q);
          const productsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProducts(productsData);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
      fetchProducts();
    }
  }, [category]);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 8, products.length));
  };

  return (
    <div className="shop-category">
      {props.banner && (
        <img
          className="shopcategory-banner"
          src={props.banner}
          alt="Category banner"
        />
      )}
      <div className="shopcategory-indexSort">
        <p>
          <span>Mostrando 1-{Math.min(visibleCount, products.length)}</span> de {products.length} productos
        </p>
        <div className="shopcategory-sort">
          Ordenar por <img src={dropdown_icon} alt="dropdown icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        <ItemList products={products.slice(0, visibleCount)} />
      </div>
      {visibleCount < products.length && (
        <div className="loadmore-container">
          <button onClick={handleShowMore} className="shopcategory-loadmore">
            Ver más
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
