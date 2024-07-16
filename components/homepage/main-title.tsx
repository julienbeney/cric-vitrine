'use client'
import localFont from "next/font/local";

const inter = localFont({ src: "../../fonts/CalSans.woff2" });
import { FlipWords } from "./flip-words";
export const MainTitle = () => {
  return (
      <h1 className={inter.className+" mt-2 pb-6 justify-center text-4xl md:text-7xl bg-gradient-to-tl from-0% from-[hsl(var(--muted))] to-40% to-[hsl(var(--foreground))] bg-clip-text text-transparent"}>
        Cyber Research And Intelligence Center
      </h1>
  );
};
// 