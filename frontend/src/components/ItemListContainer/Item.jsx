import React, { useState } from "react";
import "./ItemListContainer";
import { useNavigate } from "react-router-dom";

const Item = ({ id, image, name, new_price, old_price }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageClick = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate(`/detail/${id}`);
    }, 1000);
  };

  return (
    <div className="item">
      {isLoading && <div className="loading-overlay">Cargando...</div>}
      <a href={`/detail/${id}`} onClick={handleImageClick}>
        <img src={image} alt={name} />
      </a>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">${new_price}</div>
        <div className="item-price-old">${old_price}</div>
      </div>
    </div>
  );
};

export default Item;
