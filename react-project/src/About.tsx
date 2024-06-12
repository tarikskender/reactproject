import React from "react";
import { Container, Typography, Box, Paper, Grid, Link } from "@mui/material";
import jakaslika from "./assets/jakaslika.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box mt={4} mb={4}>
        <Paper elevation={3} sx={{ padding: "20px" }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <img
                src={jakaslika}
                alt="Tarik Skender"
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                About Tarik Skender
              </Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Web Developer and Student
              </Typography>
              <Typography paragraph>
                Hello! I'm Tarik Skender, a passionate web developer and a
                student at International Burch University in Sarajevo...
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <Box textAlign="center" sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          See more on my Instagram and LinkedIn
        </Typography>
        <Link
          href="https://www.instagram.com/tskender_/"
          target="_blank"
          rel="noopener"
        >
          <InstagramIcon sx={{ mr: 2, fontSize: 40, color: "#E4405F" }} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/tarik-skender-0a4a70220/"
          target="_blank"
          rel="noopener"
        >
          <LinkedInIcon sx={{ fontSize: 40, color: "#0A66C2" }} />
        </Link>
      </Box>
    </Container>
  );
};

export default About;
