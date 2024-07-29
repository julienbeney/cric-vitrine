"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Logo } from "./logo";
import { AppWindowMac, BookOpen, Briefcase, Building, Menu, X } from "lucide-react";
import { useState } from "react";

export default function TopBar() {
  const [clicked, setClicked] = useState(true);
  return (
    <>
      <div className="sm:fixed hidden left-1/2 transform -translate-x-1/2 w-full sm:w-11/12 md:w-8/12 xl:w-7/12 shadow-lg  space-x-8 top-0 z-30 sm:flex flex-row align-middle justify-between items-center my-6 py-2 px-6 rounded-full backdrop-blur-xl">
        <Logo />
        <div className="w-1/2 flex flex-row flex-wrap align-middle justify-center space-x-6   items-center text-sm">
          <HoveredLink href="/product">Product</HoveredLink>
          <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          <HoveredLink href="/about-us">About Us</HoveredLink>
        </div>
        <Link href="/login">
          <Button className="rounded-full" variant={"default"}>
            Start
          </Button>
        </Link>
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
          <Link href="/login">
            <Button className="rounded-full" variant={"default"}>
              Start
            </Button>
          </Link>
        </div>
      ) : (
        <div className="sm:hidden fixed left-1/2 transform -translate-x-1/2 w-full sm:w-11/12 md:w-8/12 xl:w-7/12 shadow-lg top-0 z-30 my-6 py-2 px-6 rounded-lg sm:rounded-full backdrop-blur-xl">
          <div className="flex flex-row align-middle justify-between items-center space-x-8">
            <Button
              size={"icon"}
              variant={"ghost"}
              onClick={() => setClicked(true)}
            >
              <X />
            </Button>
            <Logo />
            <Link href="/login">
              <Button className="rounded-full" variant={"default"}>
                Start
              </Button>
            </Link>
          </div>

          <div className=" flex flex-col justify-start gap-4 m-4 mt-10 items-start text-lg">
            <HoveredLink onClick={() => setClicked(true)} href="/product">
              <span className="flex flex-row items-center gap-2">
                <AppWindowMac />
                Product
              </span>
            </HoveredLink>
            <HoveredLink onClick={() => setClicked(true)} href="/enterprise">
              <span className="flex flex-row items-center gap-2">
                <Briefcase />
                Enterprise
              </span>
            </HoveredLink>
            <HoveredLink onClick={() => setClicked(true)} href="/about-us">
              <span className="flex flex-row items-center gap-2">
                <BookOpen />
                About Us
              </span>
            </HoveredLink>
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
      className="hover:text-primary text-muted-foreground text-lg sm:text-sm"
    >
      {children}
    </Link>
  );
};
