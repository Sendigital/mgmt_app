import React from "react";
import { Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import BizLogo from "../assets/BizEdgeLogo.png";
import Apps from "../assets/Frame 2439.png";

const Footer = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#FAFAFA",
        paddingY: "6rem",
      }}
    >
      <Box
        sx={{
          paddingX: "7rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Images */}
        <Box>
          <Box
            sx={{
              marginBottom: "8rem",
            }}
          >
            <img src={BizLogo} alt="logo" />
          </Box>
          <Box>
            <img src={Apps} alt="apps" width="100px" />
          </Box>
        </Box>

        {/* Columns */}

        <Box
          sx={{
            marginBottom: "4rem",
          }}
        >
          <Typography
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "16px",
              marginBottom: "1rem",
            }}
          >
            Home
          </Typography>
          <Typography
            sx={{
              fontFamily: "BlackSansRegular",
              fontSize: "14px",
              marginBottom: "1rem",
            }}
          >
            Company
          </Typography>
          <Typography
            sx={{
              fontFamily: "BlackSansRegular",
              fontSize: "14px",
              marginBottom: "1rem",
            }}
          >
            Product
          </Typography>
          <Typography
            sx={{
              fontFamily: "BlackSansRegular",
              fontSize: "14px",
              marginBottom: "1rem",
            }}
          >
            Pricing
          </Typography>
          <Typography
            sx={{
              fontFamily: "BlackSansRegular",
              fontSize: "14px",
              marginBottom: "1rem",
            }}
          >
            Support
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "16px",
              marginBottom: "1rem",
            }}
          >
            Apps
          </Typography>
          <Typography
            sx={{
              fontFamily: "BlackSansRegular",
              fontSize: "14px",
              marginBottom: "1rem",
            }}
          >
            People Management
          </Typography>
          <Typography
            sx={{
              fontFamily: "BlackSansRegular",
              fontSize: "14px",
              marginBottom: "1rem",
            }}
          >
            Time & Attendance
          </Typography>
          <Typography
            sx={{
              fontFamily: "BlackSansRegular",
              fontSize: "14px",
              marginBottom: "1rem",
            }}
          >
            Payroll
          </Typography>
          <Typography
            sx={{
              fontFamily: "BlackSansRegular",
              fontSize: "14px",
              marginBottom: "1rem",
            }}
          >
            Asset Management
          </Typography>
          <Typography
            sx={{
              fontFamily: "BlackSansRegular",
              fontSize: "14px",
              marginBottom: "1rem",
            }}
          >
            Vehicle Management
          </Typography>
          <Typography
            sx={{
              fontFamily: "BlackSansRegular",
              fontSize: "14px",
              marginBottom: "1rem",
            }}
          >
            Document Generation
          </Typography>
        </Box>

        <Box
          sx={{
            marginBottom: "9rem",
          }}
        >
          <Typography
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "16px",
              marginBottom: "1rem",
            }}
          >
            Contact
          </Typography>
          <Typography
            sx={{
              fontFamily: "BlackSansRegular",
              fontSize: "14px",
              marginBottom: "1rem",
            }}
          >
            Get in touch
          </Typography>
          <Typography
            sx={{
              fontFamily: "BlackSansRegular",
              fontSize: "14px",
              marginBottom: "1rem",
            }}
          >
            Book a Demo
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
