import { Logo } from "@/components/homepage/logo";
import { Title } from "@/components/homepage/title";
import { Title2 } from "@/components/homepage/title2";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Features from "@/components/homepage/features";
import Footer from "@/components/homepage/footer";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Paytone_One } from "next/font/google";
import BuyButton from "@/components/homepage/buy-button";
import WhySection from "@/components/homepage/why-section";
import { MainTitle } from "@/components/homepage/main-title";
import Pricing from "@/components/homepage/pricing";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/display-card";
import TopBar from "@/components/homepage/top-bar";

const payton = Paytone_One({ weight: "400", subsets: ["latin"] });

export default function PricingPage() {
  return (
    <div className="flex h-screen flex-col align-middle justify-between items-start text-center w-96 md:w-7/12 lg:w-128 xl:w-7/12 mx-auto z-20  ">
      <div>
        <Title title={"Pricing offer"} />
        <p className="text-muted-foreground text-sm md:text-base my-6">
          
        </p>
          <Pricing />
      </div>
      <Footer />
    </div>
  );
}
