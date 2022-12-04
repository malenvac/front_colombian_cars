import React, { useState, useEffect } from "react";
import { getAllInvoices } from "../services/VehicleService";
import Swal from "sweetalert2";

export const InvoicesPage = () => {
  // get all invoices

  const [invoices, setInvoices] = useState([]);

  const findAllInvoices = async () => {
    try {
      Swal.fire({
        allowOutSideClick: false,
        text: "Loading...",
      });
      Swal.showLoading();
      const { data } = await getAllInvoices();
      setInvoices(data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
      let mesaje;
      if (error && error.response && error.response.data) {
        mesaje = error.response.data;
      } else {
        mesaje = "Ha ocurrido un error al traer la información de las facturas";
      }
      Swal.fire("Error", mesaje, "Error");
    }
  };

  useEffect(() => {
    findAllInvoices();
  }, []);

  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Reference</th>
            <th>Amount</th>
            <th>State</th>
            <th>Start Date</th>
            <th>Cut-Off Date</th>
            <th>User dni</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => {
            return (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.reference}</td>
                <td>{invoice.amount}</td>
                <td>{invoice.state}</td>
                <td>{invoice.startDate}</td>
                <td>{invoice.cutOfDate}</td>
                <td>{invoice.user.dni}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
