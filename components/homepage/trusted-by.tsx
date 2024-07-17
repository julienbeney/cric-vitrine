"use client";
import localFont from "next/font/local";
import Image from "next/image";
import mabtransport from "../../public/mabtransport.png";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Title } from "./title";
import { Righteous } from "next/font/google";
const inter = localFont({ src: "../../fonts/CalSans.woff2" });
const righteous = Righteous({ weight: "400", subsets: ["latin"] });


export const TrustedBy = () => {
  return (
    <>
      <div className="mt-8"></div>
      <Title title="Trusted By" />
      <div className="mt-6 flex flex-row justify-evenly w-full">
        <Link
          href="https://www.mabtransport.ch/"
          className="flex flex-row items-center justify-between"
        >
          <Image
            src={mabtransport}
            alt="Picture of Mabtransport logo"
            width={120}
          />
          <ArrowTopRightIcon className="-ml-2 text-muted-foreground" />
        </Link>
        <Link
          href="https://planifi.ch/"
          className="flex flex-row items-center justify-start"
        >
          <h1 className={righteous.className + " text-4xl text-gray-500"}>Planifi</h1>
          <ArrowTopRightIcon className="ml-2" />
        </Link>
      </div>
    </>
  );
};
