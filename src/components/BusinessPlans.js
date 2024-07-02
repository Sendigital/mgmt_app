import { Container, Typography, Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import BlackSansSemiBold from "../fonts/blacksanssemiboldwebfont647663a8d54cb4e2551213de87a56073.woff";
import BlackSansThin from "../fonts/blacksansthinwebfont.woff";
import BlackSansLight from "../fonts/blacksanslightwebfont.woff";
import BlackSansRegular from "../fonts/blacksansregularwebfontd6761cbf250866e8870d97f03fa629a8.woff";
import BlackSansBold from "../fonts/blacksansboldwebfont949ef363c646d9c2456af9d67a94778f.woff";

const BusinessPlans = () => {
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
          component="h3"
          sx={{
            fontFamily: "BlackSansSemiBold",
            fontSize: "30px",
          }}
        >
          We here to provide you with all you need
        </Typography>
        <Typography
          variant="paragraph"
          component="p"
          marginTop="1rem"
          sx={{
            fontFamily: "BlackSansLight",
          }}
        >
          We hold your hand as your business takes each step. Our goal is <br />{" "}
          to help your team run at its smoothest from day one.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "2rem",
          marginBottom: "4rem",
          marginLeft: "6rem",
          borderRadius: "20px",
          width: "900px",
          gap: "2rem",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            borderRadius: "16px",
            backgroundColor: "#F2F2F2",
          }}
        >
          <Box padding={4}>
            <Typography
              variant="subtitle1"
              component="h2"
              sx={{
                fontFamily: "BlackSansBold",
              }}
            >
              Ease of Use
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                component="p"
                sx={{
                  fontFamily: "BlackSansLight",
                }}
              >
                With our simple interface, employers and employees find it easy
                to operate the app. No specific training is required.
              </Typography>
            </Box>
          </Box>
        </Paper>
        <Paper
          elevation={0}
          sx={{
            borderRadius: "16px",
            backgroundColor: "#F2F2F2",
          }}
        >
          <Box padding={3.4}>
            <Typography
              variant="subtitle1"
              component="h2"
              sx={{
                fontFamily: "BlackSansBold",
              }}
            >
              Built For You
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                component="p"
                sx={{
                  fontFamily: "BlackSansLight",
                }}
              >
                Designed to support growing businesses and teams. No hidden
                charge or contract.
              </Typography>
            </Box>
          </Box>
        </Paper>
        <Paper
          elevation={0}
          sx={{
            borderRadius: "16px",
            backgroundColor: "#F2F2F2",
          }}
        >
          <Box padding={3.4}>
            <Typography
              variant="subtitle1"
              component="h2"
              sx={{
                fontFamily: "BlackSansBold",
              }}
            >
              Safe & Secure
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                component="p"
                sx={{
                  fontFamily: "BlackSansLight",
                }}
              >
                We maintain the confidentiality, integrity and availability of
                your data. No third party has your data.
              </Typography>
            </Box>
          </Box>
        </Paper>
        <Paper
          elevation={0}
          sx={{
            borderRadius: "16px",
            backgroundColor: "#F2F2F2",
          }}
        >
          <Box padding={3.4}>
            <Typography
              variant="subtitle1"
              component="h2"
              sx={{
                fontFamily: "BlackSansBold",
              }}
            >
              Support
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                component="p"
                sx={{
                  fontFamily: "BlackSansLight",
                }}
              >
                Our customer success team is quick to offer assistance when you
                need it.
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default BusinessPlans;
