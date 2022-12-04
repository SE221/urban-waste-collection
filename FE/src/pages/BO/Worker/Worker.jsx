// import { React } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";
import "../../Tool/tool.css";

import React, { useState, useEffect } from "react";
import { COLUMNS } from "./utils/columns";
import { Table } from "../../../components/Table/Table.jsx";
import axios from "axios";

const Worker = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [workersPerPage, setWorkersPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/workers`)
      .then((res) => {
        setLoading(false);
        const objs = res.data;
        const data = objs.map((obj) => {
          return {
            id: obj.ID,
            name: obj.Name,
            role: obj.Role,
            dob: obj.DoB,
            phone_number: obj["Phone Number"],
            active: obj.isWorking ? "Yes" : "No",
          };
        });
        setWorkers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // get current workers
  const indexOfLastWorker = currentPage * workersPerPage;
  const indexOfFirstWorker = indexOfLastWorker - workersPerPage;
  const currentWorkers = workers.slice(indexOfFirstWorker, indexOfLastWorker);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="tool">
      <Sidebar />
      <div className="toolContainer">
        <Navbar pageTitle="Workers" />
        <div className="content">
          {!loading ? (
            <div>
              <Table
                columns={COLUMNS}
                data={currentWorkers}
                placeholder={"Search worker here..."}
                rowsPerPage={workersPerPage}
                totalRows={workers.length}
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

export default Worker;
