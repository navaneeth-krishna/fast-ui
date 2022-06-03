import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 250,
  },
  {
    field: "address",
    headerName: "Address",
    width: 400,
  },
  {
    field: "rating",
    headerName: "Rating",
    type: "number",
    width: 210,
  },
];

const rows = [
  { id: 1, name: "Snow", address: "Jon", rating: 35 },
  { id: 2, name: "Lannister", address: "Cersei", rating: 42 },
  { id: 3, name: "Lannister", address: "Jaime", rating: 45 },
  { id: 4, name: "Stark", address: "Arya", rating: 16 },
  { id: 5, name: "Targaryen", address: "Daenerys", rating: null },
  { id: 6, name: "Melisandre", address: null, rating: 150 },
  { id: 7, name: "Clifford", address: "Ferrara", rating: 44 },
  { id: 8, name: "Frances", address: "Rossini", rating: 36 },
  { id: 9, name: "Roxie", address: "Harvey", rating: 65 },
];

export default function UserStatsTable() {
  return (
    <>
      <div style={{ height: "97%", width: "100%" }}>
        <DataGrid
          rowHeight={25}
          rows={rows}
          columns={columns}
          pageSize={25}
          rowsPerPageOptions={[25]}
          disableSelectionOnClick
        />
      </div>
    </>
  );
}
