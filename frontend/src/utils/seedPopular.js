/* import { collection, getDocs, deleteDoc, doc, addDoc } from "firebase/firestore";
import db from "../../db/firebaseConfig.js";

const products = [
  {
    id: 1,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "null",
    image: "/image/product_1.png",
    new_price: 50.0,
    old_price: 80.5,
    stock: 4,
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "null",
    image: "/image/product_2.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 2,
  },
  {
    id: 3,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "null",
    image: "/image/product_3.png",
    new_price: 60.0,
    old_price: 100.5,
    stock: 3,
  },
  {
    id: 4,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "null",
    image: "/image/product_4.png",
    new_price: 100.0,
    old_price: 150.0,
    stock: 5,
  },
];

const seedPopular = async () => {
  try {
    // Eliminar documentos de la colección
    const querySnapshot = await getDocs(collection(db, "popular"));
    for (const docSnapshot of querySnapshot.docs) {
      await deleteDoc(doc(db, "popular", docSnapshot.id));
    }

    // Agregar productos nuevos 
    for (const product of products) {
      const docRef = await addDoc(collection(db, "popular"), product);
      console.log("Producto añadido con ID: ", docRef.id);
    }
  } catch (e) {
    console.error("Error actualizando los productos: ", e);
  }
};

seedPopular();
 */