// import { React } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";
import "../../Tool/tool.css";

import React, { useState, useEffect } from "react";
import { COLUMNS } from "./ultis/columns";
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
      .get(
        "https://randomuser.me/api?results=200&nat=us&inc=id,name,location,email,dob,phone"
      )
      .then((res) => {
        setLoading(false);
        const objs = res.data.results;
        const data = objs.map((obj) => {
          return {
            id: obj.id.value,
            first_name: obj.name.first,
            last_name: obj.name.last,
            city: obj.location.city,
            age: obj.dob.age,
            role: obj.role,
            phone: obj.phone,
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
