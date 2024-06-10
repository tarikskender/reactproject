import React from "react";
import { Container, Typography } from "@mui/material";

const ThirdPage: React.FC = () => {
  return (
    <Container
      maxWidth="sm"
      className="responseMessage"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        padding: 3,
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Submission Success
      </Typography>
      <Typography variant="body1">
        Thank you for submitting the form. We will get back to you soon!
      </Typography>
    </Container>
  );
};

export default ThirdPage;
