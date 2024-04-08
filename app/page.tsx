import { Box, Grid } from "@mui/material";
import { WhyChooseUs } from "./sections/home/why-choose-us";

const Page = () => {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid container>
          <Grid item>
            <WhyChooseUs />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Page;
