import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./itemdetail.css";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const [showItemCount, setShowItemCount] = useState(true);
  const { addProduct } = useContext(CartContext);
  const addProductInCart = (count) => {
    //product to be added to cart
    const productCart = { ...product, quantity: count };
    addProduct(productCart);
    setShowItemCount(false);
  };

  return (
    <div className="item-detail">
      <div className="images-detail-container">
        <div className="secondary-images"></div>
        <div className="main-image">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="text-detail-container">
        <h2 className="title-detail">{product.name}</h2>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Precio: ${product.price}</p>
        {showItemCount === true ? (
          <ItemCount
            stock={product.stock}
            addProductInCart={addProductInCart}
          />
        ) : (
          <Link to="/cart">Go to checkout</Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
