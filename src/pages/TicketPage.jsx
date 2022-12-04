import React, { useState, useEffect } from "react";
import { getAllTickets } from "../services/VehicleService";
import Swal from "sweetalert2";

export const TicketPage = () => {
  const [tickets, setTickets] = useState([]);

  const findAllTickets = async () => {
    try {
      Swal.fire({
        allowOutSideClick: false,
        text: "Loading...",
      });
      Swal.showLoading();
      const { data } = await getAllTickets();
      setTickets(data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
      let mesaje;
      if (error && error.response && error.response.data) {
        mesaje = error.response.data;
      } else {
        mesaje = "Hay un error, es necesario verificar los datos";
      }
      Swal.fire("Error", mesaje, "Error");
    }
  };

  useEffect(() => {
    findAllTickets();
  }, []);

  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Assigned cell</th>
            <th>Entry hour</th>
            <th>Departure Hour</th>
            <th>Vehicle license plate</th>
            <th>User name</th>
            <th>User lastname</th>
            <th>User dni</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => {
            return (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.assignedCell}</td>
                <td>{ticket.entryHour}</td>
                <td>
                  {ticket.departureHour == null
                    ? "The vehicle is still parked"
                    : ticket.departureHour}
                </td>
                <td>{ticket.vehicle.licensePlate}</td>
                <td>{ticket.vehicle.user.name}</td>
                <td>{ticket.vehicle.user.lastname}</td>
                <td>{ticket.vehicle.user.dni}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
