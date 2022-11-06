import Swal from "sweetalert2";
import React, { useState } from "react";
import { registerVehicleEntry } from "../services/VehicleService";
import "../syles/styles.css";

export const EntryPage = () => {

  const [valoresForm, setValoresForm] = useState({});
  const {
    ownerName = "",
    ownerLastname = "",
    ownerDni = "",
    licensePlate = "",
    type = "",
  } = valoresForm;

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setValoresForm({ ...valoresForm, [name]: value });
  };


  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const ticket = {
      ownerName,
      ownerLastname,
      ownerDni,
      licensePlate,
      type,
    };
    try {
      Swal.fire({
        allowOutSideClick: false,
        text: "Cargando...",
      });
      Swal.showLoading();
      const { data } = await registerVehicleEntry(ticket);
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
            <h2>Register Vehicle</h2>
            <div className="register-container"></div>
          </section>
          <div className="input-container name">
            <label for="fname">Name</label>
            <input
              required
              type="text"
              name="ownerName"
              value={ownerName}
              onChange={(event) => handleOnChange(event)}
            />
          </div>
          <div className="input-container lastname">
            <label for="fname">Last name</label>
            <input
              required
              type="text"
              name="ownerLastname"
              value={ownerLastname}
              onChange={(event) => handleOnChange(event)}
            />
          </div>
          <div className="input-container dni">
            <label for="dni">DNI</label>
            <input
              required
              type="text"
              name="ownerDni"
              value={ownerDni}
              onChange={(event) => handleOnChange(event)}
            />
          </div>
          <div className="input-container licenseplate">
            <label for="licenseplate">License plate</label>
            <input
              required
              type="text"
              name="licensePlate"
              value={licensePlate}
              onChange={(event) => handleOnChange(event)}
            />
          </div>
          <div className="input-container type">
            <label for="type">Vehicle type</label>
            <input
              required
              type="text"
              name="type"
              value={type}
              onChange={(event) => handleOnChange(event)}
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
