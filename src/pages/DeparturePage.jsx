import Swal from "sweetalert2";
import React, { useState } from "react";
import { registerVehicleDeparture } from "../services/VehicleService";

export const DeparturePage = () => {
  const [valoresForm, setValoresForm] = useState({});
  const {
    licensePlate = "",
  } = valoresForm;

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setValoresForm({ ...valoresForm, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const vehicle = {
      licensePlate,
    };

    try {
      Swal.fire({
        allowOutSideClick: false,
        text: "Loading...",
      });
      Swal.showLoading();
      console.log(vehicle.licensePlate);
      await registerVehicleDeparture(vehicle.licensePlate);
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
            <h2>Register Vehicle Departure</h2>
            <div className="register-container"></div>
          </section>

          <div className="input-container licenseplate">
            <label for="licenseplate">License plate</label>
            <input
              required
              type="text"
              name="licensePlate"
              value={licensePlate}
              onChange={(event) => handleOnChange(event)}
              className="form-control"
            />
          </div>

          <button className="signup-btn" type="submit">
            Register departure
          </button>
        </form>
      </div>
    </div>
  );
};
