import React from "react";
import { Container, Typography } from "@mui/material";
import "./SecondPage.css";
import ContactForm from "./ContactForm";
import "./ContactForm";

const SecondPage: React.FC = () => {
  return (
    <Container
      maxWidth="sm"
      className="container"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom className="title">
        Second Page
      </Typography>
      <Typography variant="body1" className="content">
        Welcome to the second page!
      </Typography>
      <ContactForm></ContactForm>
    </Container>
  );
};

export default SecondPage;
