import { React } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

export const Home = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardContainer">
        <Navbar pageTitle="Dashboard" />
        <div className="content">Dashboard Container</div>
      </div>
    </div>
  );
};
