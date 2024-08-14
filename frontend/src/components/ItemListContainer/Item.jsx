import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./ItemListContainer.css";

const Item = ({ id, image, name, new_price, old_price }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageClick = (e) => {
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

  const slowScrollToTop = () => {
    const position = document.documentElement.scrollTop || document.body.scrollTop;
    if (position > 0) {
      window.requestAnimationFrame(slowScrollToTop);
      window.scrollTo(0, position - position / 32);
    }
  };

  return (
    <div className="item">
      {isLoading && <div className="loading-overlay">Cargando...</div>}
      <div className="item-image" onClick={handleImageClick}>
        <img src={image} alt={name} />
      </div>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">${new_price}</div>
        <div className="item-price-old">${old_price}</div>
      </div>
      <div className="item-link-button">
        <button onClick={handleButtonClick}>Ver Detalles</button>
      </div>
    </div>
  );
};

export default Item;
