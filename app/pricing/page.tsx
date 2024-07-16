import { Title } from "@/components/homepage/title";
import Footer from "@/components/homepage/footer";
import { Paytone_One } from "next/font/google";
import Pricing from "@/components/homepage/pricing";

const payton = Paytone_One({ weight: "400", subsets: ["latin"] });

export default function PricingPage() {
  return (
    <div className="flex h-screen flex-col align-middle justify-between items-start text-center w-96 md:w-7/12 lg:w-128 xl:w-7/12 mx-auto z-20  ">
      <div>
        <Title title={"Pricing offer"} />
        <p className="text-muted-foreground text-sm md:text-base my-6">
        </p>
          <Pricing />
      </div>
      <Footer />
    </div>
  );
}
