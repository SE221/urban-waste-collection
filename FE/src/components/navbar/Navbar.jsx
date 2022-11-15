import React from "react";
import "./navbar.css";
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <div className="item">
            <a className="primary-button-noiden" href='/contact'>Contact</a>
            <Dropdown>
            <Dropdown.Toggle className="avatar">
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="./account">My Account</Dropdown.Item>
              <Dropdown.Item href="./login">Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
