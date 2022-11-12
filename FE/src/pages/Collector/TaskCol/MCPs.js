// import { React } from "react";
import SidebarCol from "../../../components/sidebar/SidebarCol";
import Navbar from "../../../components/navbar/Navbar";
import '../../tool/tool.css'
import PageTitle from "../../../components/pageTitle/PageTitle";

import Calendar from './Components/calendar/Calendar';

function TaskCol() {
    return (
        <div className="tool">
            <SidebarCol />
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

export default TaskCol;

    
    