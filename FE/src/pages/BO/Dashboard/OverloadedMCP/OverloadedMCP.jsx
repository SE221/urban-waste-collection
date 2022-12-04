import React, { useState, useEffect } from "react";
import { COLUMNS } from "./utils/columns";
import { ScrollTable } from "../../../../components/Table/ScrollTable";
import axios from "axios";

const OverloadedMCP = () => {
  const [overloadedMCPs, setOverloadedMCPs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/overloaded-mcps`)
      .then((res) => {
        setLoading(false);
        const objs = res.data;
        const data = objs.map((obj) => {
          return {
            id: obj.MCP_ID,
            dist: obj.Dist,
            time: obj["Overloaded Time"],
          };
        });
        setOverloadedMCPs(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {!loading ? (
        <ScrollTable columns={COLUMNS} data={overloadedMCPs} />
      ) : (
        <h4>Loading...</h4>
      )}
    </div>
  );
};

export default OverloadedMCP;
