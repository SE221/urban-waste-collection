import { React } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";
import "../Dashboard/dashboard.css";
import map from "../../../assets/images/map.jpg";

export const Dashboard = () => {
  const isDashboard = true;
  return (
    <div className="dashboard">
      <Sidebar isDashboard={isDashboard} />
      <div className="dashboard-container">
        <Navbar pageTitle="Dashboard" />
        <div className="content">
          <div className="map-content">
            <img src={map} alt="" className="map" />
          </div>
          <div className="table-content">
            <img src={map} alt="" className="map" />
          </div>
        </div>
      </div>
    </div>
  );
};
