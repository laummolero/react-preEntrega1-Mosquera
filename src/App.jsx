import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CartWidget from "./components/NavBar/CartWidget";
import ItemListContainer from "./components/NavBar/ItemListContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <NavBar />
      </div>
      <ItemListContainer greetings={"Welcome to my ecommerce"} />
    </>
  );
}

export default App;
