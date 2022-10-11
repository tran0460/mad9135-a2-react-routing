import React from "react";
import { Link, useLocation } from "react-router-dom";
import HistoryDropdown from "../HistoryDropdown/HistoryDropdown";
import "./Navbar.css";

const Navbar = () => {
  const url = useLocation();
  return (
    <div className="navbar">
      <h1 className="m-0">RWA</h1>
      <nav className="nav-container">
        <Link
          className={
            url.pathname.includes("home") || url.pathname === "/"
              ? "selected"
              : ""
          }
          to="home">
          Home
        </Link>
        <Link
          className={url.pathname.includes("daily") ? "selected" : ""}
          to="daily">
          Daily
        </Link>
        <Link
          className={url.pathname.includes("hourly") ? "selected" : ""}
          to="hourly">
          Hourly
        </Link>
      </nav>
      {localStorage.getItem("history") && (
        <aside>
          <HistoryDropdown />
        </aside>
      )}
    </div>
  );
};

export default Navbar;
