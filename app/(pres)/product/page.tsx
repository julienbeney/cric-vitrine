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
import { ProductCard } from "./components/product-card";
import Link from "next/link";

const payton = Paytone_One({ weight: "400", subsets: ["latin"] });

export default function Main() {
  return (
    <>
      <Badge variant={"secondary"}>
        Proudly Swiss Made <ArrowTopRightIcon />
      </Badge>
      <MainTitle>Discover our online Solutions</MainTitle>
      <div className="flex flex-row align-top items-start gap-4 my-4 pt-6 pb-10">
        <Link href="/product/cyber-search">
          <ProductCard
            title="CyberSearch"
            description="Do an OSINT search about someone."
            icon={"SearchCheck"}
          />
        </Link>
        <Link href="/product/cyber-score">
          <ProductCard
            title="CyberScore"
            description="See how your company is secured over the web."
            icon={"HeartHandshake"}
          />
        </Link>
      </div>
    </>
  );
}
