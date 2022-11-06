import React, { useState, useEffect } from "react";
import {getAllTickets} from "../services/VehicleService"
import { TicketCard } from "./TicketCard";
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
              mesaje= error.response.data;
          }else{
            mesaje = 'Hay un error, es necesario verificar los datos';
          }
          Swal.fire('Error', mesaje, 'Error');
        }
      };

      useEffect(() => {
        findAllTickets();
      }, []);



  return (
    <div className="container">
    <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
      {tickets.map((ticket) => {
        return (
          <TicketCard key={ticket._id} ticket={ticket} />
        );
      })}
    </div>
  </div>
  )
}
