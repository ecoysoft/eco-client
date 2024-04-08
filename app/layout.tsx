import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import { Grid } from "@mui/material";
import { TopNav } from "../shared/layouts/top-nav";
import "./globals.css";
import Footer from "@/shared/layouts/footer";

const t_web = Titillium_Web({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "ecoysoft environment Inc.",
  description: "ecoysoft The next level Brand creator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="favicon.ico" type="image/x-icon" sizes="any" />
      <body>
        <Grid container direction="column" alignItems="center">
          <TopNav />
          {children}
        </Grid>
        <Footer />
      </body>
    </html>
  );
}
