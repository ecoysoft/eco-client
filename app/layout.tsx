import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Grid } from "@mui/material";
import { Footer } from "./Layouts/footer";
import { TopNav } from "./Layouts/top-nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ecoysoft environment Inc.",
  description: "The next level brand creator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          style={{ height: "100vh", width: "100%" }}
        >
          <TopNav />
          {children}
          <Footer />
        </Grid>
      </body>
    </html>
  );
}
