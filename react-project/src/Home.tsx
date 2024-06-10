import React, { useState } from "react";
import { Container, Typography, Button, Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditableProfileCard from "./EditableProfileCard";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "Tarik Skender",
    description: "Student at IBU",
  });

  const handleLearnMoreClick = () => {
    navigate("/second-page", { state: { profile } });
  };

  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={2}
        sx={{ height: "100vh", alignItems: "center", justifyContent: "center" }}
      >
        <Grid item xs={12} sm={12}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to My SPA
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h5" gutterBottom>
              Explore the portfolio, read our blog, or check out our products!
            </Typography>
            <Button
              className="buttonChange"
              variant="contained"
              color="primary"
              onClick={handleLearnMoreClick}
            >
              Learn More
            </Button>
            <EditableProfileCard profile={profile} setProfile={setProfile} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
