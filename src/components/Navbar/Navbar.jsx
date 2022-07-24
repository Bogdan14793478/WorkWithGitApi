import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();

  function redirectToMainPage() {
    navigate("/");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              marginRight: "40px",
            }}
            onClick={redirectToMainPage}
          >
            Main Page
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
