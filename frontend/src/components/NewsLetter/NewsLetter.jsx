import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return ( 
    <div className="newsletter">
    <h1>Recibe Ofertas Exclusivas Vía Email</h1>
    <p>Suscríbete a nuestro boletín informativo y mantente actualizado</p>
    <div>
        <input type="email" placeholder="ingresa email" />
        <button>Suscribete</button>
    </div>
  </div>);
};

export default NewsLetter;
