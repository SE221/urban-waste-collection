import React from "react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import CookieRoundedIcon from "@mui/icons-material/CookieRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTruckMoving,
  faUserGroup,
  faTrashCan,
  faCircleArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../../assets/images/UWC.png";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="avatar1">
            <img src={logo} className="uwc-logo" />
          </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <FontAwesomeIcon icon={faHouse} />
              <span>Home</span>
            </li>
          </Link>
          <Link to="/staff" style={{ textDecoration: "none" }}>
            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>Workers</span>
            </li>
          </Link>
          <Link to="/staff" style={{ textDecoration: "none" }}>
            <li>
              <FontAwesomeIcon icon={faTruckMoving} />
              <span>Vehicles</span>
            </li>
          </Link>
          <Link to="/rp" style={{ textDecoration: "none" }}>
            <li>
              <FontAwesomeIcon icon={faTrashCan} />
              <span>MCP</span>
            </li>
          </Link>
          <Link to="/taskA" style={{ textDecoration: "none" }}>
            <li>
              <FontAwesomeIcon icon={faCircleArrowDown} />
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
