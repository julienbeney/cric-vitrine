"use client";
import localFont from "next/font/local";
import Image from "next/image";
import mabtransport from "../../public/mabtransport.png";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Title } from "./title";
const inter = localFont({ src: "../../fonts/CalSans.woff2" });
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
          <Title title="Planifi" />
          <ArrowTopRightIcon className="ml-2" />
        </Link>
      </div>
    </>
  );
};
