import { Overview } from "@/components/overview";
import ttl_web from "@/shared/font/ttl_web";
import {
  Avatar,
  AvatarGroup,
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

import { RiPlayCircleFill } from "react-icons/ri";

export const WhyChooseUs = () => {
  const tag = "Why Choose Us";
  const title = "Building a design easy for business";
  const description =
    "At ecoysoft Management, we simplify the design process for your business. Our expert designers and innovative solutions ensure seamless integration and impactful results. From concept to execution, we prioritize simplicity, efficiency, and excellence. Choose ecoysoft Management for an easier design journey and to stand out in today's competitive landscape.";

  return (
    <Container sx={{ py: { xs: 6, lg: 12 } }}>
      <Overview tag={tag} title={title} description={description} />

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
                  className={ttl_web.className}
                  typography={{ xs: "h2", md: "h1" }}
                  color={"white"}
                  style={{ fontWeight: 700 }}
                >
                  90
                  <Typography
                    className={ttl_web.className}
                    component={"span"}
                    typography={{ xs: "h2", md: "h1" }}
                    color={"#55E6A5"}
                    style={{ fontWeight: 700 }}
                  >
                    +
                  </Typography>
                </Typography>
                <Typography
                  variant="caption"
                  className={ttl_web.className}
                  color={"whitesmoke"}
                >
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
              className={ttl_web.className}
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
