import React from "react";
import { Outlet } from "react-router-dom";

const MainScreen = () => {
  return (
    <div>
      MainScreen
      <Outlet />
    </div>
  );
};

export default MainScreen;
