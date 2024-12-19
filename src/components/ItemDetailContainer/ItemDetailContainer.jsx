import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getProducts } from "../../data/data.js";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader.jsx";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { idProduct } = useParams();

  useEffect(() => {
    getProducts()
      .then((data) => {
        const productFind = data.find(
          (dataProduct) => dataProduct.id === idProduct
        );
        setProduct(productFind);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idProduct]);

  return loading ? <Loader /> : <ItemDetail product={product} />;
};

export default ItemDetailContainer;
