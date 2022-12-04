import Swal from "sweetalert2";
import React, { useState } from "react";
import { payInvoice } from "../services/VehicleService";

export const PayInvoicePage = () => {
  const [valoresForm, setValoresForm] = useState({});
  const { userDni = "", reference = "" } = valoresForm;

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setValoresForm({ ...valoresForm, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const invoice = {
      userDni,
      reference,
    };

    try {
      Swal.fire({
        allowOutSideClick: false,
        text: "Loading...",
      });
      Swal.showLoading();
      await payInvoice(invoice);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  };

  return (
    <div className="split-screen">
      <div className="left">
        <section className="copy">
          <h1>Pay the invoices</h1>
          <p>and sleep peacefully</p>
        </section>
      </div>
      <div className="right">
        <form onSubmit={(event) => handleOnSubmit(event)}>
          <section className="copy">
            <h2>Pay invoice</h2>
            <div className="register-container"></div>
          </section>

          <div className="input-container licenseplate">
            <label for="licenseplate">User dni</label>
            <input
              required
              type="text"
              name="userDni"
              value={userDni}
              onChange={(event) => handleOnChange(event)}
              className="form-control"
            />

            <label for="licenseplate">Invoice reference</label>
            <input
              required
              type="text"
              name="reference"
              value={reference}
              onChange={(event) => handleOnChange(event)}
              className="form-control"
            />
          </div>

          <button className="signup-btn" type="submit">
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};
