"use client";

import { Overview } from "@/components/overview";
import ttl_web from "@/shared/font/ttl_web";
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Typography,
} from "@mui/material";

import * as React from "react";

import { Instagram, LinkedIn, Share, Twitter } from "@mui/icons-material";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";

export const MeetTeamMembers = () => {
  const tag = "MEET OUR TEAM MEMBERS";
  const title = "Meet the professional team behind the success";
  const sx = { xs: "center" };

  const img1 =
    "https://img.freepik.com/free-photo/smiling-redhead-man-with-laptop-looking-camera-cafe_1163-5162.jpg?w=996&t=st=1712844416~exp=1712845016~hmac=09ff11882f10c5b470c16720c7a868bf580b3457846d2555b9955cff23b60cb9";

  const img2 =
    "https://img.freepik.com/free-photo/smiling-happy-business-woman-posing-her-own-coffee-shop_1163-1790.jpg?w=996&t=st=1712844480~exp=1712845080~hmac=7a095a8da31b45c3d3effe3011b1baf31b05732b3424f6394cc75e71c32d1ed6";

  const img3 =
    "https://as1.ftcdn.net/v2/jpg/05/56/47/66/1000_F_556476605_g6fEELNbwJ1NsBEi0cQNGDwiVff96j8B.jpg";

  const membersInfo = [
    { name: "jenny wilson", designation: "developer", img: img1 },
    { name: "nila dicosta", designation: "graphic designer", img: img2 },
    { name: "jacob jones", designation: "Product designer", img: img3 },
  ];

  function SpeedDialComponent() {
    const [buttonOpen, setButtonOpen] = React.useState<boolean>(false);
    const handleButtonOpen = (): void => {
      setButtonOpen(true);
    };

    const handleButtonClose = (): void => {
      setButtonOpen(false);
    };

    const actions = [
      {
        icon: (
          <Link href={"#"}>
            <Instagram />
          </Link>
        ),
        name: "Instagram",
      },
      {
        icon: (
          <Link href={"#"}>
            <LinkedIn />
          </Link>
        ),
        name: "LinkedIn",
      },
      {
        icon: (
          <Link href={"#"}>
            <FaFacebookF style={{ fontSize: 22 }} />
          </Link>
        ),
        name: "Facebook",
      },
      {
        icon: (
          <Link href={"#"}>
            <Twitter />
          </Link>
        ),
        name: "Twitter",
      },
    ];

    return (
      <SpeedDial
        FabProps={{ size: "small" }}
        ariaLabel="SpeedDial openIcon example"
        onClose={handleButtonClose}
        onOpen={handleButtonOpen}
        open={buttonOpen}
        sx={{
          ".MuiSpeedDial-actions": {
            background: buttonOpen
              ? "linear-gradient(to bottom, #000000 85%, transparent 15%)"
              : "",
            borderRadius: 3,
            pt: 1,
          },

          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translate(-50%, 6%)",
        }}
        icon={<SpeedDialIcon openIcon={<Share />} />}
      >
        {actions.map((action, i) => (
          <SpeedDialAction
            sx={{
              ":hover": { bgcolor: "green" },
              bgcolor: "black",
              color: "white",
            }}
            key={i}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    );
  }

  return (
    <Container sx={{ py: { xs: 6, lg: 10 } }}>
      <Overview tag={tag} title={title} sx={sx} />

      <Grid container gap={4} justifyContent={"center"}>
        {membersInfo.map((member, i) => {
          const { name, designation, img } = member;
          return (
            <Box position={"relative"} key={i}>
              <Card
                sx={{
                  maxWidth: 345,
                  minWidth: 320,
                  borderRadius: 3,
                }}
              >
                <CardHeader
                  title={
                    <Typography
                      className={ttl_web.className}
                      variant="h5"
                      fontWeight={"bold"}
                      textTransform={"capitalize"}
                      textAlign={"center"}
                    >
                      {name}
                    </Typography>
                  }
                  subheader={
                    <Typography
                      className={ttl_web.className}
                      variant="body2"
                      fontWeight={"bold"}
                      textTransform={"capitalize"}
                      textAlign={"center"}
                      color={"GrayText"}
                    >
                      {designation}
                    </Typography>
                  }
                  sx={{ bgcolor: "ButtonFace" }}
                />
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  bgcolor="ButtonFace"
                >
                  <Box width={290}>
                    <CardMedia
                      component="img"
                      image={img}
                      alt={name}
                      sx={{ borderRadius: 3 }}
                    />
                  </Box>
                </Box>
              </Card>

              <SpeedDialComponent />
            </Box>
          );
        })}
      </Grid>
    </Container>
  );
};
