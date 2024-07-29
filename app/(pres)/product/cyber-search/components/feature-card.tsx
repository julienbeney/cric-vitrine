import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/display-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import localFont from "next/font/local";
import Icon from "@/components/ui/icon";

const inter = localFont({ src: "../../../../../fonts/CalSans.woff2" });

export const FeatureCard = (props: any) => {
  return (
    <Card
      className={
        (props.size == 2 ? "md:col-span-2 " : "") +
        " group bg-gradient-to-br from-[hsl(var(--muted))] to-transparent  flex flex-col justify-between "
      }
    >
      <CardHeader className="text-start group-hover:translate-x-2 ease-in-out transition duration-200">
        <div className="flex flex-row justify-between">
        <CardTitle className={inter.className + " text-2xl tracking-wide"}>
          {props.title}
        </CardTitle>
          <Button variant={"outline"} size={"icon"} className=" group-hover:-translate-x-2 group-hover:bg-primary transition duration-200 rounded-full">
            <Icon
              name={props.icon}
              strokeWidth={"1.2"}
              size={"22"}
              color={"var(--foreground)"}
            />
          </Button>
        </div>
        <CardDescription className="text-md">
          {props.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-row w-full items-end align-bottom justify-between">
        {props.buttonText && (
          <Button
            variant={props.buttonVariant || "outline"}
            className="rounded-full"
          >
            {props.buttonText}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
