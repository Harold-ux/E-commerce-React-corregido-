import {
  addDoc,
  collection,
  doc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useCart } from "../../context/CartContext";
import db from "../../db/firebaseConfig";
import "./Checkout.css";
import Formulario from "./Formulario";
import validateForm from "../../utils/validation";

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    Nombre: "",
    Dirección: "",
    Teléfono: "",
    Email: "",
  });

  const { cartItems, totalAmount, clearCart } = useCart();
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

  const generateOrder = async (orden) => {
    try {
      const ordenesRef = collection(db, "orders");
      const respuesta = await addDoc(ordenesRef, orden);
      console.log("Orden guardada con éxito:", respuesta.id);

      Swal.fire({
        icon: "success",
        title: "Orden completada",
        text: `Su orden ha sido completada con el id: ${respuesta.id}, consérvelo!!`,
        customClass: {
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          text: "custom-swal-content",
        },
      }).then(() => {
        updateStock();
        clearCart();
        navigate("/");
      });

      setDatosForm({
        Nombre: "",
        Dirección: "",
        Teléfono: "",
        Email: "",
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

  const updateStock = async () => {
    try {
      for (const item of cartItems) {
        const productoRef = doc(db, "products", item.id);
        await updateDoc(productoRef, {
          stock: item.stock - item.quantity,
        });
      }
      console.log("Stock actualizado correctamente");

      // Mostrar alerta si el stock se actualizó correctamente
      Swal.fire({
        icon: "success",
        title: "Stock actualizado",
        text: "El stock de los productos se ha descontado correctamente.",
        customClass: {
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          text: "custom-swal-content",
        },
      });
    } catch (error) {
      console.error("Error al actualizar el stock:", error);

      // Mostrar alerta de error si hubo problemas al actualizar el stock
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al actualizar el stock. Por favor, inténtelo nuevamente.",
        customClass: {
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          text: "custom-swal-content",
        },
      });
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    console.log(datosForm);
  
    // Validamos el formulario
    const response = await validateForm(datosForm);
  
    // Solo se genera la orden si la validación es exitosa
    if (response.status === "success") {
      const orden = {
        comprador: { ...datosForm },
        productos: [...cartItems],
        fecha: Timestamp.fromDate(new Date()),
        total: totalAmount,
      };
      
      generateOrder(orden);
    } else {
      console.log("Error en la validación del formulario:", response.message);
    }
  };
  

  return (
    <div className="checkout-container">
      <div className="text-side">
        <h2>Complete su Compra</h2>
        <img
          src="/gifs/arrow-3517_256.gif"
          alt="Indicador de carga"
          className="checkout-gif"
        />
        <p>Por favor, rellene el formulario para completar su compra.</p>
      </div>
      <div className="checkout">
        <Formulario
          datosForm={datosForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      </div>
    </div>
  );
};

export default Checkout;
