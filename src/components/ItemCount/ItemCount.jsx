import { useState } from "react";
import "./itemCount.css";

const ItemCount = ({ stock, addProductInCart }) => {
  const [count, setCount] = useState(1);
  const handleClickRemove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClickAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  return (
    <div className="item-count-container">
      <div className="counter-controls">
        <button onClick={handleClickRemove} className="counter-button">
          -
        </button>
        <p className="count-display">{count}</p>
        <button onClick={handleClickAdd} className="counter-button">
          +
        </button>
        <button
          onClick={() => addProductInCart(count)}
          className="add-to-cart-button"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default ItemCount;
