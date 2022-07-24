import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";
import { UserForCard } from "../../interface/interface";

const OutlinedCard: React.FC<UserForCard> = ({ item }) => {
  let navigate = useNavigate();

  async function redirectToUserPage() {
    navigate(`/finduser/${item?.login}`);
  }

  return (
    <Box sx={{ minWidth: 275, display: "flex", flexDirection: "column" }}>
      <Card variant="outlined" sx={{ display: "flex" }}>
        <React.Fragment>
          <CardMedia
            sx={{
              display: "flex",
              height: "100px",
            }}
          >
            <img src={`${item?.avatar_url}`} alt="/" />
          </CardMedia>
          <CardContent>
            <Typography
              sx={{ fontSize: 34, width: "400px", padding: "30px 0 0 30px" }}
              color="text.secondary"
            >
              name: {`${item?.login || item?.name}`}
            </Typography>
            {item?.following && item?.following !== "null" && (
              <Typography
                variant="body2"
                sx={{ fontSize: 26, padding: "30px 0 0 30px" }}
              >
                following: {`${item?.following}`}
              </Typography>
            )}
            {item?.score && (
              <Typography
                variant="body2"
                sx={{ fontSize: 26, padding: "30px 0 0 30px" }}
              >
                number of repos: {`${item?.score}`}
              </Typography>
            )}
            {item?.bio && (
              <Typography
                variant="body2"
                sx={{ fontSize: 26, padding: "30px 0 0 30px" }}
              >
                bio: {`${item?.bio}`}
              </Typography>
            )}
            {item?.email && (
              <Typography
                variant="body2"
                sx={{ fontSize: 26, padding: "30px 0 0 30px" }}
              >
                email: {`${item?.email}`}
              </Typography>
            )}
            {item?.location && (
              <Typography
                variant="body2"
                sx={{ fontSize: 26, padding: "30px 0 0 30px" }}
              >
                location: {`${item?.location}`}
              </Typography>
            )}
            {item?.created_at && (
              <Typography
                variant="body2"
                sx={{ fontSize: 26, padding: "30px 0 0 30px" }}
              >
                created_at: {`${item?.created_at}`}
              </Typography>
            )}
            {item?.public_repos && (
              <Typography
                variant="body2"
                sx={{ fontSize: 26, padding: "30px 0 0 30px" }}
              >
                number of repos: {`${item?.public_repos}`}
              </Typography>
            )}
          </CardContent>
          {!item?.bio && (
            <CardActions>
              <Button size="large" onClick={redirectToUserPage}>
                Learn More
              </Button>
            </CardActions>
          )}
        </React.Fragment>
      </Card>
    </Box>
  );
};

export default OutlinedCard;
