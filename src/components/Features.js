import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ChartImg from "../assets/Frame 8893.png";
import PieChart from "../assets/Frame 8994.png";
import PhonesImg from "../assets/Group 9493.png";
import Contact1 from "../assets/Contact card.png";

const Features = () => {
  return (
    <Container>
      <Box
        sx={{
          paddingX: "10rem",
          textAlign: "center",
          marginBottom: "4rem",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "BlackSansBold",
            fontSize: "35px",
          }}
        >
          Our Unique Features
        </Typography>
        <Typography
          variant="paragraph"
          component="p"
          sx={{
            fontFamily: "BlackSansLight",
            fontSize: "18px",
            lineHeight: "27px",
            marginTop: "1rem",
          }}
        >
          Experience the ease of onboarding managing time- <br /> off, benefits
          and more
        </Typography>
      </Box>

      {/* Analytics Box */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "2rem",
          marginBottom: "8rem",
          marginLeft: "6rem",
          backgroundColor: "#EBEFFA",
          borderRadius: "20px",
          width: "900px",
        }}
      >
        <Box
          sx={{
            marginLeft: "3rem",
          }}
        >
          <Typography
            variant="subtitle"
            component="h6"
            color="#1E387B"
            marginBottom="1rem"
            sx={{
              fontFamily: "BlackSansSemiBold",
            }}
          >
            People Analytics, Time & Attendance, Core HR
          </Typography>
          <Typography
            variant="h5"
            component="h4"
            marginBottom="1rem"
            color="#0A1329"
            sx={{
              fontFamily: "BlackSansSemiBold",
            }}
          >
            Modern people <br /> management is here.
          </Typography>
          <Typography
            variant="paragraph"
            component="p"
            color="#545454"
            sx={{
              fontFamily: "BlackSansLight",
              fontSize: "13.5px",
              lineHeight: "20px",
            }}
          >
            Experience the ease of creating time-off <br /> benefit and
            onboarding and offloading
          </Typography>
        </Box>

        <Box padding={1}>
          <img src={ChartImg} alt="Chart" width="480px" height="410px" />
        </Box>
      </Box>

      {/* Attendance Box */}

      <Box
        width="480px"
        height="410px"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "2rem",
          marginBottom: "8rem",
          marginLeft: "6rem",
          backgroundColor: "#FEF6E6",
          borderRadius: "20px",
          width: "900px",
        }}
      >
        {/* Contact Card */}
        <Box
          sx={{
            position: "absolute",
            left: 345,
            zIndex: 1,
          }}
        >
          <img src={Contact1} alt="Pie Chart" width="310px" height="500px" />
        </Box>
        {/* Time  Card */}
        <Box
          width="204px"
          height="200px"
          sx={{
            // border: "2px solid red",
            borderRadius: "14px",
            backgroundColor: "#FCE2AF",
            textAlign: "center",
            marginLeft: "23rem",
            marginTop: "6rem",
          }}
        >
          <Typography
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "9px",
              color: "#545454",
              marginTop: "12px",
            }}
          >
            Daily Attendance
          </Typography>
          <Typography
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "12px",
              color: "#171717",
            }}
          >
            Wednesday 27th JUL, 2021
          </Typography>
          <Button
            variant="contained"
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "8px",
              color: "#171717",
              paddingX: ".3rem",
              height: "2rem",
              marginBottom: "8px",
              marginTop: "10px",
              backgroundColor: "#FFFFFF",
              width: "190px",
            }}
          >
            Remote
            <Button
              variant="contained"
              sx={{
                fontFamily: "BlackSansSemiBold",
                fontSize: "8px",
                color: "#FFFFFF",
                marginLeft: "45px",
                backgroundColor: "#545454",
                width: "90px",
              }}
            >
              On-Site
            </Button>
          </Button>

          <Box
            width="203px"
            height="138px"
            sx={{
              borderRadius: "14px",
              backgroundColor: "#fff",
              boxShadow: "0px 1px 1px 0.5px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "BlackSansSemiBold",
                fontSize: "8px",
                color: "#545454",
              }}
            >
              Good Morning
            </Typography>

            {/* Time */}
            <Box
              sx={{
                display: "flex",
                // gap: "2px",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginTop: ".3rem",
                paddingX: "25px",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "BlackSansSemiBold",
                  backgroundColor: "#F2F2F2",
                  paddingY: "3px",
                  paddingX: "10px",
                  borderRadius: "5px",
                }}
              >
                0
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "BlackSansSemiBold",
                  backgroundColor: "#F2F2F2",
                  paddingY: "3px",
                  paddingX: "10px",
                  borderRadius: "5px",
                }}
              >
                8
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "BlackSansSemiBold",
                }}
              >
                :
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "BlackSansSemiBold",
                  backgroundColor: "#F2F2F2",
                  paddingY: "3px",
                  paddingX: "10px",
                  borderRadius: "5px",
                }}
              >
                3
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "BlackSansSemiBold",
                  backgroundColor: "#F2F2F2",
                  paddingY: "3px",
                  paddingX: "10px",
                  borderRadius: "5px",
                }}
              >
                0
              </Typography>
            </Box>

            <Button
              variant="contained"
              elevation={2}
              sx={{
                marginTop: "10px",
                width: "100px",
                height: "25px",
                fontFamily: "BlackSansSemiBold",
                fontSize: "6px",
                color: "#878787",
                backgroundColor: "#FFFFFF",
                borderRadius: "5px",
              }}
            >
              Clock in time 00:00
            </Button>
            <Button
              variant="contained"
              elevation={2}
              sx={{
                marginTop: "10px",
                width: "150px",
                height: "25px",
                fontFamily: "BlackSansSemiBold",
                fontSize: "8px",
                color: "#171717",
                backgroundColor: "#F8B93A",
                borderRadius: "5px",
              }}
            >
              Clock In
            </Button>

            <Typography
              sx={{
                fontFamily: "BlackSansRegular",
                fontSize: "7px",
                color: "#A8A8A8",
                paddingY: "7px",
              }}
            >
              Work Hours: 00:00:00
            </Typography>
          </Box>
        </Box>
        {/* Attendance Info */}
        <Box
          sx={{
            marginRight: "3rem",
          }}
        >
          <Typography
            variant="subtitle"
            component="h6"
            color="#F8B93A"
            marginBottom="1rem"
            sx={{
              fontFamily: "BlackSansSemiBold",
            }}
          >
            Time & Attendance.
          </Typography>
          <Typography
            variant="h5"
            component="h4"
            marginBottom="1rem"
            color="#0A1329"
            sx={{
              fontFamily: "BlackSansSemiBold",
            }}
          >
            Track employee <br /> attendance easily
          </Typography>
          <Typography
            variant="paragraph"
            component="p"
            color="#545454"
            sx={{
              fontFamily: "BlackSansLight",
              fontSize: "13.5px",
              lineHeight: "20px",
            }}
          >
            Setup an official clock in & clock out <br /> tool for your
            employees, whether they <br /> work onsite or remotely.
          </Typography>
        </Box>
      </Box>

      {/* Payroll Box */}

      <Box
        width="480px"
        height="410px"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "2rem",
          marginBottom: "8rem",
          marginLeft: "6rem",
          backgroundColor: "#FFE5E5",
          borderRadius: "20px",
          width: "900px",
        }}
      >
        <Box
          sx={{
            marginLeft: "3rem",
          }}
        >
          <Typography
            variant="subtitle"
            component="h6"
            color="#FF6666"
            marginBottom="1rem"
            sx={{
              fontFamily: "BlackSansSemiBold",
            }}
          >
            Payroll
          </Typography>
          <Typography
            variant="h5"
            component="h4"
            marginBottom="1rem"
            color="#0A1329"
            sx={{
              fontFamily: "BlackSansSemiBold",
            }}
          >
            Autopilot your payroll
          </Typography>
          <Typography
            variant="paragraph"
            component="p"
            color="#545454"
            sx={{
              fontFamily: "BlackSansLight",
              fontSize: "13.5px",
              lineHeight: "20px",
            }}
          >
            Spend Less time doing your company's <br /> calculations, deductions
            and pay your team <br /> easily. Payroll made simple.
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: -1700,
            left: 670,
          }}
        >
          <img src={PieChart} alt="Chart" width="480px" height="420px" />
        </Box>
      </Box>

      {/* MyEdge Box */}

      <Box
        width="480px"
        height="410px"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "2rem",
          marginBottom: "8rem",
          marginLeft: "6rem",
          backgroundColor: "#EBEFFA",
          borderRadius: "20px",
          width: "900px",
        }}
      >
        <Box
          sx={{
            marginLeft: "3rem",
          }}
        >
          <Typography
            variant="subtitle"
            component="h6"
            color="#1E387B"
            marginBottom="1rem"
            sx={{
              fontFamily: "BlackSansSemiBold",
            }}
          >
            MyEdge (employee self-service)
          </Typography>
          <Typography
            variant="h5"
            component="h4"
            marginBottom="1rem"
            color="#0A1329"
            sx={{
              fontFamily: "BlackSansSemiBold",
            }}
          >
            Get the best out of Work-life
          </Typography>
          <Typography
            variant="paragraph"
            component="p"
            color="#545454"
            sx={{
              fontFamily: "BlackSansLight",
              fontSize: "13.5px",
              lineHeight: "20px",
            }}
          >
            MyEdge app has features that manage employee <br /> information that
            helps achieve a stress-free and <br /> personalized self-service
            experience.
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            left: 720,
            bottom: -2340,
          }}
        >
          <img
            src={PhonesImg}
            alt="Chart"
            width="380px"
            height="450px"
            marginRight="6rem"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Features;
