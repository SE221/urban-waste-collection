// import { React } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import '../../tool/tool.css'
import PageTitle from "../../../components/pageTitle/PageTitle";

import React, { useState, useEffect } from 'react';
import { COLUMNS } from './columns';
import  {Table} from './component/Table';
// import axios from 'axios';
// import Table from './table'
// import BasicTableComponent from "./ultis/staff2";
function Staff() {
const[posts,setPosts]= useState([]);
    // useEffect(() => {
    //     axios.get('https://randomuser.me/api?results=200&nat=us&inc=id,name,location,email,dob,phone')
    //         .then(res => {
    //             const objs = res.data.results;
    //             const data = objs.map(obj => {
    //                 return {
    //                     id : obj.id.value,
    //                     name: obj.name.first + ' ' + obj.name.last,
    //                     city: obj.location.city,
    //                     age: obj.dob.age,
    //                     role: obj.role,
    //                     phone: obj.phone
    //                 }
    //             })
    //             setPosts(data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });}, []);
    const data = [
        {
            "id":"WD-12345",
            "name": "Phan Minh Dat",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-32523",
            "name": "Phan Minh Dut",
            "role": "Janitor",
             "year": "1999",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-23532",
            "name": "Phan Minh Det",
            "role": "Collector",
             "year": "2000",
             "phone":"092545326",
           "active": "No",
           "view":"details"
        },
        {
            "id":"WD-54332",
            "name": "Le Huy",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "No",
           "view":"details"
        },
        {
            "id":"WD-54743",
            "name": "Phan Minh Dat",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-5632",
            "name": "Huynh Phut",
            "role": "Janitor",
             "year": "1990",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-26334",
            "name": "La Vi Luong",
            "role": "Collector",
             "year": "2001",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-87553",
            "name": "Phan Minh",
            "role": "Janitor",
             "year": "2002",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-34533",
            "name": "Bui Hai",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "No",
           "view":"details"
        },
        {
            "id":"WD-44444",
            "name": "Ka Ka",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-12345",
            "name": "Phan Minh Dat",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-12345",
            "name": "Phan Minh Dat",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-12345",
            "name": "Phan Minh Dat",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-12345",
            "name": "Phan Minh Dat",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-12345",
            "name": "Phan Minh Dat",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-12345",
            "name": "Phan Minh Dat",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-32523",
            "name": "Phan Minh Dut",
            "role": "Janitor",
             "year": "1999",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-23532",
            "name": "Phan Minh Det",
            "role": "Collector",
             "year": "2000",
             "phone":"092545326",
           "active": "No",
           "view":"details"
        },
        {
            "id":"WD-54332",
            "name": "Le Huy",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "No",
           "view":"details"
        },
        {
            "id":"WD-54743",
            "name": "Phan Minh Dat",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-5632",
            "name": "Huynh Phut",
            "role": "Janitor",
             "year": "1990",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-26334",
            "name": "La Vi Luong",
            "role": "Collector",
             "year": "2001",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-87553",
            "name": "Phan Minh",
            "role": "Janitor",
             "year": "2002",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-34533",
            "name": "Bui Hai",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "No",
           "view":"details"
        },
        {
            "id":"WD-44444",
            "name": "Ka Ka",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-12345",
            "name": "Phan Minh Dat",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-32523",
            "name": "Phan Minh Dut",
            "role": "Janitor",
             "year": "1999",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-23532",
            "name": "Phan Minh Det",
            "role": "Collector",
             "year": "2000",
             "phone":"092545326",
           "active": "No",
           "view":"details"
        },
        {
            "id":"WD-54332",
            "name": "Le Huy",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "No",
           "view":"details"
        },
        {
            "id":"WD-54743",
            "name": "Phan Minh Dat",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-5632",
            "name": "Huynh Phut",
            "role": "Janitor",
             "year": "1990",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-26334",
            "name": "La Vi Luong",
            "role": "Collector",
             "year": "2001",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-87553",
            "name": "Phan Minh",
            "role": "Janitor",
             "year": "2002",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-34533",
            "name": "Bui Hai",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "No",
           "view":"details"
        },
        {
            "id":"WD-44444",
            "name": "Ka Ka",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-12345",
            "name": "Phan Minh Dat",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-32523",
            "name": "Phan Minh Dut",
            "role": "Janitor",
             "year": "1999",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-23532",
            "name": "Phan Minh Det",
            "role": "Collector",
             "year": "2000",
             "phone":"092545326",
           "active": "No",
           "view":"details"
        },
        {
            "id":"WD-54332",
            "name": "Le Huy",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "No",
           "view":"details"
        },
        {
            "id":"WD-54743",
            "name": "Phan Minh Dat",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-5632",
            "name": "Huynh Phut",
            "role": "Janitor",
             "year": "1990",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-26334",
            "name": "La Vi Luong",
            "role": "Collector",
             "year": "2001",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-87553",
            "name": "Phan Minh",
            "role": "Janitor",
             "year": "2002",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
        {
            "id":"WD-34533",
            "name": "Bui Hai",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "No",
           "view":"details"
        },
        {
            "id":"WD-44444",
            "name": "Ka Ka",
            "role": "Collector",
             "year": "1990",
             "phone":"092525326",
           "active": "Yes",
           "view":"details"
        },
       ]
    return (
        <div className="tool">
            <Sidebar />
            <div className="toolContainer">
            <Navbar />
                <div className="content">
                    <PageTitle
                        title="Workers List"
                    />
                    <div>
                      <Table columns={COLUMNS} data={data}/>
                      {/* <Table /> */}
        {/* <BasicTableComponent/> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Staff;

    
    // src/components/filter.table.js
 // src/components/pagination.table.js
