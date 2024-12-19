import { useState, useEffect } from "react";
import { getProducts } from "../../data/data.js";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader.jsx";
import "./itemlistcontainer.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { idCategory } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((data) => {
        if (idCategory) {
          const productsFilter = data.filter(
            (product) => product.category === idCategory
          );
          setProducts(productsFilter);
        } else {
          setProducts(data);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idCategory]);

  return (
    <div className="itemlistcontainer">
      <h1>{greeting}</h1>
      {loading ? <Loader /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
