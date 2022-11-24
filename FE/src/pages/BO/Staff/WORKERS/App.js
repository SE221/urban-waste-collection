import './styles.css'
import { COLUMNS } from '../ultis/columns'
import { Table } from './Table'
import React from 'react';
import Sidebar from "../../../../components/sidebar/Sidebar";
import Navbar from "../../../../components/navbar/Navbar";
import '../../../tool/tool.css'
import PageTitle from "../../../../components/pageTitle/PageTitle";

export default function WORKERS() {

  const data = [
    {
      id:1,
        wid:"WD-12345",
        name: "Phan Minh Dat",
        role: "Collector",
         year: "1990",
         phone:"092525326",
       active: true,
       view:"details"
    },
    {
      id:2,
        wid:"WD-32523",
        name: "Phan Minh Dut",
        role: "Janitor",
         year: "1999",
         phone:"092525326",
       active: true,
       view:"details"
    },
    {
      id:3,
        wid:"WD-23532",
        name: "Phan Minh Det",

        role: "Collector",
         year: "2000",
         phone:"092545326",
       active: false,
       view:"details"
    },
    {
      id:4,
        wid:"WD-54332",
        name: "Le Huy",
        role: "Collector",
         year: "1990",
         phone:"092525326",
       active: false,
       view:"details"
    },
    {
      id:5,
        wid:"WD-54743",
        name: "Phan Minh Dat",
        role: "Collector",
         year: "1990",
         phone:"092525326",
       active: true,
       view:"details"
    },
    {
      id:6,
        wid:"WD-5632",
        name: "Huynh Phut",
        role: "Janitor",
         year: "1990",
         phone:"092525326",
       active: true,
       view:"details"
    },
    {
      id:7,
        wid:"WD-26334",
        name: "La Vi Luong",
        role: "Collector",
         year: "2001",
         phone:"092525326",
       active: true,
       view:"details"
    },
    {
      id:8,
        wid:"WD-87553",
        name: "Phan Minh",
        role: "Janitor",
         year: "2002",
         phone:"092525326",
       active: true,
       view:"details"
    },
    {
      id:9,
        wid:"WD-34533",
        name: "Bui Hai",
        role: "Collector",
         year: "1990",
         phone:"092525326",
       active: false,
       view:"details"
    },
    {
      id:10,
        wid:"WD-44444",
        name: "Ka Ka",
        role: "Collector",
         year: "1990",
         phone:"092525326",
       active: true,
       view:"details"
    },
    {
      id:11,
        wid:"WD-12345",
        name: "Phan Minh Dat",
        role: "Collector",
         year: "1990",
         phone:"092525326",
       active: true,
       view:"details"
    },
    {
      id:12,
        wid:"WD-12345",
        name: "Phan Minh Dat",
        role: "Collector",
         year: "1990",
         phone:"092525326",
       active: true,
       view:"details"
    },
    {
      id:13,
        wid:"WD-12345",
        name: "Phan Minh Dat",
        role: "Collector",
         year: "1990",
         phone:"092525326",
       active: true,
       view:"details"
    },
    {
      id:14,
        wid:"WD-12345",
        name: "Phan Minh Dat",
        role: "Collector",
         year: "1990",
         phone:"092525326",
       active: true,
       view:"details"
    },
    {
      id:15,
        wid:"WD-12345",
        name: "Phan Minh Dat",
        role: "Collector",
         year: "1990",
         phone:"092525326",
       active: true,
       view:"details"
    },
    {
      id:16,
        wid:"WD-12345",
        name: "Phan Minh Dat",
        role: "Collector",
         year: "1990",
         phone:"092525326",
       active: true,
       view:"details"
    },
    {
      id:17,
        wid:"WD-32523",
        name: "Phan Minh Dut",
        role: "Janitor",
         year: "1999",
         phone:"092525326",
       active: true,
       view:"details"
    },
    {
      id:18,
        wid:"WD-23532",
        name: "Phan Minh Det",
        role: "Collector",
         year: "2000",
         phone:"092545326",
       active: false,
       view:"details"
    },
    {
      id:19,
        wid:"WD-54332",
        name: "Le Huy",
        role: "Collector",
         year: "1990",
         phone:"092525326",
       active: false,
       view:"details"
    },
    {
      id:20,
        wid:"WD-54743",
        name: "Phan Minh Dat",
        role: "Collector",
         year: "1990",
         phone:"092525326",
       active: true,
       view:"details"
    },
    {
      id:21,

        wid:"WD-5632",
        name: "Huynh Phut",
        role: "Janitor",
         year: "1990",
         phone:"092525326",
       active: true,
       view:"details"
    },
    {
      id:22,

        wid:"WD-26334",
        name: "La Vi Luong",
        role: "Collector",
         year: "2001",
         phone:"092525326",
       active: true,
       view:"details"
    },
    {
      id:23,

        wid:"WD-87553",
        name: "Phan Minh",
        role: "Janitor",
         year: "2002",
         phone:"092525326",
       active: true,
       view:"details"
    },
    {
      id:24,
        wid:"WD-34533",
        name: "Bui Hai",
        role: "Collector",
         year: "1990",
         phone:"092525326",
       active: false,
       view:"details"
    },
    {
      id:25,
        wid:"WD-44444",
        name: "Ka Ka",
        role: "Collector",
         year: "1990",
         phone:"092525326",
       active: true,
       view:"details"
    },
    {
        wid:"WD-12345",
        name: "Phan Minh Dat",
        role: "Collector",
         year: "1990",
         phone:"092525326",
       active: true,
       view:"details"
    },
    {
        wid:"WD-32523",
        name: "Phan Minh Dut",
        role: "Janitor",
         year: "1999",
         phone:"092525326",
       active: true,
       view:"details"
    },
    {
      id:26,
        wid:"WD-23532",
        name: "Phan Minh Det",
        role: "Collector",
         year: "2000",
         phone:"092545326",
       active: false,
       view:"details"
    },
    {
      id:27,
        wid:"WD-54332",
        name: "Le Huy",
        role: "Collector",
         year: "1990",
         phone:"092525326",
       active: false,
       view:"details"
    },
    {
      id:28,
        wid:"WD-54743",
        name: "Phan Minh Dat",
        role: "Collector",
         year: "1990",
         phone:"092525326",
       active: true,
       view:"details"
    },
    {
      id:29,
        wid:"WD-5632",
        name: "Huynh Phut",
        role: "Janitor",
         year: "1990",
         phone:"092525326",
       active: true,
       view:"details"
    },
    {
      id:30,
        wid:"WD-26334",
        name: "La Vi Luong",
        role: "Collector",
         year: "2001",
         phone:"092525326",
       active: true,
       view:"details"
    },
    
   ]
  return (
    // <div >
    //   <h1>Table</h1>
    //   <h2>Sorting, Filtering, Pagination</h2>

    //   <Table rows={data} columns={COLUMNS} />
    // </div>
    <div className="tool">
            <Sidebar />
            <div className="toolContainer">
            <Navbar />
                <div className="content">
                    <PageTitle
                        title="Workers List"
                    />
                    <div>
                    <Table rows={data} columns={COLUMNS}/>
                      {/* <Table /> */}
        {/* <BasicTableComponent/> */}
                    </div>
                </div>
            </div>
        </div>
  )
}
