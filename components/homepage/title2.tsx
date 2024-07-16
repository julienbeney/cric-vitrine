import localFont from "next/font/local";

const inter = localFont({ src: "../../fonts/CalSans.woff2" });
export const Title2 = (props: any) => {
  return (
      <h1 className={inter.className+" justify-center text-2xl md:text-3xl bg-gradient-to-tl from-0% from-[hsl(var(--muted))] to-40% to-[hsl(var(--foreground))] bg-clip-text text-transparent"}>
        {props.title}
      </h1>
  );
};