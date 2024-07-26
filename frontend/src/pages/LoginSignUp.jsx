import React from "react";
import './CSS/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Registrese</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Contraseña" />  
          <button>Continuar</button>
        </div>
        
        <p className="loginsignup-login">Posse una cuenta? <span>Ingrese aquí</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>Para continuar, acepte los términos de uso y las políticas de privacidad</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
