"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/provider/theme-provider";
import InteractiveMask from "@/components/homepage/interactive-background";
import styles from "../style.module.css";
import { NavbarDemo } from "@/components/homepage/nav-bar";
import TopBar from "@/components/homepage/top-bar";
import Footer from "@/components/homepage/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative z-10 ">
      <TopBar />
      <div className="h-full pb-2 pl-2 pr-2">
        <div className="flex flex-col align-middle justify-center items-center text-center mt-36 w-full sm:w-8/12 xl:w-7/12 mx-auto z-20">
          {children}
          <Footer />
        </div>
      </div>
    </main>
  );
}
//
