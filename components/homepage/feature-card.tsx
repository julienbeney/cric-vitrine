import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/display-card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import localFont from "next/font/local";
import Icon from "../ui/icon";

const inter = localFont({ src: "../../fonts/CalSans.woff2" });

export const FeatureCard = (props: any) => {
  return (
    <Card
      className={
        (props.size == 2 ? "md:col-span-2 " : "") +
        " group/bento transition duration-600 ease bg-gradient-to-br hover:bg-gradient-to-tr from-[hsl(var(--muted))] to-transparent hover:shadow-md flex flex-col justify-between"
      }
    >
      <CardHeader className="text-start">
        <CardTitle className={inter.className + " text-2xl tracking-wide group-hover/bento:translate-x-2 transition duration-200"}>
          {props.title}
        </CardTitle>
        <CardDescription className="text-md">
          {props.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-row w-full items-end align-bottom justify-between">
        <Button variant={props.buttonVariant || "outline"} className="rounded-full group-hover/bento:bg-primary hover:bg-opacity-60 transition duration-400">
          {props.buttonText || "Learn More"}
        </Button>
        <Button variant={"outline"} size={"icon"} className="rounded-full group-hover/bento:text-primary transition duration-200">
          <Icon
            name={props.icon}
            strokeWidth={"1.2"}
            size={"22"}
            color={"var(--foreground)"}
          />
        </Button>
      </CardFooter>
    </Card>
  );
};
