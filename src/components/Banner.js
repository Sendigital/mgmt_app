import { Box, Button, Container, Typography } from "@mui/material";
import PunchClockIcon from "@mui/icons-material/PunchClock";
import GroupsIcon from "@mui/icons-material/Groups";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LeftImg from "../assets/Group 8893.png";
import RightImg from "../assets/Group 1539.png";

const Banner = () => {
  return (
    <Container>
      <Box>
        <Typography
          variant="h3"
          component="h4"
          sx={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            lineHeight: "3.5rem",
            marginTop: "5rem",
            fontFamily: "BlackSansSemiBold",
          }}
        >
          Unlock Your Full HR Potential <br /> With Our Powerful People <br />{" "}
          Management App.
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="paragraph"
          component="p"
          sx={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            lineHeight: "1.3rem",
            marginTop: "2rem",
            fontFamily: "BlackSansLight",
          }}
        >
          Elevate your HR game with automated employee onboarding, intuitive{" "}
          <br /> performance tracking and seamless team collaboration.
        </Typography>
      </Box>

      {/* Buttons */}

      <Box
        marginBottom="2rem"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "4rem",
          marginTop: "2rem",
        }}
      >
        <Button
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: "#E0EEF0",
            color: "#2898A4",
            textTransform: "capitalize",
            paddingY: "5px",
            paddingX: "30px",
            fontSize: "12px",
            fontFamily: "BlackSansSemiBold",
          }}
        >
          Sign Up For Free
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: "#2898A4",
            color: "white",
            textTransform: "capitalize",
            paddingY: "5px",
            paddingX: "35px",
            fontSize: "12px",
            fontFamily: "BlackSansRegular",
          }}
        >
          Book a Demo
        </Button>
      </Box>

      {/* icons */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          marginTop: "4rem",
          marginBottom: "8rem",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <PunchClockIcon
            sx={{
              padding: "1rem",
              fontSize: "7rem",
              color: "#F8B636",
              backgroundColor: "#FEF6E6",
              borderRadius: "20px",
            }}
          />
          <Typography
            color="#A8A8A8"
            sx={{
              fontSize: "12px",
              marginTop: "3px",
              fontFamily: "BlackSansLight",
            }}
          >
            Time & Attendance
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <GroupsIcon
            sx={{
              padding: "1rem",
              fontSize: "9rem",
              color: "#4069D0",
              backgroundColor: "#EBEFFA",
              borderRadius: "20px",
            }}
          />
          <Typography
            color="#A8A8A8"
            sx={{
              fontSize: "12px",
              marginTop: "3px",
              fontFamily: "BlackSansLight",
            }}
          >
            People management
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <ReceiptLongIcon
            sx={{
              padding: "1rem",
              fontSize: "7rem",
              color: "#FF6666",
              backgroundColor: "#FFE5E5",
              borderRadius: "20px",
            }}
          />
          <Typography
            color="#A8A8A8"
            sx={{
              fontSize: "12px",
              marginTop: "3px",
              fontFamily: "BlackSansLight",
            }}
          >
            Payroll
          </Typography>
        </Box>
      </Box>

      {/* images */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexGrow: "1",
          position: "absolute",
          left: 0,
          right: 0,
          top: 190,
        }}
      >
        <img src={LeftImg} alt="leftImg" width="330px" height="400px" />
        <img src={RightImg} alt="rightImg" width="330px" height="400px" />
      </Box>
    </Container>
  );
};

export default Banner;
