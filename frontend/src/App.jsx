import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddDocument from "./components/AddDocument/AddDocument.jsx";
import CartWidget from "./components/CartWidget/CartWidget.jsx";
import Comenta from "./components/Comenta/Comenta.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Product from "./components/Product/Product.jsx";
import ShopCategory from "./components/ShopCategory/ShopCategory.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import ShopContextProvider from "./context/ShopContext.jsx";
import LoginSignUp from "./pages/LoginSignUp.jsx";
import Shop from "./pages/Shop.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton.jsx";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ShopContextProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/category/:categoryId" element={<ShopCategory />} />
              <Route path="/detail/:productId" element={<Product />} />
              <Route path="/cartwidget" element={<CartWidget />} />
              <Route path="/login" element={<LoginSignUp />} />
              <Route path="/add-document" element={<AddDocument />} />
            </Routes>
            <Comenta />
            <ScrollToTopButton />
            <Footer />
          </CartProvider>
        </ShopContextProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
