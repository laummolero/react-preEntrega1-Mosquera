import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader.jsx";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { idProduct } = useParams();

  const getProduct = async () => {
    try {
      const docRef = doc(db, "products", idProduct);
      const dataDb = await getDoc(docRef);
      const data = { id: dataDb.id, ...dataDb.data() };

      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    getProduct();
  }, [idProduct]);

  return loading ? <Loader /> : <ItemDetail product={product} />;
};

export default ItemDetailContainer;
