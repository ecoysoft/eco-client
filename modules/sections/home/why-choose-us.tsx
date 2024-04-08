import {
  Avatar,
  AvatarGroup,
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

import { RiPlayCircleFill } from "react-icons/ri";

export const WhyChooseUs = () => {
  const texts = {
    text1: "Building a design easy for business",
    text2:
      "Lorem ipsum dolor sit, abet consectetur adipisicing elit. Assumenda nulla voluptatibus laudantium aliquid ab sit, delectus voluptates soluta blanditiis illo imped libero! Aliquam totam ipsa quos maxime nihil ex doloribus",
  };

  return (
    <Container sx={{ py: { xs: 6, lg: 12 } }}>
      <>
        <Box display={"flex"} justifyContent={{ xs: "center", md: "left" }}>
          <Typography
            variant="overline"
            textTransform={"capitalize"}
            color={"#55E6A5"}
          >
            why choose us
          </Typography>
        </Box>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          spacing={{ xs: 2, md: 8 }}
        >
          <Grid item md={6}>
            <Typography
              typography={{ xs: "h4", md: "h3" }}
              style={{ fontWeight: 700 }}
              textAlign={{ xs: "center", md: "left" }}
            >
              {texts.text1}
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Typography
              textAlign={"justify"}
              sx={{
                color: "GrayText",
              }}
            >
              {texts.text2}
            </Typography>
          </Grid>
        </Grid>
        <Box
          py={3}
          display={"flex"}
          justifyContent={{ xs: "center", md: "left" }}
        >
          <Divider sx={{ width: 170, borderBottomWidth: 2 }} />
        </Box>
      </>

      {/* ####################

          video section

        #################### */}

      <Grid container spacing={{ xs: 2, md: 4 }}>
        <Grid item xs={12} sm={5}>
          <Box
            p={4}
            bgcolor={"black"}
            borderRadius={3}
            height={{ xs: 240, md: 300 }}
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={"column"}
          >
            <Box display={"flex"} justifyContent={{ xs: "center", md: "left" }}>
              <div>
                <Typography
                  typography={{ xs: "h2", md: "h1" }}
                  color={"white"}
                  style={{ fontWeight: 700 }}
                >
                  90
                  <Typography
                    component={"span"}
                    typography={{ xs: "h2", md: "h1" }}
                    color={"#55E6A5"}
                    style={{ fontWeight: 700 }}
                  >
                    +
                  </Typography>
                </Typography>
                <Typography variant="caption" color={"whitesmoke"}>
                  Projects Completed
                </Typography>
              </div>
            </Box>

            <Box display={"flex"} justifyContent={{ xs: "center", md: "left" }}>
              <AvatarGroup total={24}>
                <Avatar alt="Remy Sharp" />
                <Avatar alt="Travis Howard" />
                <Avatar alt="Agnes Walker" />
                <Avatar alt="Trevor Henderson" />
              </AvatarGroup>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={7}>
          <Box
            height={{ xs: 240, md: 300 }}
            sx={{
              "::before": {
                content: "''",
                backgroundImage: `url("https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                backgroundSize: "cover",

                position: "absolute",
                filter: "brightness(0.5)",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                borderRadius: 3,
              },

              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              position={"relative"}
              textAlign={"center"}
              color={"white"}
              textTransform={"uppercase"}
              typography={{ xs: "h5", md: "h4" }}
              style={{ fontWeight: 700, letterSpacing: 5 }}
            >
              how we work
            </Typography>

            <IconButton
              size="small"
              sx={{
                ":hover": {
                  bgcolor: "#55E6A5",
                  color: "white",
                },

                position: "absolute",
                bgcolor: "white",
                right: -20,
                bottom: -20,
                fontSize: { xs: 100, sm: 110, md: 130 },
                color: "#55E6A5",
              }}
            >
              <RiPlayCircleFill />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
