// import { React } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";
import "../../Tool/tool.css";

import React, { useState, useEffect } from "react";
import { COLUMNS } from "./ultis/columns";
import { Table } from "../../../components/Table/Table.jsx";
import axios from "axios";

function Staff() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://randomuser.me/api?results=200&nat=us&inc=id,name,location,email,dob,phone"
      )
      .then((res) => {
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

  return (
    <div className="tool">
      <Sidebar />
      <div className="toolContainer">
        <Navbar pageTitle="Workers" />
        <div className="content">
          <div>
            <Table
              columns={COLUMNS}
              data={workers}
              placeholder={"Search worker here..."}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staff;
