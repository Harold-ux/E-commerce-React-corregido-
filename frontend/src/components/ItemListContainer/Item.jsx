import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { slowScrollToTop } from "../../utils/slowScroll";
import "./ItemListContainer.css";

const Item = ({ id, image, name, new_price, old_price }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClickImage = (e) => {
    e.preventDefault();
    startLoadingSequence();
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    startLoadingSequence();
  };

  const startLoadingSequence = () => {
    setIsLoading(true);

    setTimeout(() => {
      slowScrollToTop();
    }, 1000);

    setTimeout(() => {
      setIsLoading(false);
      navigate(`/detail/${id}`);
    }, 2000);
  };

  return (
    <div className="item">
      {isLoading && <div className="loading-overlay">Cargando...</div>}
      <div className="item-image" onClick={handleClickImage}>
        <img src={image} alt={name} />
      </div>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">${new_price}</div>
        <div className="item-price-old">${old_price}</div>
      </div>
      <div className="item-link-button">
        <Link to={`/detail/${id}`}>
          <button onClick={handleButtonClick}>Ver Detalles</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
