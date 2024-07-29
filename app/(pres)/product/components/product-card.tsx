"use client";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/display-card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import Icon from "@/components/ui/icon";

const inter = localFont({ src: "../../../../fonts/CalSans.woff2" });

export const ProductCard = (props: any) => {
  const cardVariants = {
    initial: {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)", // No shadow initially
    },
    hover: {
      scale: 1.05, // Slightly scale up the card on hover
      boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.7)", // Bright blue glow effect
      transition: {
        duration: 0.3, // Duration of the animation
        ease: "easeInOut",
      },
    },
  };
  return (
    <Card
      className={
        (props.size === 2 ? "md:col-span-2 " : "") +
        " group/bento transition duration-200 flex flex-col justify-between mouse-pointer bg-gradient-to-br from-[hsl(var(--muted))] to-transparent"
      }
    >
      <CardHeader className="group-hover/bento:translate-x-2 transition duration-200 text-center">
        <div className="flex flex-row justify-center">
          <CardTitle className={inter.className + " text-2xl tracking-wide"}>
            {props.title}
          </CardTitle>
          <Button
            variant={"secondary"}
            size={"icon"}
            className="rounded-full ml-2 group-hover/bento:bg-primary transition duration-200"
          >
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
/*
<motion.div
  variants={cardVariants}
  initial="initial"
  whileHover="hover"
  className="rounded-lg mouse-pointer">
</motion.div>
*/
