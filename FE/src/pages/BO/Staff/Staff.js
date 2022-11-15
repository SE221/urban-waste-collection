// import { React } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import '../../tool/tool.css'
import PageTitle from "../../../components/pageTitle/PageTitle";

import React, { useState, useEffect } from 'react';
import { COLUMNS } from './ultis/columns';
import { Table } from './component/Table';
import axios from 'axios';

function Staff() {
  const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://randomuser.me/api?results=200&nat=us&inc=id,name,location,email,dob,phone')
            .then(res => {
                const objs = res.data.results;
                const data = objs.map(obj => {
                    return {
                        id : obj.id.value,
                        first_name: obj.name.first,
                        last_name: obj.name.last,
                        city: obj.location.city,
                        age: obj.dob.age,
                        role: obj.role,
                        phone: obj.phone
                    }
                })
                setPosts(data);
            })
            .catch(err => {
                console.log(err);
            });}, []);

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
                      <Table columns={COLUMNS} data={posts}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Staff;

    
    