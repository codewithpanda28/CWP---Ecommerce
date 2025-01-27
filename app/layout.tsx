import type { Metadata } from "next";
import "@/app/css/globals.css";
import Header from "./components/Header";
import "slick-carousel/slick/slick.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title:{
  description: "This is the main page of CWP Shopping Mart products and services for the CWP Shopping Mart Products and Services", 
  template: "CWP: https://www.codewithpanda.com",
  default: "CWP Shopping Mart",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-bodyFont w-full bg-main-bg text-darkText">
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}