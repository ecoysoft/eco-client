"use client";

import MenuIcon from "@mui/icons-material/Menu";
import { Container, styled } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import * as React from "react";

const pages = ["Home", "Service", "Pricing", "Blog", "Contact Us"];

const Main = styled("div")(({ theme }) =>
  theme.unstable_sx({
    maxWidth: "1170px",
    display: "flex",
    justifyContent: "center",
  })
);

export const TopNav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#18191C" }}>
      <Container>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          py={{ xs: 0.5, md: 2 }}
        >
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              width: "40%",
              maxWidth: "450px",
              justifyContent: "space-between",
            }}
          >
            {pages.map((page) => (
              <Typography
                component="a"
                href={page}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  color: "white",
                  textTransform: "capitalize",
                }}
              >
                {page}
              </Typography>
            ))}
          </Box>

          <Box sx={{}}>
            <Button
              variant="outlined"
              color="inherit"
              sx={{ textTransform: "capitalize" }}
            >
              Let's Talk
            </Button>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
