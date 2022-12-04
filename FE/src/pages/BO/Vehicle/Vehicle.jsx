// import { React } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";
import "../../Tool/tool.css";

import React, { useState, useEffect } from "react";
import { COLUMNS } from "./utils/columns";
import { Table } from "../../../components/Table/Table.jsx";
import axios from "axios";

const Vehicle = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [vehiclesPerPage, setVehiclesPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:1337/api/vehicles")
      .then((res) => {
        setLoading(false);
        const objs = res.data;
        const data = objs.map((obj) => {
          return {
            id: obj.Vehicle_ID,
            license: obj["License Plate"],
            brand: obj.Brand,
            capacity: obj["Capacity (m3)"],
            fuel: obj["Fuel Tank"],
            weight: obj["Total Weight"],
          };
        });
        setVehicles(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // get current vehicles
  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  const currentVehicles = vehicles.slice(
    indexOfFirstVehicle,
    indexOfLastVehicle
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="tool">
      <Sidebar />
      <div className="toolContainer">
        <Navbar pageTitle="Vehicles" />
        <div className="content">
          {!loading ? (
            <div>
              <Table
                columns={COLUMNS}
                data={currentVehicles}
                placeholder={"Search vehicle here..."}
                rowsPerPage={vehiclesPerPage}
                totalRows={vehicles.length}
                paginate={paginate}
                currentPage={currentPage}
                canSearch={true}
              />
            </div>
          ) : (
            <h4>Loading...</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
