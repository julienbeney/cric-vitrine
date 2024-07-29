import Link from "next/link";
import localFont from "next/font/local";
import { Righteous } from "next/font/google";
const righteous = Righteous({ weight: "400", subsets: ["latin"] });

export default function FooterSimple() {
  return (
    <div className="flex flex-col w-full gap-4 items-center justify-center mt-16 pb-8">
      <Link href="/">
        <h1
          className={
            righteous.className +
            " text-muted-foreground text-2xl subpixel-antialiased hover:text-primary font-semibold"
          }
        >
          CRIC
        </h1>
      </Link>
      <div className="flex flex-row w-full justify-center gap-4 text-muted-foreground text-xs">
        <Link className="underline underline-offset-3" href="">
          Terms of use
        </Link>
        <p>|</p>
        <Link className="underline underline-offset-3" href="">
          Privacy policy
        </Link>
      </div>
    </div>
  );
}
