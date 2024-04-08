import { Box } from "@mui/material";
import Image from "next/image";
import logo from "../../public/assets/logo/Log with name.png";

export const Logo = () => {
  return (
    <Box component={"a"} href="/" sx={{ width: { xs: 150, sm: 180, md: 200 } }}>
      <Image
        priority
        style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
        src={logo}
        alt="Logo with name"
      />
    </Box>
  );
};
