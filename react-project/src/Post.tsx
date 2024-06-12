import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

interface PostProps {
  image: string;
  description: string;
}

const Post: React.FC<PostProps> = ({ image, description }) => {
  return (
    <Card raised sx={{ maxWidth: 345, marginBottom: 4 }}>
      <CardMedia component="img" height="345" image={image} alt="Post image" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
