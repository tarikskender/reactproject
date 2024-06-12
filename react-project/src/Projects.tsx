import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import unaPiratesImage from "./assets/unaPiratesImage.png";
import femFlowImage from "./assets/femFlowImage.png";

const Projects: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{ mt: 4, textAlign: "center" }}
      >
        My Projects
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={unaPiratesImage}
              alt="Una Pirates Rafting"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                Una Pirates Rafting
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A static website developed for Una Pirates Rafting to display
                their offers and promote the business. The website effectively
                reached 20k visitors through Google Ads.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href="https://unapiratesrafting.com"
                target="_blank"
              >
                Visit Site
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={femFlowImage}
              alt="FemFlow.ba"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                FemFlow.ba
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A website designed for FemFlow.ba, a startup delivering vending
                machines for women's hygiene products, enhancing accessibility
                and convenience.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="https://femflow.ba" target="_blank">
                Visit Site
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
