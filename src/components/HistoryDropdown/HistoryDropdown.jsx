import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const HistoryDropdown = () => {
  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      {JSON.parse(localStorage.getItem("history")).map((item) => {
        return <Dropdown.Item>{item}</Dropdown.Item>;
      })}
    </DropdownButton>
  );
};

export default HistoryDropdown;
