import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar container">
      <h1>RWA</h1>
      <nav className="nav-container">
        <Link to="home">Home</Link>
        <Link to="daily">Daily</Link>
        <Link to="hourly">Hourly</Link>
      </nav>
    </div>
  );
};

export default Navbar;
