import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import db from "../db/firebaseConfig.js";

const products = [
  // New Collections
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: "/image/product_12.png",
    new_price: 50.0,
    old_price: 80.5,
    stock: 5,
    category: "new_collections",
    description:
      "Solve your wardrobe woes on busy days with cool co-ords, and wrap up to stay warm in our women's jackets and coats when extra layers are required.",
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    image: "/image/product_35.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 3,
    category: "new_collections",
    description:
      "This 2-Hit hoodie from Colosseum is just what that kind of passionate fan needs to satiate their appetite for sports.",
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: "/image/product_14.png",
    new_price: 60.0,
    old_price: 100.5,
    stock: 5,
    category: "new_collections",
    description:
      "Pair this fashionable and comfortable full sleeve bomber jacket with any Urbano Fashion jeans, trousers, shorts for the perfect light winters, casual, evening, gym wear or party wear look, and never go out of style!",
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: "/image/product_8.png",
    new_price: 100.0,
    old_price: 150.0,
    stock: 4,
    category: "new_collections",
    description:
      "Solve your wardrobe woes on busy days with cool co-ords, and wrap up to stay warm in our women's jackets and coats when extra layers are required.",
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: "/image/product_15.png",
    new_price: 50.0,
    old_price: 80.5,
    stock: 2,
    category: "new_collections",
    description:
      "Pair this fashionable and comfortable full sleeve bomber jacket with any Urbano Fashion jeans, trousers, shorts for the perfect light winters, casual, evening, gym wear or party wear look, and never go out of style!",
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: "/image/product_2.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 5,
    category: "new_collections",
    description:
      "Solve your wardrobe woes on busy days with cool co-ords, and wrap up to stay warm in our women's jackets and coats when extra layers are required.",
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: "/image/product_17.png",
    new_price: 60.0,
    old_price: 100.5,
    stock: 5,
    category: "new_collections",
    description:
      "Pair this fashionable and comfortable full sleeve bomber jacket with any Urbano Fashion jeans, trousers, shorts for the perfect light winters, casual, evening, gym wear or party wear look, and never go out of style!",
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    image: "/image/product_28.png",
    new_price: 100.0,
    old_price: 150.0,
    stock: 5,
    category: "new_collections",
    description:
      "This 2-Hit hoodie from Colosseum is just what that kind of passionate fan needs to satiate their appetite for sports.",
  },
  // Popular
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: "/image/product_1.png",
    new_price: 50.0,
    old_price: 80.5,
    stock: 4,
    category: "popular",
    description:
      "Solve your wardrobe woes on busy days with cool co-ords, and wrap up to stay warm in our women's jackets and coats when extra layers are required.",
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: "/image/product_2.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 2,
    category: "popular",
    description:
      "Solve your wardrobe woes on busy days with cool co-ords, and wrap up to stay warm in our women's jackets and coats when extra layers are required.",
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: "/image/product_3.png",
    new_price: 60.0,
    old_price: 100.5,
    stock: 3,
    category: "popular",
    description:
      "Solve your wardrobe woes on busy days with cool co-ords, and wrap up to stay warm in our women's jackets and coats when extra layers are required.",
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: "/image/product_4.png",
    new_price: 100.0,
    old_price: 150.0,
    stock: 5,
    category: "popular",
    description:
      "Solve your wardrobe woes on busy days with cool co-ords, and wrap up to stay warm in our women's jackets and coats when extra layers are required.",
  },
  // Products
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "/image/product_1.png",
    new_price: 50.0,
    old_price: 80.5,
    stock: 1,
    description:
      "Solve your wardrobe woes on busy days with cool co-ords, and wrap up to stay warm in our women's jackets and coats when extra layers are required.",
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "/image/product_2.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 2,
    description:
      "Solve your wardrobe woes on busy days with cool co-ords, and wrap up to stay warm in our women's jackets and coats when extra layers are required.",
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "/image/product_3.png",
    new_price: 60.0,
    old_price: 100.5,
    stock: 3,
    description:
      "Solve your wardrobe woes on busy days with cool co-ords, and wrap up to stay warm in our women's jackets and coats when extra layers are required.",
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "/image/product_4.png",
    new_price: 100.0,
    old_price: 150.0,
    stock: 4,
    description:
      "Solve your wardrobe woes on busy days with cool co-ords, and wrap up to stay warm in our women's jackets and coats when extra layers are required.",
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "/image/product_5.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 5,
    description:
      "Solve your wardrobe woes on busy days with cool co-ords, and wrap up to stay warm in our women's jackets and coats when extra layers are required.",
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "/image/product_6.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 6,
    description:
      "Solve your wardrobe woes on busy days with cool co-ords, and wrap up to stay warm in our women's jackets and coats when extra layers are required.",
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "/image/product_7.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 7,
    description:
      "Solve your wardrobe woes on busy days with cool co-ords, and wrap up to stay warm in our women's jackets and coats when extra layers are required.",
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "/image/product_8.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 8,
    description:
      "Solve your wardrobe woes on busy days with cool co-ords, and wrap up to stay warm in our women's jackets and coats when extra layers are required.",
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "/image/product_9.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 9,
    description:
      "Solve your wardrobe woes on busy days with cool co-ords, and wrap up to stay warm in our women's jackets and coats when extra layers are required.",
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "/image/product_10.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 4,
    description:
      "Solve your wardrobe woes on busy days with cool co-ords, and wrap up to stay warm in our women's jackets and coats when extra layers are required.",
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "/image/product_11.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 5,
    description:
      "Solve your wardrobe woes on busy days with cool co-ords, and wrap up to stay warm in our women's jackets and coats when extra layers are required.",
  },
  {
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "/image/product_12.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 6,
    description:
      "Solve your wardrobe woes on busy days with cool co-ords, and wrap up to stay warm in our women's jackets and coats when extra layers are required.",
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "/image/product_13.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 1,
    description:
      "Pair this fashionable and comfortable full sleeve bomber jacket with any Urbano Fashion jeans, trousers, shorts for the perfect light winters, casual, evening, gym wear or party wear look, and never go out of style!",
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "/image/product_14.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 2,
    description:
      "Pair this fashionable and comfortable full sleeve bomber jacket with any Urbano Fashion jeans, trousers, shorts for the perfect light winters, casual, evening, gym wear or party wear look, and never go out of style!",
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "/image/product_15.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 3,
    description:
      "Pair this fashionable and comfortable full sleeve bomber jacket with any Urbano Fashion jeans, trousers, shorts for the perfect light winters, casual, evening, gym wear or party wear look, and never go out of style!",
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "/image/product_16.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 4,
    description:
      "Pair this fashionable and comfortable full sleeve bomber jacket with any Urbano Fashion jeans, trousers, shorts for the perfect light winters, casual, evening, gym wear or party wear look, and never go out of style!",
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "/image/product_17.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 5,
    description:
      "Pair this fashionable and comfortable full sleeve bomber jacket with any Urbano Fashion jeans, trousers, shorts for the perfect light winters, casual, evening, gym wear or party wear look, and never go out of style!",
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "/image/product_18.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 6,
    description:
      "Pair this fashionable and comfortable full sleeve bomber jacket with any Urbano Fashion jeans, trousers, shorts for the perfect light winters, casual, evening, gym wear or party wear look, and never go out of style!",
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "/image/product_19.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 7,
    description:
      "Pair this fashionable and comfortable full sleeve bomber jacket with any Urbano Fashion jeans, trousers, shorts for the perfect light winters, casual, evening, gym wear or party wear look, and never go out of style!",
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "/image/product_20.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 8,
    description:
      "Pair this fashionable and comfortable full sleeve bomber jacket with any Urbano Fashion jeans, trousers, shorts for the perfect light winters, casual, evening, gym wear or party wear look, and never go out of style!",
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "/image/product_21.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 9,
    description:
      "Pair this fashionable and comfortable full sleeve bomber jacket with any Urbano Fashion jeans, trousers, shorts for the perfect light winters, casual, evening, gym wear or party wear look, and never go out of style!",
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "/image/product_22.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 10,
    description:
      "Pair this fashionable and comfortable full sleeve bomber jacket with any Urbano Fashion jeans, trousers, shorts for the perfect light winters, casual, evening, gym wear or party wear look, and never go out of style!",
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "/image/product_23.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 4,
    description:
      "Pair this fashionable and comfortable full sleeve bomber jacket with any Urbano Fashion jeans, trousers, shorts for the perfect light winters, casual, evening, gym wear or party wear look, and never go out of style!",
  },
  {
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "/image/product_24.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 5,
    description:
      "Pair this fashionable and comfortable full sleeve bomber jacket with any Urbano Fashion jeans, trousers, shorts for the perfect light winters, casual, evening, gym wear or party wear look, and never go out of style!",
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kids",
    image: "/image/product_25.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 1,
    description:
      "This 2-Hit hoodie from Colosseum is just what that kind of passionate fan needs to satiate their appetite for sports.",
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kids",
    image: "/image/product_26.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 1,
    description:
      "This 2-Hit hoodie from Colosseum is just what that kind of passionate fan needs to satiate their appetite for sports.",
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kids",
    image: "/image/product_27.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 2,
    description:
      "This 2-Hit hoodie from Colosseum is just what that kind of passionate fan needs to satiate their appetite for sports.",
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kids",
    image: "/image/product_28.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 3,
    description:
      "This 2-Hit hoodie from Colosseum is just what that kind of passionate fan needs to satiate their appetite for sports.",
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kids",
    image: "/image/product_29.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 4,
    description:
      "This 2-Hit hoodie from Colosseum is just what that kind of passionate fan needs to satiate their appetite for sports.",
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kids",
    image: "/image/product_30.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 5,
    description:
      "This 2-Hit hoodie from Colosseum is just what that kind of passionate fan needs to satiate their appetite for sports.",
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kids",
    image: "/image/product_31.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 6,
    description:
      "This 2-Hit hoodie from Colosseum is just what that kind of passionate fan needs to satiate their appetite for sports.",
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kids",
    image: "/image/product_32.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 7,
    description:
      "This 2-Hit hoodie from Colosseum is just what that kind of passionate fan needs to satiate their appetite for sports.",
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kids",
    image: "/image/product_33.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 8,
    description:
      "This 2-Hit hoodie from Colosseum is just what that kind of passionate fan needs to satiate their appetite for sports.",
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kids",
    image: "/image/product_34.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 9,
    description:
      "This 2-Hit hoodie from Colosseum is just what that kind of passionate fan needs to satiate their appetite for sports.",
  },
  {
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kids",
    image: "/image/product_35.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 10,
    description:
      "This 2-Hit hoodie from Colosseum is just what that kind of passionate fan needs to satiate their appetite for sports.",
  },
  {
    name: "Girl's Casual Hoodies For Autumn/winter",
    category: "kids",
    image: "/image/product_37.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 10,
    description:
      "Girl's Casual Hoodies, Contrast Color Hooded Sweatshirt For Autumn/winter.",
  },
  {
    name: "Girl's Casual Hoodies For Autumn/winter",
    category: "kids",
    image: "/image/product_38.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 10,
    description:
      "Girl's Casual Hoodies, Contrast Color Hooded Sweatshirt For Autumn/winter.",
  },
  {
    name: "Girl's Casual Hoodies For Autumn/winter",
    category: "kids",
    image: "/image/product_38.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 10,
    description:
      "Girl's Casual Hoodies, Contrast Color Hooded Sweatshirt For Autumn/winter.",
  },
  {
    name: "Girl's Casual Hoodies For Autumn/winter",
    category: "kids",
    image: "/image/product_39.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 10,
    description:
      "Girl's Casual Hoodies, Contrast Color Hooded Sweatshirt For Autumn/winter.",
  },
  {
    name: "Girl's Casual Hoodies For Autumn/winter",
    category: "kids",
    image: "/image/product_40.png",
    new_price: 85.0,
    old_price: 120.5,
    stock: 10,
    description:
      "Girl's Casual Hoodies, Contrast Color Hooded Sweatshirt For Autumn/winter.",
  },
];

const seedProducts = async () => {
  try {
    // Eliminar documentos de la colección
    const querySnapshot = await getDocs(collection(db, "products"));
    for (const docSnapshot of querySnapshot.docs) {
      await deleteDoc(doc(db, "products", docSnapshot.id));
    }

    // Agregar productos nuevos
    for (const product of products) {
      const docRef = await addDoc(collection(db, "products"), product);
      console.log("Producto añadido con ID: ", docRef.id);
    }
  } catch (e) {
    console.error("Error actualizando los productos: ", e);
  }
};

seedProducts();
