import React from "react";
import { Link } from "react-router-dom";
import "./ItemListContainer.css";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map((product) => (
        <Link to={`/detail/${product.id}`} key={product.id} className="item-link">
          <Item
            id={product.id}
            image={product.image}
            name={product.name}
            new_price={product.new_price}
            old_price={product.old_price}
          />
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
