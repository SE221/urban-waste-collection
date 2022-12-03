// import { React } from "react";
import React, { useState, useEffect } from "react";
import { COLUMNS } from "./utils/columns";
import { ScrollTable } from "../../../../components/Table/ScrollTable";
import "./activeWorker.css";
import axios from "axios";

const Worker = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [workersPerPage, setWorkersPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:1337/api/working")
      .then((res) => {
        setLoading(false);
        const objs = res.data;
        const data = objs.map((obj) => {
          return {
            id: obj.ID,
            name: obj.Name,
            role: obj.Role,
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
    <>
      {!loading ? (
        <div className="active-worker">
          <ScrollTable
            columns={COLUMNS}
            data={workers}
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
    </>
  );
};

export default Worker;
