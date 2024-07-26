import React from "react";
import "./ItemListContainer.css";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          new_price={product.new_price}
          old_price={product.old_price}
        />
      ))}
    </div>
  );
};

export default ItemList;
