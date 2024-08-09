import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import kid_banner from "./assets/banner_kids.png";
import men_banner from "./assets/banner_mens.png";
import women_banner from "./assets/banner_women.png";
import AddDocument from "./components/AddDocument/AddDocument.jsx";
import CartWidget from "./components/CartWidget/CartWidget.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Product from "./components/Product/Product.jsx";
import ShopCategory from "./components/ShopCategory/ShopCategory.jsx";
import ShopContextProvider from "./context/ShopContext.jsx";
import LoginSignUp from "./pages/LoginSignUp.jsx";
import Shop from "./pages/Shop.jsx";
import Comenta from "./components/Comenta/Comenta.jsx"


function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kids" />} />
          <Route path="/category/:categoryId" element={<ShopCategory />} />
          <Route path="/detail/:productId" element={<Product/>} />
          <Route path="/CartWidget" element={<CartWidget />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/add-document" element={<AddDocument />} />
        </Routes>
        <Comenta />
        <Footer />
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
