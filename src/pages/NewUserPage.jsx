import Swal from "sweetalert2";
import React, { useState } from "react";
import { saveUser } from "../services/VehicleService";
import "../syles/styles.css";

export const NewUserPage = () => {
  // Add a new cell

  const [valoresForm, setValoresForm] = useState({});
  const { name = "", lastname = "", dni = "" } = valoresForm;

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setValoresForm({ ...valoresForm, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name,
      lastname,
      dni,
    };
    try {
      Swal.fire({
        allowOutSideClick: false,
        text: "Cargando...",
      });
      Swal.showLoading();
      const { data } = await saveUser(user);
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
            <label for="user name">User name</label>
            <input
              required
              name="name"
              value={name}
              onChange={(event) => handleOnChange(event)}
              type="text"
              class="form-control"
              placeholder="Enter the user name"
            />
            <label for="cell lastname">User lastname</label>
            <input
              required
              name="lastname"
              value={lastname}
              onChange={(event) => handleOnChange(event)}
              type="text"
              class="form-control"
              placeholder="Enter the user lastname"
            />
            <label for="cell dni">User dni</label>
            <input
              required
              name="dni"
              value={dni}
              onChange={(event) => handleOnChange(event)}
              type="text"
              class="form-control"
              placeholder="Enter the user dni"
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
