import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/image/logo-with-name.png";

export const Logo = () => {
  return (
    <Link href={"/"}>
      <Box component={"div"} sx={{ width: { xs: 150, sm: 180, md: 200 } }}>
        <Image
          priority
          style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
          src={logo}
          alt="Logo with name"
        />
      </Box>
    </Link>
  );
};
