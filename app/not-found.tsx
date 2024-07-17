"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/display-card";
import Link from "next/link";
import localFont from "next/font/local";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function NotFound() {
  return (
    <Card className="flex w-96 md:w-7/12 lg:w-128 xl:w-7/12 py-8  flex-col align-middle items-center bg-gradient-to-br from-[hsl(var(--muted))] to-transparent hover:shadow-md  justify-center h-1/2">
      <Title title="404 Not F0und" />
      <p className="text-xl text-muted-foreground">Page not found</p>
      <Link  className="hover:text-primary text-muted-foreground text-sm flex flex-row align-baseline" href="/">Go back to the website{" "}<ArrowTopRightIcon /></Link>
    </Card>
  );
}

const inter = localFont({ src: "../fonts/CalSans.woff2" });
const Title = (props: any) => {
  return (
      <h1 className={inter.className+" justify-center pb-2 text-5xl md:text-8xl bg-gradient-to-tl from-0% from-[hsl(var(--muted))] to-40% to-[hsl(var(--foreground))] bg-clip-text text-transparent"}>
        {props.title}
      </h1>
  );
};