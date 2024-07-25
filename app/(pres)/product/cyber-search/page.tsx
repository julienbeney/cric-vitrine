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

const payton = Paytone_One({ weight: "400", subsets: ["latin"] });
const badge = {
  id: 1,
  name: "Open Source Intelligence Doe",
  designation:
    "Open Source Intelligence (OSINT) is the collection and analysis of information that is gathered from publicly available sources to be used in an intelligence context",
};
export default function Services() {
  return (
    <div className="flex flex-col align-middle justify-center items-center text-center mt-28 w-full sm:w-8/12 xl:w-7/12 mx-auto z-20">
      <a target="_blank" rel="noopener noreferrer"  href="https://en.wikipedia.org/wiki/Open-source_intelligence">
        <Badge variant={"secondary"} className="">
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
      <Footer />
    </div>
  );
}
