import  React from 'react';
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import '../../tool/tool.css'
import PageTitle from "../../../components/pageTitle/PageTitle";


function Messages() {
    return (
        <div className="tool">
            <Sidebar />
            <div className="toolContainer">
            <Navbar />
                <div className="content">
                    <PageTitle
                        title="Message"
                    />
                
                </div>
            </div>
        </div>
    );
};

export default Messages;
