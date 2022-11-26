// import { React } from "react";
import SidebarJan from "../../../components/sidebar/SidebarJan";
import Navbar from "../../../components/navbar/Navbar";
import '../../tool/tool.css'
import PageTitle from "../../../components/pageTitle/PageTitle";

import Calendar from './Components/calendar/Calendar';

function TaskJan() {
    return (
        <div className="tool">
            <SidebarJan />
            <div className="toolContainer">
            <Navbar />
                <div className="content">
                    <PageTitle
                        title="Staff List"
                    />
                    <Calendar />
                </div>
            </div>
        </div>
    );
};

export default TaskJan;

    
    