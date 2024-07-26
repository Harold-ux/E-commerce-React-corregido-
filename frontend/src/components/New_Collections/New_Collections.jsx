import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import ItemList from "../ItemListContainer/ItemList";
import "./New_Collections.css";

const New_Collections = () => {
  const { newCollections } = useContext(ShopContext);

  return (
    <div className="new-collections">
      <h1>NUEVA COLECCIÓN</h1>
      <hr />
      <div className="collections-item">
        <ItemList products={newCollections} />
      </div>
    </div>
  );
};

export default New_Collections;
