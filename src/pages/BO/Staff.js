import { React } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import '../tool/tool.css'
import Datatable from '../../components/datatable/Datatable'
import PageTitle from "../../components/pageTitle/PageTitle";

export default function Staff(){
    return (
        <div className="tool">
            <Sidebar />
            <div className="toolContainer">
            <Navbar />
                <div className="content">
                    <PageTitle
                        title="Staff List"
                    />
                    

          <Datatable />
        </div>
        </div>
        </div>
      );
    };
    