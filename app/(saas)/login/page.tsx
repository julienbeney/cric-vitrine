"use client";
import { Title } from "@/components/homepage/title";
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import { Righteous } from "next/font/google";
import Link from "next/link";
import FooterSimple from "@/components/homepage/footer-simple";

const righteous = Righteous({ weight: "400", subsets: ["latin"] });
const calSans = localFont({ src: "../../../fonts/CalSans.woff2" });

export default function ManagementEnrollment() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-between">
      <div></div>
      <div className="flex flex-col w-full gap-4 items-center justify-center">
        <Title title="Get started" />
        <div className="flex flex-row w-full justify-center gap-4">
          <div className="flex flex-col w-1/2 items-center space-y-2">
            <Button
              disabled
              className="text-foreground rounded-full text-base p-6 w-full "
              variant={"default"}
            >
              Log in
            </Button>
            <p className="text-muted-foreground">CyberCenter is coming soon</p>
          </div>
          <Button
            className="text-foreground rounded-full text-base p-6 w-1/2"
            variant={"default"}
          >
            Sign up
          </Button>
        </div>
      </div>
      <FooterSimple />
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
