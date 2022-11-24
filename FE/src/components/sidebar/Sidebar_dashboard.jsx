import React from "react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import CookieRoundedIcon from "@mui/icons-material/CookieRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import { Link } from "react-router-dom";
import "./sidebar.css";
const data = [
  { status: 'Inactive', population: 55 },
  { status: 'Active', population: 118 },
  { status: 'Working', population: 82 },
  { status: 'Finish', population: 40 },
];
var data1 = data[0].population;
var data2 = data[1].population;
var data3 = data[2].population;
var data4 = data[3].population;
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
          <p className="title">STATISTICS</p> 
          <Link to="/active" style={{ textDecoration: "none" }}>
            <li>
              <PeopleAltRoundedIcon className="icon" />
         <span className="name">Active: {data1  } </span>    
            </li>
          </Link>
          <Link to="/active" style={{ textDecoration: "none" }}>
            <li>
              <PeopleAltRoundedIcon className="icon" />
              <span class="name">Working:    {data2}      </span>     
            </li>
          </Link>
          <Link to="/active" style={{ textDecoration: "none" }}>
            <li>
              <PeopleAltRoundedIcon className="icon" />
              <span class="name">Finished:      {data3}    </span>      
            </li>
          </Link>
          <Link to="/active" style={{ textDecoration: "none" }}>
            <li>
              <PeopleAltRoundedIcon className="icon" />
              <span class="name">Inactive:    {data4}      </span>    
              </li>
          </Link>
        </ul>
      </div>
      {/* <div className="bottom">color option</div> */}
    </div>
  );
};

export default Sidebar;
