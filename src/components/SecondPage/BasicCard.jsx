import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const BasicCard = ({ item }) => {
  const redirectToRepo = () => {
    window.location = `${item.clone_url}`
  }
  return (
    <Card sx={{ minWidth: 275, marginBottom: "15px", margimTop: "30px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          name: {item?.full_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          forks: {item?.forks_count}
        </Typography>
        <Typography variant="body2">
          stars : {item?.stargazers_count}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={redirectToRepo}>See repo</Button>
      </CardActions>
    </Card>
  );
};
