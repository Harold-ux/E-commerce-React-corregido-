import React from "react";
import "./Checkout.css";


const Formulario = ({ datosForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <div className="form-checkout">
      <form onSubmit={handleSubmitForm}>
        <div className="box-input">
          <label htmlFor="Nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="Nombre"
            value={datosForm.Nombre}
            onChange={handleChangeInput}
            required
          />
        </div>

        <div className="box-input">
          <label htmlFor="Dirección">Dirección:</label>
          <input
            type="text"
            id="dirección"
            name="Dirección"
            value={datosForm.Dirección}
            onChange={handleChangeInput}
            required
          />
        </div>

        <div className="box-input">
          <label htmlFor="Teléfono">Teléfono:</label>
          <input
            type="tel"
            id="teléfono"
            name="Teléfono"
            value={datosForm.Teléfono}
            onChange={handleChangeInput}
            required
          />
        </div>

        <div className="box-input">
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            id="email"
            name="Email"
            value={datosForm.Email}
            onChange={handleChangeInput}
            required
          />
        </div>

        <div>
          <button type="submit" className="button-submit">
            Completar Compra
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
