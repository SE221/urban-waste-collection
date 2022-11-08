import React from "react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import { Link } from "react-router-dom";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">UWC</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/week1" style={{ textDecoration: "none" }}>
            <li>
              <GridViewRoundedIcon className="icon" />
              <span>Week 1</span>
            </li>
          </Link>
          <Link to="/week2" style={{ textDecoration: "none" }}>
            <li>
              <GridViewRoundedIcon className="icon" />
              <span>Week 2</span>
            </li>
          </Link>
          <Link to="/week3" style={{ textDecoration: "none" }}>
            <li>
              <GridViewRoundedIcon className="icon" />
              <span>Week 3</span>
            </li>
          </Link>
          <Link to="/week4" style={{ textDecoration: "none" }}>
            <li>
              <GridViewRoundedIcon className="icon" />
              <span>Week 4</span>
            </li>
          </Link>
          <p className="title">SERVICE</p>
          <Link to="/checkin" style={{ textDecoration: "none" }}>
            <li>
              <PeopleAltRoundedIcon className="icon" />
              <span>Check In</span>
            </li>
          </Link>
          <Link to="/reportmcp" style={{ textDecoration: "none" }}>
            <li>
              <PeopleAltRoundedIcon className="icon" />
              <span>Report MCP Status</span>
            </li>
          </Link>
        </ul>
      </div>
      {/* <div className="bottom">color option</div> */}
    </div>
  );
};

export default Sidebar;
