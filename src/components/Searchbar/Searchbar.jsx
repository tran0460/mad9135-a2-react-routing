import React from "react";
import styles from "./Searchbar.module.css";
import MagnifyingGlass from "../../assets/Icons/MagnifyingGlass";

const Searchbar = (props) => {
  const { onSearch, query, setQuery } = props;
  return (
    <div className={styles["input-container"]}>
      <input
        className={styles["input-field"]}
        type="text"
        placeholder="Search bar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") return onSearch();
        }}
      />
      <span className={styles["icon-container"]} onClick={() => onSearch()}>
        <MagnifyingGlass color={"#000"} size={24} />
      </span>
    </div>
  );
};

export default Searchbar;
