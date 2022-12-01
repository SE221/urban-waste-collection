import { React } from "react";
import Sidebar from "../../components/Sidebar/SidebarCol";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

export const HomeCol = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardContainer">
        <Navbar />
        <div className="content">Dashboard Container</div>
      </div>
      <a className="button" href="./">
        BO Home
      </a>
      <a className="button" href="./homecol">
        Collector Home
      </a>
      <a className="button" href="./homejan">
        Janitor Home
      </a>
    </div>
  );
};
