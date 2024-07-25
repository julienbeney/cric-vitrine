import { TrustedBy } from "@/components/homepage/trusted-by";
import { Badge } from "@/components/ui/badge";
import Features from "./components/features";
import Footer from "@/components/homepage/footer";
import { Paytone_One } from "next/font/google";
import BuyButton from "@/components/homepage/buy-button";
import WhySection from "@/components/homepage/why-section";
import SickOff from "./components/sick-off";
import BusinessIntelligeance from "./components/bi";

import { MainTitle } from "@/components/homepage/main-title";
import { SearchCheck, SearchCode } from "lucide-react";
import { AnimatedTooltip } from "./components/tooltip";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <a target="_blank" rel="noopener noreferrer"  href="https://en.wikipedia.org/wiki/Open-source_intelligence">
        <Badge variant={"secondary"}>
          OSINT <ArrowTopRightIcon className="ml-1" />
        </Badge>
      </a>
      <MainTitle>CyberSearch</MainTitle>
      <p className="text-muted-foreground text-base md:text-lg">
        The ultimate search system to uncover comprehensive details about an
        individual’s digital presence. Track and analyze every digital footprint
        for thorough insights.
      </p>
      <div className="flex flex-row align-top items-start gap-4 my-4 pt-6 pb-10">
        <div className="flex flex-col align-middle items-center gap-1">
          <BuyButton title="Try Cybersearch now" />
          <p className=" text- text-sm">It's free and easy</p>
        </div>
      </div>
      <Features />
      <SickOff />
      <BusinessIntelligeance />
    </>
  );
}
