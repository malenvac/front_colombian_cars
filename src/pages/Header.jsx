import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Colombian Cars
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                aria-current="page"
                to="/newCell"
              >
                Add new cell
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                aria-current="page"
                to="/cells"
              >
                Cells
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                aria-current="page"
                to="/newUser"
              >
                Add new user
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                aria-current="page"
                to="/users"
              >
                Users
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                aria-current="page"
                to="/"
              >
                Add new entry
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                aria-current="page"
                to="/vehicleDeparture"
              >
                Add new departure
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                aria-current="page"
                to="/tickets"
              >
                Tickets
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                aria-current="page"
                to="/payInvoice"
              >
                Pay invoice
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                aria-current="page"
                to="/invoices"
              >
                Invoices
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
