const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <form onSubmit={handleSubmitForm}>
      <label>Full Name</label>
      <input
        type="text"
        value={dataForm.fullname}
        name="fullname"
        onChange={handleChangeInput}
      />
      <label>Phone</label>
      <input
        type="number"
        value={dataForm.phone}
        name="phone"
        onChange={handleChangeInput}
      />
      <label>Email</label>
      <input
        type="email"
        value={dataForm.email}
        name="email"
        onChange={handleChangeInput}
      />

      <button type="submit">Send order</button>
    </form>
  );
};

export default FormCheckout;
