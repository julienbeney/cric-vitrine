"use client";
import { motion } from "framer-motion";
import { BButton } from "./border-button";
import { Button } from "../ui/button";

export default function BuyButton() {
  return (
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
          className="md:text-lg md:p-6 lg:text-xl font-semibold uppercase h-12 rounded-full m-1"
          variant={"default"}
        >
          See What internet knows anout you
        </Button>
      </BButton>
    </motion.div>
  );
}
