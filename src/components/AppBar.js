import React from "react";
import Box from "@mui/material/Box";
import BizLogo from "../assets/BizEdgeLogo.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const AppBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        paddingX: "10rem",
        justifyContent: "space-between",
        alignItems: "center",
        height: "10vh",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <img src={BizLogo} alt="logo" />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        <Typography
          sx={{
            fontFamily: "BlackSansSemiBold",
          }}
        >
          Home
        </Typography>
        <Typography
          sx={{
            fontFamily: "BlackSansLight",
          }}
        >
          Request a Demo
        </Typography>
        <Button
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: "#EAF8FA",
            color: "#000",
            textTransform: "capitalize",
            paddingY: "2px",
            paddingX: "25px",
            fontFamily: "BlackSansRegular",
          }}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default AppBar;
