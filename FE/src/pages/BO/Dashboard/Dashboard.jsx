import { React } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";
import "../Dashboard/dashboard.css";
import map from "../../../assets/images/map.jpg";
import ActiveWorker from "./ActiveWorker/ActiveWorker";
import OverloadedMCP from "./OverloadedMCP/OverloadedMCP";

export const Dashboard = () => {
  const isDashboard = true;
  return (
    <div className="dashboard">
      <Sidebar isDashboard={isDashboard} />
      <div className="dashboard-container">
        <Navbar pageTitle="Dashboard" />
        <div className="dashboard-content">
          <div className="map-content">
            <img src={map} alt="" className="map" />
          </div>
          <div className="table-content">
            <div className="table-info">
              <h4>Active workers</h4>
              <ActiveWorker />
            </div>
            <div className="table-info">
              <h4>Overloaded MCPs</h4>
              <OverloadedMCP />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
