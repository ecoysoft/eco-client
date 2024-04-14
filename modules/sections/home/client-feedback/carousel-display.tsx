import { Box, IconButton } from "@mui/material";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export const CarouselDisplay = ({ children }: any) => {
  const ButtonGroup = () => {
    return (
      <Box
        display={"flex"}
        gap={2}
        position={"absolute"}
        bottom={0}
        left={"50%"}
        sx={{ transform: "translate(-50%, 0%)" }}
        zIndex={1}
      >
        <IconButton
          sx={{
            p: { xs: 1.5, md: 2 },
            color: "black",
            bgcolor: "#55E6A5",
            borderColor: "#55E6A5",
            borderStyle: "solid",
            borderWidth: "4px",
          }}
          disableRipple
          className="arrow-prev"
        >
          <FaArrowLeftLong />
        </IconButton>
        <IconButton
          sx={{
            p: { xs: 1.5, md: 2 },
            color: "black",
            bgcolor: "#55E6A5",
            borderColor: "#55E6A5",
            borderStyle: "solid",
            borderWidth: "4px",
          }}
          disableRipple
          className="arrow-next"
        >
          <FaArrowRightLong />
        </IconButton>
      </Box>
    );
  };

  return (
    <Box position={"relative"}>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation={{
          nextEl: ".arrow-next",
          prevEl: ".arrow-prev",
          disabledClass: "swiper-button-disabled",
        }}
      >
        {children}
      </Swiper>
      <ButtonGroup />
    </Box>
  );
};
