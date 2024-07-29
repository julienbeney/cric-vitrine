import { Title } from "@/components/homepage/title";
import Footer from "@/components/homepage/footer";
import { Paytone_One } from "next/font/google";
import Pricing from "@/components/homepage/pricing";

const payton = Paytone_One({ weight: "400", subsets: ["latin"] });

export default function PricingPage() {
  return (
      <>
        <Title title={"Pricing offer"} />
        <p className="text-muted-foreground text-sm md:text-base my-6"></p>
        <Pricing />
      </>
  );
}
