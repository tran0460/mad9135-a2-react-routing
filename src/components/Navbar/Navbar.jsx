import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import HistoryDropdown from "../HistoryDropdown/HistoryDropdown";
import "./Navbar.css";

const Navbar = ({ handleSearch }) => {
  const url = useLocation();
  return (
    <div className="navbar-main">
      <h1 className="m-0">RWA</h1>
      <nav className="nav-container">
        <NavLink
          end
          className={
            url.pathname.includes("home") || url.pathname === "/"
              ? "selected"
              : ""
          }
          to="home">
          Home
        </NavLink>
        <NavLink
          className={url.pathname.includes("daily") ? "selected" : ""}
          to="daily">
          Daily
        </NavLink>
        <NavLink
          className={url.pathname.includes("hourly") ? "selected" : ""}
          to="hourly">
          Hourly
        </NavLink>
      </nav>
      {localStorage.getItem("history") && (
        <aside>
          <HistoryDropdown handleSearch={handleSearch} />
        </aside>
      )}
    </div>
  );
};

export default Navbar;
