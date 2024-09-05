import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import kid_banner from "../../assets/banner_kids.png";
import men_banner from "../../assets/banner_mens.png";
import women_banner from "../../assets/banner_women.png";
import dropdown_icon from "../../assets/dropdown_icon.png";
import db from "../../db/firebaseConfig.js";
import useLoading from "../../hooks/useLoading.jsx";
import ItemList from "../ItemListContainer/ItemList";
import "./ShopCategory.css";

const ShopCategory = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const { loading, loadingScreen, showLoading, hideLoading } = useLoading();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    showLoading();

    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, "products");
        const q = query(productsRef, where("category", "==", categoryId));
        const querySnapshot = await getDocs(q);
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        hideLoading();
      }
    };

    if (categoryId) {
      fetchProducts();
    }
  }, [categoryId]);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 8, products.length));
  };

  const handleShowLess = () => {
    setVisibleCount((prevCount) => Math.max(prevCount - 8, 8));
  };

  const getBanner = () => {
    switch (categoryId) {
      case "men":
        return men_banner;
      case "women":
        return women_banner;
      case "kids":
        return kid_banner;
      default:
        return null;
    }
  };

  return (
    <div className="shop-category">
      {loading ? (
        loadingScreen
      ) : (
        <>
          {getBanner() && (
            <img
              className="shopcategory-banner"
              src={getBanner()}
              alt={`Banner for ${categoryId}`}
            />
          )}
          <div className="shopcategory-indexSort">
            <p>
              <span>Mostrando 1-{Math.min(visibleCount, products.length)}</span>{" "}
              de {products.length} productos
            </p>
            <div className="shopcategory-sort">
              Ordenar por <img src={dropdown_icon} alt="dropdown icon" />
            </div>
          </div>
          <div className="shopcategory-products">
            <ItemList products={products.slice(0, visibleCount)} />
          </div>
          <div className="loadmore-container">
            {visibleCount < products.length && (
              <button
                onClick={handleShowMore}
                className="shopcategory-loadmore"
              >
                Ver más
              </button>
            )}
            {visibleCount > 8 && (
              <button
                onClick={handleShowLess}
                className="shopcategory-loadmore"
              >
                Ver menos
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ShopCategory;
