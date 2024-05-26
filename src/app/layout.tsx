import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Topbar } from "./topbar";
import { Footer } from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bluestone Tech Services",
  description: "Bluestone Tech Services Pvt Ltd is considered as one of the leading companies of IT Industries has been started by a group of young and dynamic entrepreneurial IT professionals in the year of 2024 with a vision to make a mark in Information Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Topbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
