import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/SidebarCol";
import ToolCard from "../../components/Card/Card";
import Datatable from "../../components/datatable/Datatable";
import PageTitle from "../../components/pageTitle/PageTitle";

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
          <ToolCard />
          <Datatable />
        </div>
      </div>
    </div>
  );
};

export default Tool;
