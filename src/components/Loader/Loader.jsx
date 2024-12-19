import React from "react";
import { SyncLoader } from "react-spinners";
import "./loader.css";

const Loader = ({ color = "#d24863", height = "80vh" }) => {
  return (
    <div className="loader-container" style={{ height }}>
      <SyncLoader color={color} />
    </div>
  );
};

export default Loader;
