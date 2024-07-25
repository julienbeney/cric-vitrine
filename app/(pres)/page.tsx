import { Logo } from "@/components/homepage/logo";
import { Title } from "@/components/homepage/title";
import { TrustedBy } from "@/components/homepage/trusted-by";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Features from "@/components/homepage/features";
import Footer from "@/components/homepage/footer";
import { cn } from "@/lib/utils";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Paytone_One } from "next/font/google";
import BuyButton from "@/components/homepage/buy-button";
import WhySection from "@/components/homepage/why-section";
import SickOff from "@/components/homepage/sick-off";
import Audits from "@/components/homepage/audits";

import { MainTitle } from "@/components/homepage/main-title";
import Pricing from "@/components/homepage/pricing";
import TopBar from "@/components/homepage/top-bar";

const payton = Paytone_One({ weight: "400", subsets: ["latin"] });

export default function Main() {
  return (
      <div className="flex flex-col align-middle justify-center items-center text-center w-full sm:w-8/12 xl:w-7/12 mx-auto z-20">
        <Badge variant={"secondary"} className="mt-28">
          Proudly Swiss Made <ArrowTopRightIcon />
        </Badge>
        <MainTitle>Cyber Research And Intelligence Center</MainTitle>

        <p className="text-muted-foreground text-sm md:text-lg">
        CRIC is a leading business intelligence firm based in Switzerland, specializing in cybersecurity and cyber-origin intelligence. We provide an acces to priceless data for anyone.
        </p>
        <div className="flex flex-row align-top items-start gap-4 my-4 py-10">
          <div className="flex flex-col align-middle items-center gap-1">
            <BuyButton />
            <p className="text-muted-foreground text-sm ml-6">
              Offer limited to Swiss residents
            </p>
          </div>
        </div>
        <Features />
        <SickOff />
        <Audits />
        <TrustedBy />
        <WhySection />
        <Footer />
      </div>
  );
}
