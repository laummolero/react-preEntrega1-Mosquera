import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CartWidget from "./components/NavBar/CartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Error from "./components/Error/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import "./App.css";

function App() {
  return (
    <div className="container-app">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting={"Bienvenidos a K-Pop Box"} />
              }
            />
            <Route
              path="/category/:idCategory"
              element={
                <ItemListContainer greeting={"Productos por categoría"} />
              }
            />
            <Route
              path="/detail/:idProduct"
              element={<ItemDetailContainer />}
            />
            <Route path="*" element={<Error />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
