import { NextPage } from "next";
import Head from "next/head";
import { Title } from "@/components/homepage/title";
import { Title2 } from "@/components/homepage/title2";
import Footer from "@/components/homepage/footer";
import { Card } from "@/components/ui/display-card";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About CRIC - Swiss Cybersecurity Experts</title>
        <meta
          name="description"
          content="Learn about CRIC, a Swiss-based cybersecurity firm specializing in innovative OSINT solutions. Discover our story, values, and mission to make cybersecurity accessible and reliable."
        />
        <meta
          property="og:title"
          content="About CRIC - Swiss Cybersecurity Experts"
        />
        <meta
          property="og:description"
          content="Get to know CRIC, our story, values, and mission. We're building sustainable, user-focused cybersecurity solutions without VC constraints."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title title={"About CRIC"} />
      <p className="text-muted-foreground text-sm md:text-base mb-6">
        Discover whos composing the CRIC.
      </p>
      <Card className="w-full mt-6 py-4 p-3 sm:p-4 lg bg-gradient-to-br from-transparent to-[hsl(var(--muted))] justify-between text-left">
        <Title2 title={"Our story"} />
        <p className="text-muted-foreground text-sm md:text-base my-6">
          We met on AI Start-up scene in 2023, after couple of months of
          collaboration. We started to work on OSINT Solutions and were driven
          by these goals: Build something performant and affordable for anyone A
          project with deep level of search powererd by all the latest hot
          technologies.
        </p>
        <Title2 title={"Our values"} />
        <p className="text-muted-foreground text-sm md:text-lg my-6">
          We are a small team of 2 people, we are a small company. We are not a
          VC funded startup. We are not looking for investors. We want to keep
          our freedom and build a substainable business while working on
          features that provides the best value to our users.
        </p>
        <Title2 title={"Our mission"} />
        <p className="text-muted-foreground text-sm md:text-lg mt-6">
          We want to make the cybersecurity more reliable for everyone, for our
          switzerland clients. To achieve this, we are building a platform that
          helps people understand and use cybersecurity. We are here to fight
          bad guys. ⚔️
        </p>
      </Card>
      <Footer />
    </>
  );
}
