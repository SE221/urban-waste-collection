import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "age", headerName: "Age", width: 90 },
  { field: "role", headerName: "Role", width: 90 },
  { field: "phone", headerName: "Phone Number", width: 150 },
];

const rows = [
  { id: 1, name: "Le Huy", age: 35, role: 'Janitor', phone: '666'},
  { id: 2, name: "Le Huy", age: 35, role: 'Janitor', phone: '666'},
  { id: 3, name: "Le Huy", age: 35, role: 'Janitor', phone: '666'},
  { id: 4, name: "Le Huy", age: 35, role: 'Janitor', phone: '666'},
  { id: 5, name: "Le Huy", age: 35, role: 'Janitor', phone: '666'},
  { id: 6, name: "Le Huy", age: 35, role: 'Janitor', phone: '666'},
  { id: 7, name: "Le Huy", age: 35, role: 'Janitor', phone: '666'},
];

const Datatable = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
