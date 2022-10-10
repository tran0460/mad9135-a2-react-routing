import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Searchbar from "../../components/Searchbar/Searchbar";
import "./MainScreen.css";

const MainScreen = () => {
  let [query, setQuery] = useState("");
  return (
    <div>
      <Navbar />
      <div className="container main-container">
        <Searchbar query={query} setQuery={setQuery} />
        <Outlet />
      </div>
    </div>
  );
};

export default MainScreen;
