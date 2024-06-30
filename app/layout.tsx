import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sell - Hepls you sell your stuff easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "font-dela text-sell-dark bg-sell-background \
          flex flex-col justify-center items-center px-64"
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
