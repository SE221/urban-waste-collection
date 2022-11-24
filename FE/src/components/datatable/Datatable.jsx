import React from "react";
import {  DataGrid } from "@mui/x-data-grid";

const columns = [
  {headerClassName: 'super-app-theme--header', field: "id", headerName: "ID", width: 70,},
  {headerClassName: 'super-app-theme--header', field: "name", headerName: "Name", width: 200 },
  {headerClassName: 'super-app-theme--header', field: "role", headerName: "Role", width: 110 }
];

const rows  = [
  { id: 1, name: "Le Huy", age: 35, role: 'Collector'},
  { id: 2, name: "Le Huy", age: 35, role: 'Janitor'},
  { id: 3, name: "Le Huy", age: 35, role: 'Janitor'},
  { id: 4, name: "Le Huy", age: 35, role: 'Janitor'},
  { id: 5, name: "Le Huy", age: 35, role: 'Janitor'},
  { id: 6, name: "Le Huy", age: 35, role: 'Janitor'},
  { id: 7, name: "Le Huy", age: 35, role: 'Janitor'},
  { id: 8, name: "Le Huy", age: 35, role: 'Janitor'},
  { id: 9, name: "Le Huy", age: 35, role: 'Janitor'},
  { id: 10, name: "Le Huy", age: 35, role: 'Janitor'},
];
rows.height=1 ;
const Datatable = () => {
  // DataGrid.rows.height=5;
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[100]}
        sx={{ 
          boxShadow: 2,

          '& .super-app-theme--header': {
          backgroundColor: ' #888888',
          fontWeight: "bold" ,
          height:10,
        },
        
          }}
      />
    </div>
  );
};

export default Datatable;
