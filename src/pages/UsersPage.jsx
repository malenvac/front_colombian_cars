import React, { useState, useEffect } from "react";
import { getAllUsers } from "../services/VehicleService";
import Swal from "sweetalert2";

export const UsersPage = () => {
  // get all users

  const [users, setUsers] = useState([]);

  const findAllUsers = async () => {
    try {
      Swal.fire({
        allowOutSideClick: false,
        text: "Loading...",
      });
      Swal.showLoading();
      const { data } = await getAllUsers();
      setUsers(data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
      let mesaje;
      if (error && error.response && error.response.data) {
        mesaje = error.response.data;
      } else {
        mesaje = "Ha ocurrido un error al traer la información de los usuarios";
      }
      Swal.fire("Error", mesaje, "Error");
    }
  };

  useEffect(() => {
    findAllUsers();
  }, []);

  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>User name</th>
            <th>User lastname</th>
            <th>User dni</th>
            <th>Assigned cell</th>
            <th>Has a subscription</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
                <td>{user.dni}</td>
                <td>{user.cell.cellName}</td>
                <td>{user.subscribed === false ? "false" : "true"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
