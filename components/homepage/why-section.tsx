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
          <div>
            <p className="flex flex-row align-middle items-center">
              Proximité <Home size={"18"} className="ml-2" />
            </p>
            <p className="text-muted-foreground text-light">
              Nous sommes missionné de délivrer des outils d'automatisation
              administratives aux entrepreneurs modernes.
            </p>
          </div>
          <div>
            <p className="flex flex-row align-middle items-center">
              Support 24/7 <HelpingHand size={"18"} className="ml-2" />
            </p>
            <p className="text-muted-foreground text-light">
              Nous sommes missionné de délivrer des outils d'automatisation
              administratives aux entrepreneurs modernes.
            </p>
          </div>
          <div>
            <p className="flex flex-row align-middle items-center">
              Satisfait ou remboursé <HandCoins size={"18"} className="ml-2" />
            </p>
            <p className="text-muted-foreground text-light">
              Nous sommes missionné de délivrer des outils d'automatisation
              administratives aux entrepreneurs modernes.
            </p>
          </div>
        </div>
        <BuyButton />
      </div>
    </Card>
  );
}
