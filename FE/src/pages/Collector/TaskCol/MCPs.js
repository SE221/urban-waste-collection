// import { React } from "react";
import SidebarCol from "../../../components/Sidebar/SidebarCol";
import Navbar from "../../../components/Navbar/Navbar";
import "../../Tool/tool.css";
import PageTitle from "../../../components/PageTitle/PageTitle";

import Calendar from "./Components/calendar/Calendar";

function TaskCol() {
  return (
    <div className="tool">
      <SidebarCol />
      <div className="toolContainer">
        <Navbar />
        <div className="content">
          <PageTitle title="Staff List" />
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default TaskCol;
