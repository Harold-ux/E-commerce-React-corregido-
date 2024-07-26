import React from "react";
import { BiSolidHandDown } from "react-icons/bi";
import hero_image from "../../assets/hero_image.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div >
          <p className="greeting">Bienvenidos a mi tienda</p>
        </div>
        <div>
          <p className="hero-inicio">
            revisa <BiSolidHandDown style={{ fontSize: "50px" }} />
          </p>
          <p>nuestras</p>
          <p>colecciones</p>
        </div>
        <div className="hero-latest-btn">
          <div>Última Colección</div>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
