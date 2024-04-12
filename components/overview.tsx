import ttl_web from "@/shared/font/ttl_web";
import { Box, Divider, Grid, Typography } from "@mui/material";

export const Overview = (props: any) => {
  const {
    tag = "",
    title = "",
    description = null,
    sx = { xs: "center", md: "left" },
  } = props;
  return (
    <>
      <Box display={"flex"} justifyContent={sx}>
        <Typography
          variant="overline"
          textTransform={"capitalize"}
          color={"#55E6A5"}
        >
          {tag}
        </Typography>
      </Box>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        spacing={{ xs: 2, md: 8 }}
      >
        <Grid item md={!!description ? 6 : 12}>
          <Typography
            className={ttl_web.className}
            typography={{ xs: "h4", md: "h3" }}
            style={{ fontWeight: 700 }}
            textAlign={sx}
          >
            {title}
          </Typography>
        </Grid>
        {!!description && (
          <Grid item md={6}>
            <Typography
              className={ttl_web.className}
              textAlign={"justify"}
              typography={"body2"}
              fontWeight={600}
              sx={{
                color: "GrayText",
              }}
            >
              {description}
            </Typography>
          </Grid>
        )}
      </Grid>
      <Box pt={2} pb={4} display={"flex"} justifyContent={sx}>
        <Divider sx={{ width: 170, borderBottomWidth: 2 }} />
      </Box>
    </>
  );
};
