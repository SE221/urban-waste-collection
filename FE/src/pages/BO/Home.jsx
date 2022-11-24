
import * as React from 'react';
import Sidebar from "../../components/sidebar/Sidebar_dashboard";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";
import "../tool/tool.css"
import imgmap from '../../assets/images/map.jpg'
// import TableScrollbar from './table';
import Datatable from "../../components/datatable/Datatable";
import Overloadtable from '../../components/datatable/Overloadtable'; 


export default class Demo extends React.PureComponent {
 

  render() {
    return (
      <div className="tool">
            <Sidebar />
            <div className="toolContainer">
             <Navbar />
                <div className="content">
                <div className="dashboard">
                <h2>DASHBOARD</h2>
                </div>
                    <div className="maptool">
                    <h3 style={{textAlign:"left"}}>Map</h3>

                        <img src={imgmap} alt="Logo"  style={{width:'180%',height:'500px'}}/>
                        </div>
                        <div class="tool1" >
                        {/* <PageTitle
                     title="Active"
                              /> */}
                              <h3 style={{textAlign:"left"}}>Active</h3>
                        <Datatable />
                        </div>
                        <div class="tool2" >
                        <h3 style={{textAlign:"left"}}>Overloaded</h3>
                        <Overloadtable />
                        </div>
                    </div>
                    <a href='/map'>MAPPPP</a>

                </div>
            </div>
       
    );
  }
}


