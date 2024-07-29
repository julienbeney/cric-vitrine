import { NextPage } from "next";
import Head from "next/head";

import { Badge } from "@/components/ui/badge";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Paytone_One } from "next/font/google";

import { MainTitle } from "@/components/homepage/main-title";
import { ProductCard } from "./components/product-card";
import Link from "next/link";
export default function Main() {
  return (
    <>
      <Head>
        <title>
          CyberScore: Comprehensive Security Audits for Your Business
        </title>
        <meta
          name="description"
          content="CyberScore provides a detailed security audit for your company, offering cost-effective solutions and a cybersecurity score to enhance your website's credibility."
        />
        <meta
          property="og:title"
          content="CyberScore: Secure Your Company's Future"
        />
        <meta
          property="og:description"
          content="Explore CyberScore for a comprehensive, cost-effective security audit. Try it free and see how you can improve your cybersecurity rating."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Badge variant={"secondary"}>
        Hosted in Switzerland <ArrowTopRightIcon />
      </Badge>
      <MainTitle>Discover our online Solutions</MainTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 align-top items-start gap-4 my-4 pt-6 pb-10 w-full">
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
