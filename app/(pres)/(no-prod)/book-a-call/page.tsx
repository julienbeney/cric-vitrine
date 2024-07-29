"use client";
import { Title } from "@/components/homepage/title";
import { Title2 } from "@/components/homepage/title2";
import Footer from "@/components/homepage/footer";
import { Card } from "@/components/ui/display-card";
import React, { useEffect } from "react";

export default function AboutUs() {
  return (
    <>
      <Title title={"Meet our team right now"} />
      <div className="h-6"></div>
      <CalendlyEmbed url="https://calendly.com/julienbeneypro/30min?background_color=050a12&text_color=ffffff&primary_color=2a8cff" />
      <Footer />
    </>
  );
}

const CalendlyEmbed = ({ url }: {url: string}) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    if (head) {
      head.appendChild(script);
    }
  }, []);

  return (
    <div
      className="calendly-inline-widget h-256 w-96 bg-transparent rounded-2xl"
      data-url={url}
    ></div>
  );
};
