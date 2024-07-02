import { Box } from "@mui/material";
import React from "react";
import { Container } from "@mui/material";
import "./App.css";
import AppBar from "./components/AppBar";
import Banner from "./components/Banner";
import Features from "./components/Features";
import BusinessPlans from "./components/BusinessPlans";
import DropMenu from "./components/DropMenu";
import Footer from "./components/Footer";

const MgmtResponsiveness = () => {
  return (
    <Box
      sx={{
        height: "890px",
        width: {
          xs: "100", // 0
          sm: "200", // 600
          md: "300", // 900
          lg: "400", // 1200
          xl: "500", // 1536
        },
      }}
    >
      <Container>
        <AppBar />
        <Banner />
        <Features />
        <BusinessPlans />
        <DropMenu />
        <Footer />
      </Container>
    </Box>
  );
};

export default MgmtResponsiveness;
