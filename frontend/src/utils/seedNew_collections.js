/* import { collection, getDocs, deleteDoc, doc, addDoc } from "firebase/firestore";
import db from "../../db/firebaseConfig.js";

let new_collections = [
  {
    id: 12,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: "/image/product_12.png",
    new_price: 50.0,
    old_price: 80.5,
    stock: 5,
    category: "new_collections",
  },
  {
    id: 35,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    image: "/image/product_35.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 3,
    category: "new_collections",
  },
  {
    id: 14,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: "/image/product_14.png",
    new_price: 60.0,
    old_price: 100.5,
    stock: 5,
    category: "new_collections",
  },
  {
    id: 8,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: "/image/product_8.png",
    new_price: 100.0,
    old_price: 150.0,
    stock: 4,
    category: "new_collections",
  },
  {
    id: 15,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: "/image/product_15.png",
    new_price: 50.0,
    old_price: 80.5,
    stock: 2,
    category: "new_collections",
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: "/image/product_2.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 5,
    category: "new_collections",
  },
  {
    id: 17,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: "/image/product_17.png",
    new_price: 60.0,
    old_price: 100.5,
    stock: 5,
    category: "new_collections",
  },
  {
    id: 28,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    image: "/image/product_28.png",
    new_price: 100.0,
    old_price: 150.0,
    stock: 5,
    category: "new_collections",
  },
];

const seedNew_Collections = async () => {
  try {
    // Eliminar documentos de la colección
    const querySnapshot = await getDocs(collection(db, "new_collections"));
    for (const docSnapshot of querySnapshot.docs) {
      await deleteDoc(doc(db, "new_collections", docSnapshot.id));
    }

    // Agregar productos nuevos 
    for (const product of new_collections) {
      const docRef = await addDoc(collection(db, "new_collections"), product);
      console.log("Producto añadido con ID: ", docRef.id);
    }
  } catch (e) {
    console.error("Error actualizando los productos: ", e);
  }
};

seedNew_Collections();

export default new_collections;
 */