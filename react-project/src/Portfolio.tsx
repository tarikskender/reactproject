import React from "react";
import { Container, Typography, Grid, Paper, CardMedia } from "@mui/material";
import image1 from "./assets/tshirt.png";
import image2 from "./assets/backside_t-shirt.png";
import image3 from "./assets/notebook.png";
import image4 from "./assets/pen.png";

const Portfolio: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" gutterBottom sx={{ mt: 4, textAlign: "center" }}>
        Portfolio
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px" }}>
            <Typography variant="h4" gutterBottom>
              Programming
            </Typography>
            <Typography variant="body1" paragraph>
              My programming expertise spans HTML, CSS, JavaScript, and React,
              focusing on building functional and user-friendly websites.
              Projects include websites for a rafting agency and a startup
              focused on women's hygiene products.
            </Typography>
          </Paper>
        </Grid>

        {}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px" }}>
            <Typography variant="h4" gutterBottom>
              Graphic Design
            </Typography>
            <Typography variant="body1" paragraph>
              As a graphic designer, I have crafted various visuals and designs
              tailored for social media marketing, enhancing brand visibility
              and engagement across digital platforms.
            </Typography>
          </Paper>
        </Grid>

        {}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px" }}>
            <Typography variant="h4" gutterBottom>
              Business Development
            </Typography>
            <Typography variant="body1" paragraph>
              In business development, I partner with Veloq Partners as a
              representative of Caldera Solutions. My role involves bridging the
              gap between sales and technical teams, ensuring that our marketing
              strategies are well-aligned with technical offerings and market
              demands.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Typography variant="h4" gutterBottom sx={{ mt: 4, textAlign: "center" }}>
        Gallery
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={3}>
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "auto" }}
            image={image1}
            alt="Gallery image 1"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "auto" }}
            image={image2}
            alt="Gallery image 2"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "auto" }}
            image={image3}
            alt="Gallery image 3"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "auto" }}
            image={image4}
            alt="Gallery image 4"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Portfolio;
