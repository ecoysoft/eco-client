"use client";

import { Overview } from "@/components/overview";
import ttl_web from "@/shared/font/ttl_web";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import BackgroundImg from "./assets/bg.jpg";
import { CarouselDisplay } from "./carousel-display";

const comments = [
  {
    name: "jany dicosta",
    comment:
      "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
    location: "islamabad, pakisthan",
  },
  {
    name: "flora jain",
    comment:
      "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    image: "https://randomuser.me/api/portraits/women/0.jpg",
    location: "new york, america",
  },
  {
    name: "rahul chawhan",
    comment:
      "not again and again\nblinded do they leave those who accuse us, whence they hate us pleasure\nbecause pleasure therefore attains pain\nnot those who are softened by things",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    location: "new dilhi, india",
  },
];

export const ClientFeedback = () => {
  const tag = "Client Feedback";
  const title = "Happy Words From Happy Customers";
  const sx = { xs: "center" };
  const color = "white";
  const dividerColor = "GrayText";

  const Slide = (props: any) => {
    const { comment = "", image = "", name = "", location = "" } = props;
    return (
      <Grid container direction={"column"} alignItems={"center"} px={3} pb={12}>
        <Typography
          maxWidth={600}
          textAlign={"center"}
          color={"white"}
          className={ttl_web.className}
          variant="body2"
          textTransform={"capitalize"}
        >
          {comment}
        </Typography>
        <Box py={3}>
          <Avatar
            src={image}
            sx={{ width: { xs: 60, md: 70 }, height: { xs: 60, md: 70 } }}
          />
        </Box>

        <Typography
          textAlign={"center"}
          color={"white"}
          className={ttl_web.className}
          paragraph
          variant="h6"
          fontWeight={"bold"}
          mb={0}
          textTransform={"capitalize"}
        >
          {name}
        </Typography>
        <Typography
          className={ttl_web.className}
          textAlign={"center"}
          color={"white"}
          variant="body2"
          textTransform={"capitalize"}
        >
          {location}
        </Typography>
      </Grid>
    );
  };

  return (
    <Container>
      <Box position={"relative"}>
        <Image
          src={BackgroundImg}
          style={{
            zIndex: -1,
            position: "absolute",
            objectFit: "cover",
            height: "100%",
            borderRadius: "12px",
          }}
          priority
          alt="BackgroundImage"
          quality={100}
        />

        <Box sx={{ py: { xs: 6, lg: 10 } }}>
          <Overview
            tag={tag}
            title={title}
            sx={sx}
            color={color}
            dividerColor={dividerColor}
          />

          <CarouselDisplay>
            {comments.map((item, i) => {
              const { comment, image, location, name } = item;
              return (
                <SwiperSlide key={i}>
                  <Slide
                    comment={comment}
                    image={image}
                    name={name}
                    location={location}
                  />
                </SwiperSlide>
              );
            })}
          </CarouselDisplay>
        </Box>
      </Box>
    </Container>
  );
};
