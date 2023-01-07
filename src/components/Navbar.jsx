import React from "react";
import { NavLink } from "react-router-dom";


export const Navbar = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <div id="logo">
          <img src="./images/kruger.png" className="app-logo" alt="Imagotipo" />
        </div>
        <a className="navbar-brand" id="optionm" href="localhost">
          Kruger Start
        </a>
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
                to="/home"
                id="optionm"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/chat"
                id="optionm"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
               Chat 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                id="optionm"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                id="optionm"
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
