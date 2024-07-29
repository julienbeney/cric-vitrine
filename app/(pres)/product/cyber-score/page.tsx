import { TrustedBy } from "@/components/homepage/trusted-by";
import { Badge } from "@/components/ui/badge";

import { NextPage } from 'next';
import Head from 'next/head';import Features from "./components/features";
import Footer from "@/components/homepage/footer";
import { Paytone_One } from "next/font/google";
import BuyButton from "@/components/homepage/buy-button";
import WhySection from "@/components/homepage/why-section";
import SickOff from "./components/sick-off";
import BusinessIntelligeance from "../../(no-prod)/enterprise/components/bi";

import { MainTitle } from "@/components/homepage/main-title";
import { SearchCheck, SearchCode } from "lucide-react";
import Audits from "@/components/homepage/audits";

const payton = Paytone_One({ weight: "400", subsets: ["latin"] });

export default function Services() {
  return (
    <>
    <Head>
        <title>Discover Our Online Cybersecurity Solutions | CRIC</title>
        <meta name="description" content="Explore top Swiss-hosted cybersecurity tools like CyberSearch and CyberScore to secure your company's digital presence." />
        <meta property="og:title" content="Discover Our Online Cybersecurity Solutions | CRIC" />
        <meta property="og:description" content="Choose between advanced cybersecurity tools designed to offer comprehensive protection and insights into your security posture." />
        <meta property="og:type" content="website" />
      </Head>
      <Badge variant={"secondary"} >
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
