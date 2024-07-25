"use client";
import { Title } from "@/components/homepage/title";
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import { Righteous } from "next/font/google";
import Link from "next/link";

const righteous = Righteous({ weight: "400", subsets: ["latin"] });
const calSans = localFont({ src: "../../../fonts/CalSans.woff2" });

export default function ManagementEnrollment() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-between">
      <div></div>
      <div className="flex flex-col w-full gap-4 items-center justify-center">
        <Title title="Get started" />
        <div className="flex flex-row w-full justify-center gap-4">
          <Button
            className="text-foreground rounded-full text-base p-6 w-1/2"
            variant={"default"}
          >
            Log in
          </Button>
          <Button
            className="text-foreground rounded-full text-base p-6 w-1/2"
            variant={"default"}
          >
            Sign up
          </Button>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4 items-center justify-center">
        <Link href="/">
          <h1
            className={
              righteous.className +
              " text-muted-foreground text-2xl subpixel-antialiased hover:text-primary font-semibold"
            }
          >
            CRIC
          </h1>
        </Link>
        <div className="flex flex-row w-full justify-center gap-4 text-muted-foreground text-xs">
          <Link className="underline underline-offset-3" href="">
            Terms of use
          </Link>
          <p>|</p>
          <Link className="underline underline-offset-3" href="">
            Privacy policy
          </Link>
        </div>
      </div>
    </div>
  );
}

const Logo = () => {
  return (
    <Link
      href="/"
      className={
        righteous.className +
        "  fixed text-4xl subpixel-antialiased hover:text-primary font-semibold"
      }
    >
      CRIC
    </Link>
  );
};
