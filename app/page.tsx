import { ClientFeedback } from "@/modules/sections/home/client-feedback/client-feedback";
import { MeetTeamMembers } from "@/modules/sections/home/meet-team-members";
import { WhyChooseUs } from "../modules/sections/home/why-choose-us";

const Page = () => {
  return (
    <>
      <WhyChooseUs />
      <MeetTeamMembers />
      <ClientFeedback />
    </>
  );
};

export default Page;
