"use client";
import { motion } from "framer-motion";
import { BButton } from "./border-button";
import { Button } from "../ui/button";
import Link from "next/link";

export default function BuyButton(props: any) {
  const title = props.title || "See What internet knows about you";
  const url = props.url || "/";
  /*return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: {
          yoyo: Infinity, // Create an infinite bounce effect
          duration: 0.6, // Duration of one bounce
          ease: "easeInOut", // Easing function for the animation
        },
      }}
    >
      <BButton>
        <Button
          className="tracking-wider text-foreground md:text-lg md:p-6 lg:text-xl font-semibold uppercase h-12 rounded-full m-1"
          variant={"default"}
        >
          {title}
        </Button>
      </BButton>
    </motion.div>
  );*/
  return (
    <Link href={url}>
      <Button
        className="tracking-wider shadow-2xl shadow-primary text-foreground md:text-lg md:p-6 lg:text-xl font-semibold uppercase h-12 rounded-full m-1"
        variant={"default"}
      >
        {title}
      </Button>
    </Link>
  );
}
