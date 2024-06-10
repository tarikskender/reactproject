// Inside SecondPage.tsx
import React from "react";
import { Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import ContactForm from "./ContactForm";
import "./SecondPage.css";

const SecondPage: React.FC = () => {
  const location = useLocation();
  const { profile } = location.state || {};

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
      <ContactForm profile={profile} />
    </Container>
  );
};

export default SecondPage;
