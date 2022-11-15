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
              <span>Workers</span>
            </li>
          </Link>
          <Link to="/message" style={{ textDecoration: "none" }}>
            <li>
              <CookieRoundedIcon className="icon" />
              <span>Message</span>
            </li>
          </Link>
          <Link to="/rp" style={{ textDecoration: "none" }}>
            <li>
              <CookieRoundedIcon className="icon" />
              <span>Route Planning</span>
            </li>
          </Link>
          <Link to="/taskA" style={{ textDecoration: "none" }}>
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
