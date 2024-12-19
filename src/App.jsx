import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CartWidget from "./components/NavBar/CartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Error from "./components/Error/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container-app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={"Bienvenidos a K-Pop Box"} />}
          />
          <Route
            path="/category/:idCategory"
            element={<ItemListContainer greeting={"Productos por categoría"} />}
          />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
