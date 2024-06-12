import React from "react";
import { Container, Grid, Typography, Link, Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Post from "./Post";

const postData = [
  {
    id: 1,
    image: "./src/assets/Post1.png",
    description:
      "Dive into a world where technology meets creativity and efficiency.",
  },
  {
    id: 2,
    image: "./src/assets/Post2.png",
    description:
      "Meet the powerhouse duo behind our most dynamic web applications: React and Next.js!",
  },
  {
    id: 3,
    image: "./src/assets/Post3.png",
    description: "Unlock the full potential of your data with React Query!",
  },
  {
    id: 4,
    image: "./src/assets/Post4.png",
    description:
      "Tailwind CSS vs. Styled Components: Choosing the Right Tool for Your Project",
  },
];

const Posts: React.FC = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid container spacing={4}>
        {postData.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Post image={post.image} description={post.description} />
          </Grid>
        ))}
      </Grid>
      <Box textAlign="center" sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          See more on our Instagram and LinkedIn
        </Typography>
        <Link
          href="https://instagram.com/calderasolutions"
          target="_blank"
          rel="noopener"
        >
          <InstagramIcon sx={{ mr: 2, fontSize: 40, color: "#E4405F" }} />
        </Link>
        <Link
          href="https://linkedin.com/company/caldera-solutions"
          target="_blank"
          rel="noopener"
        >
          <LinkedInIcon sx={{ fontSize: 40, color: "#0A66C2" }} />
        </Link>
      </Box>
    </Container>
  );
};

export default Posts;
