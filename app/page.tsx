import { MeetTeamMembers } from "@/modules/sections/home/meet-team-members";
import { Grid } from "@mui/material";
import { WhyChooseUs } from "../modules/sections/home/why-choose-us";

const Page = () => {
  return (
    <Grid container justifyContent={"center"}>
      <Grid item>
        <WhyChooseUs />
      </Grid>
      <Grid item>
        <MeetTeamMembers />
      </Grid>
    </Grid>
  );
};

export default Page;
