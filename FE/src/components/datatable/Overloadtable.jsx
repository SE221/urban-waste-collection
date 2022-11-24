import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { headerClassName: 'super-app-theme--header',field: "id", headerName: "ID", width: 70 },
  { headerClassName: 'super-app-theme--header',field: "name", headerName: "Name", width: 200 },
  { headerClassName: 'super-app-theme--header',field: "time", headerName: "Time (min)", width: 110 }
];

const rows = [
  { id: 1, name: "MCP#1-1", time:15, role: 'Collector'},
  { id: 2, name: "MCP#1-1", time:10, role: 'Janitor'},
  { id: 3, name: "MCP#1-1", time:11, role: 'Janitor'},
  { id: 4, name: "MCP#1-1", time:12, role: 'Janitor'},
  { id: 5, name: "MCP#1-1", time:7, role: 'Janitor'},
  { id: 6, name: "MCP#1-1", time:8, role: 'Janitor'},
  { id: 7, name: "MCP#1-1", time:10, role: 'Janitor'},
];

const Overloadtable = () => {
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
      
        },
        
          }}
      />
    </div>
  );
};

export default Overloadtable;
