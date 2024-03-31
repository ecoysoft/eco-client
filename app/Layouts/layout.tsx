import { Grid } from "@mui/material";
import { Footer } from "./footer";
import { TopNav } from "./top-nav";

export const Layout = (props: any) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      height={"100vh"}
      width={"100%"}
    >
      <TopNav />
      {props.children}
      <Footer />
    </Grid>
  );
};
