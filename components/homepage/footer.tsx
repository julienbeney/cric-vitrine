import { Circle, Linkedin, Mail, Phone, Radius, Twitter } from "lucide-react";
import { Card, CardContent, CardFooter } from "../ui/display-card";
import { Button } from "../ui/button";
import { Logo } from "./footer-logo";
import { Badge } from "../ui/badge";
import Link from "next/link";
import localFont from "next/font/local";
import { ModeToggle } from "./mode-toggle";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Righteous } from "next/font/google";
const inter = localFont({ src: "../../fonts/CalSans.woff2" });

export default function Footer() {
  return (
    <Card className="w-full my-6 -p-2 bg-gradient-to-br from-transparent to-[hsl(var(--muted))] justify-between">
      <CardContent className="flex flex-row flex-wrap mt-6 gap-6 justify-between">
        <div className="flex flex-col items-start justify-start gap-2 max-w-64">
          <div className="flex flex-row gap-2">
            <Logo />
            <p className="text-muted-foreground text-sm font-light text-start">
              🇨🇭
            </p>
          </div>
          <p className="text-sm font-light text-start">
            We are on a mission to deliver automated tools that requirements for
            modern entrepreneurs.
          </p>
        </div>
        <div className="flex flex-col items-start text-start justify-start gap-2">
          <h3 className={inter.className + " font-semibold"}>Company</h3>
          <Link
            href={"/about-us"}
            className="text-muted-foreground text-sm underline underline-offset-2"
          >
            About CRIC
          </Link>
          <Link
            href={""}
            className="text-muted-foreground text-sm underline underline-offset-2"
          >
            Service Offer
          </Link>
          <Link
            href={""}
            className="text-muted-foreground text-sm underline underline-offset-2"
          >
            Pricing
          </Link>
        </div>
        <div className="flex flex-col items-start text-start justify-start gap-2">
          <h3 className={inter.className + " font-semibold"}>Services</h3>
          <Link
            href={"/cyber-search"}
            className="text-muted-foreground text-sm underline underline-offset-2"
          >
            CyberSearch
          </Link>
          <Link
            href={"/cyber-score"}
            className="text-muted-foreground text-sm underline underline-offset-2"
          >
            CyberScore
          </Link>
          <Link
            href={"audits"}
            className="text-muted-foreground text-sm underline underline-offset-2"
            >
            Advanced Audits
          </Link>
          <Link
            href={"audits"}
            className="text-muted-foreground text-sm underline underline-offset-2"
            >
            OSINT formations
          </Link>
        </div>
      </CardContent>
      <CardFooter className=" justify-between align-middle gap-3">
        <div className="flex flex-row gap-3">
          <Link href="phone:+41798760848">
            <Button className="rounded-full" variant={"outline"} size={"icon"}>
              <Phone size={"16"} strokeWidth={1.5} />
            </Button>
          </Link>
          <Link href="mailto:contact@cyb-int.ch">
            <Button className="rounded-full" variant={"outline"} size={"icon"}>
              <Mail size={"16"} strokeWidth={1.5} />
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/cyberresearchandintelligencecenter/">
            <Button className="rounded-full" variant={"outline"} size={"icon"}>
              <Linkedin size={"16"} strokeWidth={1.5} />
            </Button>
          </Link>
          <Link href="https://www.instagram.com/cric_center_switzerland">
            <Button className="rounded-full" variant={"outline"} size={"icon"}>
              <InstagramLogoIcon strokeWidth={1} />
            </Button>
          </Link>

          <Badge className="w-fit" variant={"outline"}>
            We're building{" "}
            <Radius size={12} className="ml-2 animate-spin text-primary" />
          </Badge>
        </div>

        <ModeToggle />
      </CardFooter>
    </Card>
  );
}
