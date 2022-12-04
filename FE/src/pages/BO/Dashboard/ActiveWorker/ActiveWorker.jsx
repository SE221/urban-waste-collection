import React, { useState, useEffect } from "react";
import { COLUMNS } from "./utils/columns";
import { ScrollTable } from "../../../../components/Table/ScrollTable";
import axios from "axios";

const ActiveWorker = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/working`)
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

  return (
    <div>
      {!loading ? (
        <ScrollTable columns={COLUMNS} data={workers} />
      ) : (
        <h4>Loading...</h4>
      )}
    </div>
  );
};

export default ActiveWorker;
