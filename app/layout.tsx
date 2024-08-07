import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ArrowTop from "./components/ArrowTop";
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
          "text-sell-dark bg-sell-background \
          flex flex-col justify-center items-center xl:px-48 px-4"
        )}
      >
        <Navbar />
        <ArrowTop />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
