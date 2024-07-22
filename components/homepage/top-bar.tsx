"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Logo } from "./logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function TopBar() {
  const [clicked, setClicked] = useState(true);
  return (
    <>
      <div className="sm:fixed hidden left-1/2 transform -translate-x-1/2 w-full sm:w-11/12 md:w-8/12 xl:w-7/12 shadow-lg  space-x-8 top-0 z-30 sm:flex flex-row align-middle justify-between items-center my-6 py-2 px-6 rounded-full backdrop-blur-xl">
        <Logo />
        <div className="w-1/2 flex flex-row flex-wrap align-middle justify-center gap-2 sm:gap-6 md:gap-8 items-center text-sm">
          <HoveredLink href="/services">Services</HoveredLink>
          <HoveredLink href="/pricing">Pricing</HoveredLink>
          <HoveredLink href="/about-us">About Us</HoveredLink>
        </div>
        <Button className="rounded-full" variant={"default"}>
          Work with us
        </Button>
      </div>
      {clicked ? (
        <div className="sm:hidden fixed left-1/2 transform -translate-x-1/2 w-full sm:w-11/12 md:w-8/12 xl:w-7/12 shadow-lg  space-x-8 top-0 z-30 flex flex-row align-middle justify-between items-center my-6 py-2 px-6 rounded-full backdrop-blur-xl">
          <Button
            size={"icon"}
            variant={"ghost"}
            onClick={() => setClicked(false)}
          >
            <Menu />
          </Button>
          <Logo />
          <Button className="rounded-full" variant={"default"}>
            Work with us
          </Button>
        </div>
      ) : (
        <div className="sm:hidden fixed left-1/2 transform -translate-x-1/2 w-full sm:w-11/12 md:w-8/12 xl:w-7/12 shadow-lg top-0 z-30 my-6 py-2 px-6 rounded-full backdrop-blur-xl">
          <div className="flex flex-row align-middle justify-between items-center space-x-8">
            <Button
              size={"icon"}
              variant={"ghost"}
              onClick={() => setClicked(true)}
            >
              <X />
            </Button>
            <Logo />
            <Button className="rounded-full" variant={"default"}>
              Work with us
            </Button>
          </div>

          <div className=" flex flex-col justify-start gap-4 m-4 items-start text-lg">
            <HoveredLink href="/services">{"~> "}Services</HoveredLink>
            <HoveredLink href="/pricing">{"~> "}Pricing</HoveredLink>
            <HoveredLink href="/about-us">{"~> "}About Us</HoveredLink>
          </div>
        </div>
      )}
    </>
  );
}

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="hover:text-primary text-muted-foreground text-sm"
    >
      {children}
    </Link>
  );
};
