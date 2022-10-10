import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>RWA</h1>
      <nav>
        <Link to="home">Home</Link>
        <Link to="daily">Daily</Link>
        <Link to="hourly">Hourly</Link>
      </nav>
    </div>
  );
};

export default Navbar;
