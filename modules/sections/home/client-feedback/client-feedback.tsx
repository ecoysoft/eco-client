"use client";

import { Overview } from "@/components/overview";
import ttl_web from "@/shared/font/ttl_web";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { CarouselDisplay } from "./carousel-display";

export const ClientFeedback = () => {
  const tag = "Client Feedback";
  const title = "Happy Words From Happy Customers";
  const sx = { xs: "center" };
  const color = "white";
  const dividerColor = "GrayText";

  const Slide = (props: any) => {
    const { comment = "", src = "", name = "", location = "" } = props;
    return (
      <Grid
        container
        direction={"column"}
        alignItems={"center"}
        px={3}
        pb={12}
        bgcolor={"white"}
      >
        <Typography
          maxWidth={600}
          textAlign={"center"}
          color={"white"}
          className={ttl_web.className}
          variant="body2"
        >
          {comment}
        </Typography>
        <Box py={3}>
          <Avatar src={src} sx={{ width: 60, height: 60 }} />
        </Box>

        <Typography
          textAlign={"center"}
          color={"white"}
          className={ttl_web.className}
          paragraph
          variant="h6"
          fontWeight={"bold"}
          mb={0}
        >
          {name}
        </Typography>
        <Typography
          className={ttl_web.className}
          textAlign={"center"}
          color={"white"}
          variant="body2"
        >
          {location}
        </Typography>
      </Grid>
    );
  };

  return (
    <Container>
      <Box
        bgcolor={"black"}
        borderRadius={3}
        sx={{ py: { xs: 6, lg: 10 }, position: "relative" }}
      >
        <Overview
          tag={tag}
          title={title}
          sx={sx}
          color={color}
          dividerColor={dividerColor}
        />

        <CarouselDisplay>
          <Slide
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fugit minus! Quo, voluptate reprehenderit. Sed ipsam quisquam qui laborum. Dignissimos quis dolore quidem est qui velit tempora perspiciatis unde animi."
            name="Nila das"
            location="Dhaka, Bangladesh"
          />
        </CarouselDisplay>
      </Box>
    </Container>
  );
};
