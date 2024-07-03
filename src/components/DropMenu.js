import { Box, Button, Container } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const DropMenu = () => {
  return (
    <Container>
      <Box
        sx={{
          paddingX: "10rem",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        <Typography
          variant="h4"
          component="h3"
          sx={{
            fontFamily: "BlackSansSemiBold",
            fontSize: "30px",
          }}
        >
          Choose the right plan for your business
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "3rem",
          backgroundColor: "#fafafa",
          width: "330px",
          paddingX: "8px",
          paddingY: "9px",
          borderRadius: 9,
          justifyContent: "center",
          marginLeft: "24rem",
          marginBottom: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            backgroundColor: "#fce2af",
            width: "165px",
            paddingX: "9px",
            paddingY: "9px",
            borderRadius: 5,
          }}
        >
          <Typography
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "14px",
            }}
          >
            Yearly
          </Typography>
          <Button
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: "#ff6666",
              borderRadius: 6,
              textTransform: "initial",
              paddingY: "1px",
              paddingX: "7px",
              fontFamily: "BlackSansRegular",
              fontSize: "11px",
            }}
          >
            Up to 33% Off
          </Button>
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "BlackSansRegular",
              fontSize: "14px",
            }}
          >
            Monthly
          </Typography>
        </Box>
      </Box>

      {/* Tabs */}

      <Box
        sx={{
          display: "flex",
          gap: "0.6rem",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#2898a4",
            borderRadius: "18px",
            WebkitBorderBottomRightRadius: 0,
            WebkitBorderBottomLeftRadius: 0,
            paddingX: "11rem",
            paddingY: "6px",
          }}
        >
          <Button
            sx={{
              fontFamily: "BlackSansRegular",
              fontSize: "12px",
              mB: "5px",
              color: "#fff",
              textTransform: "capitalize",
            }}
          >
            BizEdge Suite
          </Button>
          <Typography
            sx={{
              fontFamily: "BlackSansRegular",
              fontSize: "8px",
              marginLeft: "19px",
              color: "#fff",
            }}
          >
            (Recommended)
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#F2F2F2",
            borderRadius: "18px",
            WebkitBorderBottomRightRadius: 0,
            WebkitBorderBottomLeftRadius: 0,
            paddingX: "11rem",
            paddingY: "12px",
          }}
        >
          <Button
            sx={{
              fontFamily: "BlackSansRegular",
              fontSize: "12px",
              mB: "5px",
              color: "#878787",
              textTransform: "capitalize",
            }}
          >
            People
          </Button>
        </Box>
      </Box>

      {/* Subscriptions */}

      <Box
        sx={{
          display: "flex",
          gap: "40px",
          marginLeft: "35rem",
        }}
      >
        {/* Sub Card 1 */}

        <Box
          sx={{
            textAlign: "center",
            paddingX: "10px",
            // paddingY: "1px",
          }}
        >
          <Typography
            sx={{
              color: "#878787",
              fontFamily: "BlackSansSemiBold",
              fontSize: "12px",
            }}
          >
            Startup
          </Typography>
          <Typography
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "14px",
            }}
          >
            300 NGN
          </Typography>
          <Typography
            sx={{
              fontFamily: "BlackSansRegular",
              fontSize: "8px",
              marginBottom: "10px",
            }}
          >
            Per Employee/Month
          </Typography>
          <Button
            variant="outlined"
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "8px",
              borderColor: "#2898A4",
              marginBottom: "5px",
            }}
          >
            Get Started
          </Button>
        </Box>

        {/* Sub Card 2 */}

        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "#FDEDCE",
            borderRadius: "6px",
            paddingX: "10px",
            paddingY: "1px",
          }}
        >
          <Typography
            sx={{
              color: "#878787",
              fontFamily: "BlackSansSemiBold",
              fontSize: "12px",
            }}
          >
            Business (Popular)
          </Typography>
          <Typography
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "14px",
            }}
          >
            500 NGN
          </Typography>
          <Typography
            sx={{
              fontFamily: "BlackSansRegular",
              fontSize: "8px",
              marginBottom: "10px",
            }}
          >
            Per Employee/Month
          </Typography>
          <Button
            variant="contained"
            disableElevation
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "8px",
              backgroundColor: "#F8B636",
              marginBottom: "5px",
            }}
          >
            Get Started
          </Button>
        </Box>

        {/* Sub Card 3 */}

        <Box
          sx={{
            textAlign: "center",
            paddingX: "10px",
          }}
        >
          <Typography
            sx={{
              color: "#878787",
              fontFamily: "BlackSansSemiBold",
              fontSize: "12px",
            }}
          >
            Pro
          </Typography>
          <Typography
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "14px",
            }}
          >
            1000 NGN
          </Typography>
          <Typography
            sx={{
              fontFamily: "BlackSansRegular",
              fontSize: "8px",
            }}
          >
            (Minimum of 20 <br /> employees)
          </Typography>
          <Button
            variant="outlined"
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "8px",
              borderColor: "#2898A4",
              marginBottom: "5px",
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>

      {/* Accordion */}

      <Box
        sx={{
          paddingX: "7rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: ".5rem",
            paddingY: "5px",
            borderTop: "1px solid",
            borderBottom: "1px solid",
            marginTop: "1rem",
            marginBottom: "1rem",
            borderBlockColor: "#F2F2F2",
          }}
        >
          <Typography
            color="#2898A4"
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "12px",
            }}
          >
            People Management
          </Typography>

          <KeyboardArrowDownIcon
            sx={{
              color: "#2898A4",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: ".5rem",
            paddingY: "5px",
            borderBottom: "1px solid",
            marginTop: "1rem",
            marginBottom: "1rem",
            borderBlockColor: "#F2F2F2",
          }}
        >
          <Typography
            color="#2898A4"
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "12px",
            }}
          >
            MyEdge - Employee Self Service
          </Typography>

          <KeyboardArrowDownIcon
            sx={{
              color: "#2898A4",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: ".5rem",
            paddingY: "5px",
            borderBottom: "1px solid",
            marginTop: "1rem",
            marginBottom: "1rem",
            borderBlockColor: "#F2F2F2",
          }}
        >
          <Typography
            color="#2898A4"
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "12px",
            }}
          >
            Task Management
          </Typography>

          <KeyboardArrowDownIcon
            sx={{
              color: "#2898A4",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: ".5rem",
            paddingY: "5px",
            borderBottom: "1px solid",
            marginTop: "1rem",
            marginBottom: "1rem",
            borderBlockColor: "#F2F2F2",
          }}
        >
          <Typography
            color="#2898A4"
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "12px",
            }}
          >
            Customer Support
          </Typography>

          <KeyboardArrowDownIcon
            sx={{
              color: "#2898A4",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: ".5rem",
            paddingY: "5px",
            borderBottom: "1px solid",
            marginTop: "1rem",
            marginBottom: "1rem",
            borderBlockColor: "#F2F2F2",
          }}
        >
          <Typography
            color="#2898A4"
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "12px",
            }}
          >
            Time Off Management
          </Typography>

          <KeyboardArrowDownIcon
            sx={{
              color: "#2898A4",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: ".5rem",
            paddingY: "5px",
            borderBottom: "1px solid",
            marginTop: "1rem",
            marginBottom: "1rem",
            borderBlockColor: "#F2F2F2",
          }}
        >
          <Typography
            color="#2898A4"
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "12px",
            }}
          >
            Reports
          </Typography>

          <KeyboardArrowDownIcon
            sx={{
              color: "#2898A4",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: ".5rem",
            paddingY: "5px",
            borderBottom: "1px solid",
            marginTop: "1rem",
            marginBottom: "1rem",
            borderBlockColor: "#F2F2F2",
          }}
        >
          <Typography
            color="#2898A4"
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "12px",
            }}
          >
            Document Management
          </Typography>

          <KeyboardArrowDownIcon
            sx={{
              color: "#2898A4",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: ".5rem",
            paddingY: "5px",
            borderBottom: "1px solid",
            marginTop: "1rem",
            marginBottom: "1rem",
            borderBlockColor: "#F2F2F2",
          }}
        >
          <Typography
            color="#2898A4"
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "12px",
            }}
          >
            Employee Onboarding
          </Typography>

          <KeyboardArrowDownIcon
            sx={{
              color: "#2898A4",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: ".5rem",
            paddingY: "5px",
            borderBottom: "1px solid",
            marginTop: "1rem",
            marginBottom: "1rem",
            borderBlockColor: "#F2F2F2",
          }}
        >
          <Typography
            color="#2898A4"
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "12px",
            }}
          >
            Time & Attendance Management
          </Typography>

          <KeyboardArrowDownIcon
            sx={{
              color: "#2898A4",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: ".5rem",
            paddingY: "5px",
            borderBottom: "1px solid",
            marginTop: "1rem",
            marginBottom: "1rem",
            borderBlockColor: "#F2F2F2",
          }}
        >
          <Typography
            color="#2898A4"
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "12px",
            }}
          >
            Payroll
          </Typography>

          <KeyboardArrowDownIcon
            sx={{
              color: "#2898A4",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: ".5rem",
            paddingY: "5px",
            borderBottom: "1px solid",
            marginTop: "1rem",
            marginBottom: "1rem",
            borderBlockColor: "#F2F2F2",
          }}
        >
          <Typography
            color="#2898A4"
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "12px",
            }}
          >
            Payroll - Direct Deposit
          </Typography>

          <KeyboardArrowDownIcon
            sx={{
              color: "#2898A4",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: ".5rem",
            paddingY: "5px",
            borderBottom: "1px solid",
            marginTop: "1rem",
            marginBottom: "1rem",
            borderBlockColor: "#F2F2F2",
          }}
        >
          <Typography
            color="#2898A4"
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "12px",
            }}
          >
            Accounting - Income
          </Typography>

          <KeyboardArrowDownIcon
            sx={{
              color: "#2898A4",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: ".5rem",
            paddingY: "5px",
            borderBottom: "1px solid",
            marginTop: "1rem",
            marginBottom: "1rem",
            borderBlockColor: "#F2F2F2",
          }}
        >
          <Typography
            color="#2898A4"
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "12px",
            }}
          >
            Accounting - Reports
          </Typography>

          <KeyboardArrowDownIcon
            sx={{
              color: "#2898A4",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: ".5rem",
            paddingY: "5px",
            borderBottom: "1px solid",
            marginTop: "1rem",
            marginBottom: "1rem",
            borderBlockColor: "#F2F2F2",
          }}
        >
          <Typography
            color="#2898A4"
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "12px",
            }}
          >
            Accounting Expenditure
          </Typography>

          <KeyboardArrowDownIcon
            sx={{
              color: "#2898A4",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: ".5rem",
            paddingY: "5px",
            borderBottom: "1px solid",
            marginTop: "1rem",
            marginBottom: "1rem",
            borderBlockColor: "#F2F2F2",
          }}
        >
          <Typography
            color="#2898A4"
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "12px",
            }}
          >
            Accounting - Contacts
          </Typography>

          <KeyboardArrowDownIcon
            sx={{
              color: "#2898A4",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: ".5rem",
            paddingY: "5px",
            // borderBottom: "1px solid",
            marginTop: "1rem",
            marginBottom: "1rem",
            borderBlockColor: "#F2F2F2",
          }}
        >
          <Typography
            color="#2898A4"
            sx={{
              fontFamily: "BlackSansSemiBold",
              fontSize: "12px",
            }}
          >
            Accounting - Inventory
          </Typography>

          <KeyboardArrowDownIcon
            sx={{
              color: "#2898A4",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default DropMenu;
