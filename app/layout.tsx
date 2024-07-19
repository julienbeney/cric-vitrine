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
            <main className="relative z-10 ">
              <TopBar />
              <div className="h-full mt-28 pb-2 pl-2 pr-2">{children}</div>
            </main>
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
//
