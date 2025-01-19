import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteCart } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h2>Ooppsss...No Items in the cart</h2>
        <Link to="/">Go back to Home</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1 className="title-cart">Products in Cart</h1>
      {cart.map((productCart) => (
        <div className="item-cart" key={productCart.id}>
          <img
            className="img-item-cart"
            src={productCart.image}
            width={100}
            alt=""
          />
          <p className="text-item-cart">{productCart.name}</p>
          <p className="text-item-cart">Price each: ${productCart.price}</p>
          <p className="text-item-cart">Quantity: {productCart.quantity}</p>
          <p className="text-item-cart">
            Sub total: ${productCart.price * productCart.quantity}{" "}
          </p>
          <button
            className="delete-item-cart"
            onClick={() => deleteProductById(productCart.id)}
          ></button>
        </div>
      ))}

      <div className="info-cart">
        <p className="text-info-cart">Total price: ${totalPrice()}</p>
        <Link className="button-to-cart" to="/checkout">
          Continue to checkout
        </Link>
        <button className="button-delete-cart" onClick={deleteCart}>
          Empty Cart
        </button>
      </div>
    </div>
  );
};
export default Cart;
