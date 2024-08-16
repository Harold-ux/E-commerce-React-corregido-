import React, { useState } from "react";
import "./CSS/LoginSignUp.css";

const LoginSignUp = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const cambiarNombre = (e) => setNombre(e.target.value);
  const cambiarEmail = (e) => setEmail(e.target.value);
  const cambiarPassword = (e) => setPassword(e.target.value);
  const enviarFormulario = (e) => {
    e.preventDefault();
    const usuario = { nombre, email, password };
    console.log(usuario);

    //limpiar los campos
    setNombre("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="loginsignup">
      <form onSubmit={enviarFormulario} className="loginsignup-container">
        <h1>Regístrese</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Nombre" value={nombre} onChange={cambiarNombre} />
          <input type="email" placeholder="Email" value={email} onChange={cambiarEmail} />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={cambiarPassword}
          />
          <button type="submit">Continuar</button>
        </div>

        <p className="loginsignup-login">
          ¿Posse una cuenta? <span>Ingrese aquí</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>
            Para continuar, acepte los términos de uso y las políticas de
            privacidad
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginSignUp;
