import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Grid } from "@mui/material";
import { TopNav } from "../shared/Layouts/top-nav";
import "../modules/styles/globals.css";
const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Grid container direction="column" alignItems="center">
          <TopNav />
          {children}
        </Grid>
      </body>
    </html>
  );
}
