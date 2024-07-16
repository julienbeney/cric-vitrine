import localFont from "next/font/local";

const inter = localFont({ src: "../../fonts/CalSans.woff2" });
export const Title = (props: any) => {
  return (
      <p className={inter.className+" justify-center text-2xl  bg-gradient-to-tl from-0% from-[hsl(var(--muted-foreground))] to-40% to-[hsl(var(--foreground))] bg-clip-text text-transparent"}>
        Planifi
      </p>
  );
};