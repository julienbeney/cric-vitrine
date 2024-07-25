"use client";

import localFont from "next/font/local";
import { Righteous } from "next/font/google";
import Link from "next/link";

const righteous = Righteous({ weight: "400", subsets: ["latin"] });
const calSans = localFont({ src: "../../fonts/CalSans.woff2" });

export default function EnrollingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-row h-screen w-full">
      <Logo />
      <div className="hidden md:flex flex-col p-4 md:p-8 w-1/2 lg:w-2/3 bg-primary justify-between text-background">
        <div className="w-full flex flex-row justify-between"></div>
        <div className="h-full flex flex-1 items-center  justify-center">
          <h1
            className={calSans.className + " break-words text-4xl xl:text-5xl"}
          >
            Keep your anxaty away.
          </h1>
        </div>
      </div>
      <div className="bg-muted/40 p-8 w-full">{children}</div>
    </div>
  );
}

const Logo = () => {
  return (
    <Link
      href="/login"
      className={
        calSans.className +
        "  fixed text-2xl p-8 tracking-wide text subpixel-antialiased md:text-foreground md:hover:text-background font-semibold"
      }
    >
      CyberCenter
    </Link>
  );
};
