import React from "react";
import "./App.css";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg px-5 navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/Calculator">
                Check Calculator
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/TestUseMemo">
                Check TestUseMemo
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/TestUseRef">
                Check TestUseRef
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/TestUseCallback">
                Check TestUseCallback
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className="d-flex justify-content-center flex-column bg-dark"
        style={{ height: "100vh" }}
      >
        <Outlet />
      </div>
    </>
  );
}

export default App;
