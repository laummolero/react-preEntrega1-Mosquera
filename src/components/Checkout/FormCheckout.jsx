import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./formCheckout.css";

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  const [confirmEmail, setConfirmEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const { cart, totalPrice } = useContext(CartContext);

  const isFormValid = () => {
    return (
      dataForm.fullname.length > 0 &&
      dataForm.phone.length > 0 &&
      dataForm.email.length > 0 &&
      dataForm.email === confirmEmail &&
      !emailError
    );
  };

  const handleConfirmEmail = (e) => {
    setConfirmEmail(e.target.value);
    setEmailError(dataForm.email !== e.target.value);
  };

  return (
    <div className="checkout-container">
      <div className="order-summary">
        <h2>Order summary</h2>
        {cart.map((item) => (
          <div key={item.id} className="checkout-item">
            <img src={item.image} alt={item.name} width="50" />
            <div className="item-details">
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price each: ${item.price}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
          </div>
        ))}
        <div className="total">
          <h3>Total: ${totalPrice()}</h3>
        </div>
      </div>

      <form onSubmit={handleSubmitForm} className="checkout-form">
        <h2>Contact details</h2>
        <div className="form-group">
          <label>Full name</label>
          <input
            type="text"
            value={dataForm.fullname}
            name="fullname"
            onChange={handleChangeInput}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone number</label>
          <input
            type="number"
            value={dataForm.phone}
            name="phone"
            onChange={handleChangeInput}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={dataForm.email}
            name="email"
            onChange={handleChangeInput}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirm Email</label>
          <input
            type="email"
            value={confirmEmail}
            onChange={handleConfirmEmail}
            required
          />
          {emailError && (
            <span className="error-message">Emails do not match</span>
          )}
        </div>

        <div className="button-purchase">
          <button
            type="submit"
            disabled={!isFormValid()}
            className={!isFormValid() ? "button-disabled" : ""}
          >
            Purchase
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormCheckout;
