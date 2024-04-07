import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Grid } from "@mui/material";
import { Footer } from "./Layouts/footer";
import { TopNav } from "./Layouts/top-nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecoysoft",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Grid container direction="column" alignItems="center">
          <TopNav />
          {children}
          <Footer />
        </Grid>
      </body>
    </html>
  );
}
