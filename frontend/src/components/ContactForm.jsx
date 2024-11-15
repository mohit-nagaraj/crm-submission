import { TextField, Grid2 } from "@mui/material";
import PropTypes from "prop-types";

const ContactForm = ({ formData, setFormData, onSubmit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid2 container spacing={2} marginTop={1}>
        {[
          "firstName",
          "lastName",
          "email",
          "phoneNumber",
          "company",
          "jobTitle",
        ].map((field) => (
          <Grid2 item xs={12} sm={6} key={field}>
            <TextField
              fullWidth
              label={field
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())
                .trim()}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </Grid2>
        ))}
      </Grid2>
    </form>
  );
};

ContactForm.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
