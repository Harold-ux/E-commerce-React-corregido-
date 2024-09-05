import React from "react";

const Formulario = ({ datosForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <div>
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

        <div>
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

        <div>
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

        <div>
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
          <button type="submit">Completar Compra</button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
