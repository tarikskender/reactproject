import React, { useState } from "react";
import { Container, TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = { name: "", email: "", message: "" };
    let formIsValid = true;

    if (!formData.name) {
      formIsValid = false;
      tempErrors.name = "Name is required";
    }
    if (!formData.email) {
      formIsValid = false;
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      tempErrors.email = "Email is not valid";
    }
    if (!formData.message) {
      formIsValid = false;
      tempErrors.message = "Message is required";
    }

    setErrors(tempErrors);
    return formIsValid;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" }); // Optionally clear form here
      navigate("/success"); // Navigate to ThirdPage after the alert
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            error={!!errors.message}
            helperText={errors.message}
          />
          <Button type="submit" variant="contained" sx={{ mt: 3 }}>
            Send
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ContactForm;
