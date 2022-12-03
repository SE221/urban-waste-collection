// import { React } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";
import "../../Tool/tool.css";

import React from "react";

const MCP = () => {
  return (
    <div className="tool">
      <Sidebar />
      <div className="toolContainer">
        <Navbar pageTitle="MCPs" />
      </div>
    </div>
  );
};

export default MCP;
