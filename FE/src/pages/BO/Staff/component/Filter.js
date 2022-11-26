import React from "react";
import "./Filter.css";
import SearchIcon from "@mui/icons-material/Search";

export const Filter = ({ filter, setFilter }) => {
  return (
    <label>
      <span>
        <SearchIcon />
      </span>

      <input
        value={filter || ""}
        placeholder={"Search worker here..."}
        onChange={(e) => setFilter(e.target.value)}
      />
    </label>
  );
};
