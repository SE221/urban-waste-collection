import React from "react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import CookieRoundedIcon from "@mui/icons-material/CookieRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import { Link } from "react-router-dom";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" className="avatar1" style={{ textDecoration: "none" }}>
          <span >
          </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <GridViewRoundedIcon className="icon" />
              <span>Home</span>
            </li>
          </Link>
          <p className="title">SERVICE</p>
          <Link to="/staff" style={{ textDecoration: "none" }}>
            <li>
              <PeopleAltRoundedIcon className="icon" />
              <span>Staff</span>
            </li>
          </Link>
          <Link to="/mcp" style={{ textDecoration: "none" }}>
            <li>
              <CookieRoundedIcon className="icon" />
              <span>MCP</span>
            </li>
          </Link>
          <Link to="/vehicle" style={{ textDecoration: "none" }}>
            <li>
              <CookieRoundedIcon className="icon" />
              <span>Vehicle</span>
            </li>
          </Link>
          <Link to="/taskassignment" style={{ textDecoration: "none" }}>
            <li>
              <CookieRoundedIcon className="icon" />
              <span>Task Assignment</span>
            </li>
          </Link>
        </ul>
      </div>
      {/* <div className="bottom">color option</div> */}
    </div>
  );
};

export default Sidebar;
