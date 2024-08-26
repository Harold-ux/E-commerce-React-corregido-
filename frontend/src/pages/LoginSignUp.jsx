import React, { useState } from "react";
import Swal from "sweetalert2"; // Importar SweetAlert2
import "./CSS/LoginSignUp.css";

const LoginSignUp = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const cambiarNombre = (e) => setNombre(e.target.value);
  const cambiarEmail = (e) => setEmail(e.target.value);
  const cambiarPassword = (e) => setPassword(e.target.value);
  const cambiarAceptaTerminos = (e) => setAceptaTerminos(e.target.checked);

  const enviarFormulario = (e) => {
    e.preventDefault();

    // Verificar si el usuario ha aceptado los términos y condiciones
    if (!aceptaTerminos) {
      Swal.fire({
        title: "Aviso",
        text: "Debes aceptar los términos de uso y las políticas de privacidad antes de continuar.",
        icon: "warning",
        confirmButtonText: "Entendido",
      });
      return;
    }

    const usuario = { nombre, email, password };

    //Alerta de confirmación
    Swal.fire({
      title: "Confirmación",
      text: `¿Estás seguro de que quieres registrarte con estos datos? \n\nNombre: ${nombre}\nEmail: ${email}`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, registrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(usuario);
        Swal.fire({
          title: "Registrado",
          text: "Te has registrado correctamente",
          icon: "success",
        });

        // Limpiar los campos
        setNombre("");
        setEmail("");
        setPassword("");
        setAceptaTerminos(false); // Reinicio de la casilla de términos y condiciones
      }
    });
  };

  return (
    <div className="loginsignup">
      <form onSubmit={enviarFormulario} className="loginsignup-container">
        <h1>Regístrese</h1>
        <div className="loginsignup-fields">
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={cambiarNombre}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={cambiarEmail}
          />
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
          <input
            type="checkbox"
            checked={aceptaTerminos}
            onChange={cambiarAceptaTerminos}
          />
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
