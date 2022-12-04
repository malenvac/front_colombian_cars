import Swal from "sweetalert2";
import React, { useState } from "react";
import { saveCell } from "../services/VehicleService";
import "../syles/styles.css";

export const NewCellPage = () => {
  // Add a new cell

  const [valoresForm, setValoresForm] = useState({});
  const { cellName = "" } = valoresForm;

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setValoresForm({ ...valoresForm, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const cell = {
      cellName,
    };
    try {
      Swal.fire({
        allowOutSideClick: false,
        text: "Cargando...",
      });
      Swal.showLoading();
      const { data } = await saveCell(cell);
      console.log(data);
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
          <h1>All security in one place</h1>
          <p>We offer over 1000 parking lots for your vehicle</p>
        </section>
      </div>
      <div className="right">
        <form onSubmit={(event) => handleOnSubmit(event)}>
          <section className="copy">
            <h2>Add new Cell</h2>
            <div className="register-container"></div>
          </section>
          <div class="form-group">
            <label for="cell name">Cell name</label>
            <input
              required
              name="cellName"
              value={cellName}
              onChange={(event) => handleOnChange(event)}
              type="text"
              class="form-control"
              placeholder="Enter the cell name"
            />
          </div>
          <button className="signup-btn" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
