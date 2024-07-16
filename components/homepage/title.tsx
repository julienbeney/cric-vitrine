import localFont from "next/font/local";

const inter = localFont({ src: "../../fonts/CalSans.woff2" });
export const Title = (props: any) => {
  return (
      <h1 className={inter.className+" justify-center pb-2 text-3xl md:text-4xl bg-gradient-to-tl from-0% from-[hsl(var(--muted))] to-40% to-[hsl(var(--foreground))] bg-clip-text text-transparent"}>
        {props.title}
      </h1>
  );
};