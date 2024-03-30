import { Box } from "@mui/material";
import { Footer } from "./footer";
import { TopNav } from "./top-nav";

export const Layout = (props: any) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      height={"100vh"}
      width={"100%"}
      maxWidth={"1440px"}
    >
      <TopNav />
      {props.children}
      <Footer />
    </Box>
  );
};
