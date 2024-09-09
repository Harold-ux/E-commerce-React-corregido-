import { mixed, object, string } from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let userSchema = object({
  Nombre: string()
    .matches(/^[a-zA-Z\s]+$/, "El nombre solo puede contener letras y espacios")
    .required("El nombre es obligatorio"),
  Dirección: string().required("La dirección es obligatoria"),
  Teléfono: mixed().required("El teléfono es obligatorio"),
  Email: string()
    .email("El email debe tener un formato válido")
    .required("El email es obligatorio"),
});

const validateForm = async (datosForm) => {
  try {
    await userSchema.validate(datosForm);
    return { status: "success" };
  } catch (error) {
    toast.error(error.message);
    return { status: "error", message: error.message };
  }
};

export default validateForm;
