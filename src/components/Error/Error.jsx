import React from "react";
import "./error.css";

const Error = ({ message = "Página no encontrada", code = "404" }) => {
  return (
    <div className="error-container">
      <h2 className="error-code">{code}</h2>
      <p className="error-message">{message}</p>
    </div>
  );
};

export default Error;
