"use client";
import { Container } from "react-bootstrap";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./footer/page";
// import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Easyprompt",
  description: "The Ultimate AI Writing Tool For All Your Content Needs!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container className="Container">{children}</Container>
      </body>
    </html>
  );
}
