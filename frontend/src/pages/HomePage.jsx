import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import ContactForm from "../components/ContactForm";
import ContactTable from "../components/ContactTable";
import axiosInstance from "../util/interceptor";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";

const HomePage = () => {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    jobTitle: "",
  });
  const [editingContact, setEditingContact] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [deleteDialog, setDeleteDialog] = useState(false);

  const fetchContacts = async () => {
    try {
      const response = await axiosInstance.get("/contact");
      setContacts(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch contacts");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleEdit = (contact) => {
    setEditingContact(contact);
    setFormData(contact);
    setOpenDialog(true);
  };

  const handleSubmit = async () => {
    const { firstName, lastName, email, phoneNumber, company, jobTitle } =
      formData;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !company ||
      !jobTitle
    ) {
      toast.error("All fields are required!");
      return;
    }

    try {
      if (editingContact) {
        await axiosInstance.put(`/contact/${editingContact._id}`, formData);
        toast.success("Contact updated successfully");
      } else {
        await axiosInstance.post("/contact", formData);
        toast.success("Contact created successfully");
      }
      fetchContacts();
      handleCloseDialog();
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit contact");
    }
  };

  const handleCloseDialog = () => {
    setEditingContact(null);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      company: "",
      jobTitle: "",
    });
    setOpenDialog(false);
  };

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/contact/${deleteId}`);
      toast.success("Contact deleted successfully");
      fetchContacts();
      setDeleteDialog(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete contact");
    }
  };

  return (
    <Box sx={{ borderRadius: 2, overflow: "hidden" }}>
      <AppBar position="sticky" sx={{ borderRadius: 2 }}>
        <Toolbar sx={{ backgroundColor: "black", borderRadius: 2 }}>
          <Typography variant="h6">Contact Management</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <AccountCircle />
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingY: 2,
          marginX: { xs: 2, sm: 4, md: 12 },
        }}
      >
        <Typography variant="h5">User List</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: 2, backgroundColor: "black" }}
          onClick={() => setOpenDialog(true)}
        >
          Add User
          <AddIcon sx={{ ml: 1 }} />
        </Button>
      </Box>
      <Box
        sx={{
          borderRadius: 2,
          boxShadow: 1,
          marginX: { xs: 2, sm: 4, md: 12 },
        }}
      >
        <ContactTable
          setDeleteId={setDeleteId}
          setDeleteDialog={setDeleteDialog}
          contacts={contacts}
          onEdit={handleEdit}
        />
      </Box>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {editingContact ? "Edit Contact" : "Add Contact"}
        </DialogTitle>
        <DialogContent>
          <ContactForm formData={formData} setFormData={setFormData} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmit} color="primary">
            {editingContact ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={deleteDialog} onClose={() => setDeleteDialog(false)}>
        <DialogTitle>Delete Contact</DialogTitle>
        <DialogContent>
          <Typography variant="body2">
            Are you sure you want to delete this contact?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog(false)}>Cancel</Button>
          <Button onClick={handleDelete} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default HomePage;
