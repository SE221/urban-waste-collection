// import { React } from "react";
import SidebarJan from "../../../components/Sidebar/SidebarJan";
import Navbar from "../../../components/Navbar/Navbar";
import "../../Tool/tool.css";
import PageTitle from "../../../components/PageTitle/PageTitle";

import Calendar from "./Components/calendar/Calendar";

function TaskJan() {
  return (
    <div className="tool">
      <SidebarJan />
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

export default TaskJan;
