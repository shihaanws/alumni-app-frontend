import Button from "@mui/material/Button";
import { DataGrid, GridColDef, GridApi, GridCellValue } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  // { field: 'id', headerName: 'ID', width: 70 },
  { field: "firstName", headerName: " Name", width: 230 },
  { field: "lastName", headerName: "Job Role", width: 230 },
  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 90,
  // },
  {
    field: "fullName",
    headerName: "Company name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 260,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    renderCell: (params) => {
      const onClick = () => {
        // e.stopPropagation(); // don't select this row after clicking

        const api: GridApi = params.api;
        const thisRow: Record<string, GridCellValue> = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };

      return (
        <Button
          variant="contained"
          color="secondary"
          style={{ textTransform: "lowercase" }}
          onClick={onClick}
        >Chat now
        </Button>
      );
    },
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataGridDemo() {
  return (
    <div
      style={{
        height: 400,
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <DataGrid
        style={{ width: "100px" }}
        rows={rows}
        columns={columns}
        pageSize={5}
      />
    </div>
  );
}
