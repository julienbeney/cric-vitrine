import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/provider/theme-provider";
import InteractiveMask from "@/components/homepage/interactive-background";
import styles from "../style.module.css";
import { NavBar } from "@/components/homepage/nav-bar";
import TopBar from "@/components/homepage/top-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CRIC",
  description:
    "CRIC is a leading business intelligence firm based in Switzerland, specializing in cybersecurity and intelligence. We provide an acces to powerfull OSINT tools for anyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className={"relative min-h-screen"}>
            <InteractiveMask />
            {children}
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
//
