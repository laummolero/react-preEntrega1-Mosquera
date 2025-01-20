import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  let quantity = totalQuantity();

  return (
    <Link to="/cart" className="cartwidget">
      <img
        src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
        alt="Cart Icon"
      />
      <p className="number-cartqidget"> {quantity !== 0 && quantity} </p>
    </Link>
  );
};

export default CartWidget;
