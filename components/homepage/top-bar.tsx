"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Logo } from "./logo";

export default function TopBar() {
  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 w-full sm:w-11/12 md:w-8/12 xl:w-7/12 shadow-lg  space-x-8 top-0 z-30 flex flex-row align-middle justify-between items-center my-6 py-2 px-6 rounded-full backdrop-blur">
      <Logo />
      <div className="w-1/2 flex flex-row flex-wrap align-middle justify-center gap-2 sm:gap-6 md:gap-8 items-center text-sm">
        <HoveredLink href="/about-us">About Us</HoveredLink>
        <HoveredLink href="/pricing">Pricing</HoveredLink>
      </div>
      <Button className="rounded-full" variant={"default"}>
        Work with us
      </Button>
    </div>
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
