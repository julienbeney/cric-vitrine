import { MainTitle } from "@/components/homepage/main-title";
import BusinessIntelligeance from "./components/bi";
import { NextPage } from "next";
import Head from "next/head";

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Enterprise Cybersecurity Solutions - CRIC</title>
        <meta
          name="description"
          content="Explore top-tier cybersecurity services tailored for enterprises. Contact CRIC today for bespoke Business Intelligence and security solutions."
        />
        <meta
          property="og:title"
          content="Enterprise Cybersecurity Services - CRIC"
        />
        <meta
          property="og:description"
          content="Secure your business with our comprehensive, tailor-made cybersecurity solutions. Contact us to learn how we can protect your enterprise."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainTitle>Enterprise</MainTitle>
      <p className="text-muted-foreground text-sm md:text-base mb-12">
        We offer wide range of Security Service for your company. For now,
        contact us for more information.
      </p>
      <BusinessIntelligeance />
    </>
  );
}
