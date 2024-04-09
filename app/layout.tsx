import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import { Grid } from "@mui/material";
import { TopNav } from "../shared/layout/top-nav";
import "./globals.css";
import Footer from "@/shared/layout/footer";

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
      <body className={t_web.className}>
        <Grid container direction="column" alignItems="center">
          <TopNav />
          {children}
        </Grid>
        <Footer />
      </body>
    </html>
  );
}
