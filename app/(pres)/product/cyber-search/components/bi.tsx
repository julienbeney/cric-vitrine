import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/display-card";
import Icon from "@/components/ui/icon";
import BuyButton from "@/components/homepage/buy-button";
import { Title } from "@/components/homepage/title";
import {
  Bug,
  Building2,
  Grid2X2,
  HandCoins,
  HelpCircle,
  HelpingHand,
  Home,
  ServerCrash,
} from "lucide-react";
export default function BusinessIntelligeance() {
  return (
    <Card className="my-4 p-4 w-full bg-gradient-to-bl from-transparent to-[hsl(var(--muted))]">
      <div className="flex flex-col items-center justify-center gap-4">
        <Button variant={"outline"} size={"icon"} className="rounded-full m-2">
          <Icon
            name={"Briefcase"}
            strokeWidth={"1.8"}
            size={"24"}
            color={"var(--foreground)"}
          />
        </Button>
        <Title title={"Business Intelligeance for Enterprise!"} />
        <BuyButton title={"Contact us"} url="/book-a-call" />
        <div className="grid grid-cols-2 lg:grid-cols-3 py-4 text-left gap-6">
          <div className="">
            <p className="flex flex-row align-middle items-center">
              Fraud Prevention <Building2 size={"18"} className="ml-2" />
            </p>
            <p className="text-muted-foreground text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet, vitae volutpat purus pharetra non.
            </p>
          </div>
          <div className="">
            <p className="flex flex-row align-middle items-center">
            Lorem Ipsum <Bug size={"18"} className="ml-2" />
            </p>
            <p className="text-muted-foreground text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet, vitae volutpat purus pharetra non.
            </p>
          </div>
          <div className="">
            <p className="flex flex-row align-middle items-center">
            Lorem Ipsum <Grid2X2 size={"18"} className="ml-2" />
            </p>
            <p className="text-muted-foreground text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet, vitae volutpat purus pharetra non.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
