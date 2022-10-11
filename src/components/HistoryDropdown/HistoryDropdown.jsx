import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const HistoryDropdown = ({ handleSearch }) => {
  return (
    <DropdownButton
      id="dropdown-basic-button"
      variant="Secondary"
      title="History">
      {JSON.parse(localStorage.getItem("history")).map((item) => {
        return (
          <Dropdown.Item onClick={() => handleSearch(item)}>
            {item.replace("_", " ")}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
};

export default HistoryDropdown;
