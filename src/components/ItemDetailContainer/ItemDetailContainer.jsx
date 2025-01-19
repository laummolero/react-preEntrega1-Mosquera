import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader.jsx";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { idProduct } = useParams();
  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      const docRef = doc(db, "products", idProduct);
      const dataDb = await getDoc(docRef);

      if (!dataDb.exists()) {
        setError(true);
        setLoading(false);
        return;
      }

      const data = { id: dataDb.id, ...dataDb.data() };
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getProduct();
  }, [idProduct]);

  if (loading) return <Loader />;

  if (error) {
    return (
      <div className="error-container">
        <h2>Ooppps sorry, product doesn't exist.</h2>
        <button onClick={() => navigate("/")}>Go back to Home</button>
      </div>
    );
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
