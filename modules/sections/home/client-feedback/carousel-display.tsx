import { Box, Grid, IconButton } from "@mui/material";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const CarouselDisplay = ({ children }: any) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <Box
        display={"flex"}
        gap={2}
        className="carousel-button-group"
        position={"absolute"}
        bottom={0}
        left={"50%"}
        sx={{ transform: "translate(-50%, 0%)" }}
      >
        <IconButton
          sx={{ p: 2.5 }}
          color="error"
          className={currentSlide === 0 ? "disable" : ""}
          onClick={() => previous()}
        >
          <FaArrowLeftLong />
        </IconButton>
        <IconButton sx={{ p: 2.5 }} color="error" onClick={() => next()}>
          <FaArrowRightLong />
        </IconButton>
      </Box>
    );
  };

  return (
    <Grid container justifyContent={"center"}>
      <Carousel
        responsive={responsive}
        customButtonGroup={<ButtonGroup />}
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={true}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {children}
      </Carousel>
    </Grid>
  );
};
