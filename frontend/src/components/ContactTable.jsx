import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import { useState } from "react";

const ContactTable = ({ setDeleteId, setDeleteDialog, contacts, onEdit }) => {
  const [pageSize, setPageSize] = useState(8);

  const columns = [
    { field: "firstName", headerName: "First Name", flex: 1.15 },
    { field: "lastName", headerName: "Last Name", flex: 1.15 },
    { field: "email", headerName: "Email", flex: 2.5 },
    { field: "phoneNumber", headerName: "Phone Number", flex: 1.5 },
    { field: "company", headerName: "Company", flex: 2 },
    { field: "jobTitle", headerName: "Job Title", flex: 2 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <>
          <IconButton onClick={() => onEdit(params.row)} color="inherit">
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              setDeleteId(params.row.id);
              setDeleteDialog(true);
            }}
            color="inherit"
          >
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  const rows = contacts.map((contact) => ({
    id: contact._id,
    ...contact,
  }));

  return (
    <div style={{ height: 527, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 8, 20, 50]}
        pagination
        disableSelectionOnClick
        sx={{
          "& .MuiDataGrid-row:nth-of-type(even)": {
            backgroundColor: "#00000029",
          },
          "& .MuiDataGrid-row:nth-of-type(odd)": {
            backgroundColor: "white",
          },
          "& .MuiDataGrid-selectedRowCount": {
            display: "none",
          },
        }}
      />
    </div>
  );
};

ContactTable.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  setDeleteDialog: PropTypes.func.isRequired,
  setDeleteId: PropTypes.func.isRequired,
};

export default ContactTable;
