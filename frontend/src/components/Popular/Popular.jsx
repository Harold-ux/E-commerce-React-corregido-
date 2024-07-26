import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import ItemList from "../ItemListContainer/ItemList";
import "./Popular.css";

const Popular = () => {
  const { popularProducts } = useContext(ShopContext);

  return (
    <div className="popular">
      <h1>POPULAR EN MUJERES</h1>
      <hr />
      <div className="popular-item">
        <ItemList products={popularProducts} />
      </div>
    </div>
  );
};

export default Popular;
