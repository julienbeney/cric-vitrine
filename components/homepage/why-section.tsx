import { Button } from "../ui/button";
import { Card } from "../ui/display-card";
import Icon from "../ui/icon";
import BuyButton from "./buy-button";
import { Title } from "./title";
import { HandCoins, HelpCircle, HelpingHand, Home } from "lucide-react";
export default function WhySection() {
  return (
    <Card className="my-4 p-4 w-full bg-gradient-to-bl from-transparent to-[hsl(var(--muted))]">
      <div className="flex flex-col items-center justify-center gap-4">
        <Button variant={"outline"} size={"icon"} className="rounded-full m-2">
          <Icon
            name={"Rocket"}
            strokeWidth={"1.8"}
            size={"24"}
            color={"var(--foreground)"}
          />
        </Button>
        <Title title={"Why working with us ?"} />
        <div className="flex flex-row flex-wrap md:flex-nowrap py-4 text-left gap-6">
          <div className="w-1/3">
            <p className="flex flex-row align-middle items-center">
              Confidentiality <Home size={"18"} className="ml-2" />
            </p>
            <p className="text-muted-foreground text-light">
              We protect our user safeguarding your data's privacy.
            </p>
          </div>
          <div className="w-1/3">
            <p className="flex flex-row align-middle items-center">
              Integrity <HelpingHand size={"18"} className="ml-2" />
            </p>
            <p className="text-muted-foreground text-light">
              Rely on the untouchable data we provide through meticulous OSINT
              formations and audits, maintaining accuracy and reliability.
            </p>
          </div>
          <div className="w-1/3">
            <p className="flex flex-row align-middle items-center">
              Availability <HandCoins size={"18"} className="ml-2" />
            </p>
            <p className="text-muted-foreground text-light">
              Count on our services to be consistently accessible and reliable,
              ensuring you never miss critical information about company habits
              and digital footprints
            </p>
          </div>
        </div>
        <BuyButton />
      </div>
    </Card>
  );
}
