import React, { useState, useEffect } from "react";
import { getAllCells } from "../services/VehicleService";
import Swal from "sweetalert2";

export const CellsPage = () => {
 

  // get all cells

  const [cells, setCells] = useState([]);

  const findAllCells = async () => {
    try {
      Swal.fire({
        allowOutSideClick: false,
        text: "Loading...",
      });
      Swal.showLoading();
      const { data } = await getAllCells();
      setCells(data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
      let mesaje;
      if (error && error.response && error.response.data) {
        mesaje = error.response.data;
      } else {
        mesaje = "Ha ocurrido un error al traer la información de las celdas";
      }
      Swal.fire("Error", mesaje, "Error");
    }
  };

  useEffect(() => {
    findAllCells();
  }, []);

  return (
    <div>
  
      <table className="table mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cell name</th>
            <th>Has a vehicle</th>
            <th>Has a user</th>
          </tr>
        </thead>
        <tbody>
          {cells.map((cell) => {
            return (
              <tr key={cell.id}>
                <td>{cell.id}</td>
                <td>{cell.cellName}</td>
                <td>{cell.hasVehicle === false ? "false" : "true"}</td>
                <td>{cell.occupied === false ? "false" : "true"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
