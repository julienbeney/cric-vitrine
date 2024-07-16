"use client";
import { backOut, motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";

const InteractiveMask = () => {
  const { x, y } = useMousePosition();
  return (
    <div className="-z-50 fixed top-0 left-0">
      <div className="sticky top-0 left-0 h-screen w-screen overflow-hidden">
        <div className="absolute inset-0 z-[-1] bg-muted-foreground/20 "></div>
        <motion.div
          animate={{
            x: `${x-112}px`,
            y: `${y-112}px`,
          }}
          transition={{ type: "tween", duration: 0}}
          className="absolute z-[-1] h-56 w-56 rounded-full  bg-[radial-gradient(rgba(0,0,0,0.50)_100%,rgba(255,255,255,0.00)_100%)] dark:bg-[radial-gradient(rgba(0,255,255,0.5)_0%,rgba(0,255,255,0)_100%)]  blur-2xl  backdrop-blur-md"
        ></motion.div>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern
              id="dotted-pattern"
              width="16"
              height="16"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="3" cy="3" r="1.2" fill="black"></circle>
            </pattern>
            <mask id="dots-mask">
              <rect width="100%" height="100%" fill="white"></rect>
              <rect
                width="100%"
                height="100%"
                fill="url(#dotted-pattern)"
              ></rect>
            </mask>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="hsl(var(--background))"
            mask="url(#dots-mask)"
          ></rect>
        </svg>
      </div>
    </div>
  );
};

export default InteractiveMask;
