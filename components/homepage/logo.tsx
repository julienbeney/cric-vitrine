"use client";
import { Righteous } from "next/font/google";
import Link from "next/link";
const righteous = Righteous({ weight: "400", subsets: ["latin"] });
export const Logo = () => {
  return (
    <Link
      href="/"
      className={
        righteous.className +
        "  text-2xl md:text-xl subpixel-antialiased text-muted-foreground hover:text-primary font-semibold"
      }
    >
      CRIC
    </Link>
  );
};
/*<p
      className={
        righteous.className +
        " text-2xl subpixel-antialiased text-muted-foreground hover:text-primary font-semibold"
      }
    >
      Planifi
    </p>*/
