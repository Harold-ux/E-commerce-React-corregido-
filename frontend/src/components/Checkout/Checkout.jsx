import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useCart } from "../../context/CartContext";
import db from "../../db/firebaseConfig";
import Formulario from "./Formulario";

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    Nombre: "",
    Dirección: "",
    Teléfono: "",
    Email: "",
  });

  const { cartItems, totalAmount } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("Datos del formulario actualizados:", datosForm);
  }, [datosForm]);

  const handleChangeInput = (e) => {
    setDatosForm({
      ...datosForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(datosForm);

    const orden = {
      comprador: { ...datosForm },
      productos: [...cartItems],
      total: totalAmount,
    };

    const generateOrder = async (orden) => {
      try {
        const ordenesRef = collection(db, "orders");
        const respuesta = await addDoc(ordenesRef, orden);
        console.log("Orden guardada con éxito:", respuesta.id);

        Swal.fire({
          icon: "success",
          title: "Orden completada",
          text: `Su orden ha sido completada con el id: ${respuesta.id}`,
          customClass: {
            popup: "custom-swal-popup",
            title: "custom-swal-title",
            text: "custom-swal-content",
          },
        }).then(() => {
          navigate("/");
        });
      } catch (error) {
        console.error("Error al guardar la orden:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un error al completar su orden. Por favor, inténtelo nuevamente.",
        });
      }
    };

    generateOrder(orden);

    setTimeout(() => {
      setDatosForm({
        Nombre: "",
        Dirección: "",
        Teléfono: "",
        Email: "",
      });
    }, 1500);
  };

  return (
    <div>
      <Formulario
        datosForm={datosForm}
        handleChangeInput={handleChangeInput}
        handleSubmitForm={handleSubmitForm}
      />
    </div>
  );
};

export default Checkout;
