"use client"
import Link from "next/link";
import { Button } from "../ui/button";
import { CalendarCheck } from "lucide-react";
export default function SickOff() {
  return (
    <div className="flex flex-col w-full my-12  justify-center items-center align-middle">
      <p className="text-muted-foreground  md:w-1/2 my-4">
        Learn how your company is exposed over cyber threats, to fix your issues and make your users.
      </p>
      <div className="flex flex-row flex-wrap md:flex-nowrap my-2 text-left gap-4">
        <Button variant={"default"} className="rounded-full">
          Get your free check
        </Button>
        <Link href="/book-a-call">
          <Button variant={"outline"} className="rounded-full">
            Book a call with us <CalendarCheck size={"18"} className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
