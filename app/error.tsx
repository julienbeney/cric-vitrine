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

export default function ErrorPage() {
  return (
    <div className="flex flex-1 justify-center items-center h-screen w-full">
    <Card className="flex w-full mx-auto sm:w-7/12 lg:w-128 xl:w-7/12 py-8 px-4 md:px-8 gap-2 flex-col align-middle justify-center items-center bg-gradient-to-br from-[hsl(var(--muted))] to-transparent hover:shadow-md  h-fit">
      <Title title="Server Err0r" />
      <p className="text-base md:text-xl text-muted-foreground">Sorry, but the page you were looking for could have an error.</p>
      <Link  className="hover:text-primary text-muted-foreground text-sm flex flex-row align-baseline" href="/">Go back to the website{" "}<ArrowTopRightIcon /></Link>
    </Card>
    </div>
  );
}

const inter = localFont({ src: "../fonts/CalSans.woff2" });
const Title = (props: any) => {
  return (
      <h1 className={inter.className+" justify-center pb-2 text-4xl md:text-6xl bg-gradient-to-tl from-0% from-[hsl(var(--muted))] to-40% to-[hsl(var(--foreground))] bg-clip-text text-transparent"}>
        {props.title}
      </h1>
  );
};