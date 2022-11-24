import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/SidebarCol";
import Datatable from "../../components/datatable/Datatable";
import PageTitle from "../../components/pageTitle/PageTitle";
import imgmap from '../../assets/images/map.jpg'

import "./tool.css";

const Tool = () => {
  return (
    <div className="tool">
      <Sidebar />
      <div className="toolContainer">
        <Navbar />
        <div className="content">
          <PageTitle
            title="TITLE"
            description="Description here"
          />
           <div className="maptool">
          <img src={imgmap} alt="Logo"  style={{width:'180%'}}/>
          </div>
          <div className="tool1">
          <Datatable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
