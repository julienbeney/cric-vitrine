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
import Audits from "@/components/homepage/audits";

const payton = Paytone_One({ weight: "400", subsets: ["latin"] });

export default function Services() {
  return (
    <>
      <Badge variant={"secondary"} className="mt-28">
        Social Proof
      </Badge>
      <MainTitle>CyberScore</MainTitle>
      <p className="text-muted-foreground text-base md:text-lg">
      CyberScore offers a comprehensive and cost-effective security audit of your company. Our audits are designed to provide an improving plan and we attribute a score that can be displayed on your website. 
      </p>
      <div className="flex flex-row align-top items-start gap-4 my-4 pt-6 pb-10">
        <div className="flex flex-col align-middle items-center gap-1">
          <BuyButton title="Get my free check" />
          <p className=" text- text-sm">It's free to try</p>
        </div>
      </div>
      <Audits />
    </>
  );
}
