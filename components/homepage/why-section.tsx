import { Button } from "../ui/button";
import { Card } from "../ui/display-card";
import Icon from "../ui/icon";
import BuyButton from "./buy-button";
import { Title } from "./title";
import { HandCoins, HelpCircle, HelpingHand, Home } from "lucide-react";
export default function WhySection() {
  return (
    <Card className="my-6 p-4 w-full bg-gradient-to-bl from-transparent to-[hsl(var(--muted))]">
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
        <div className="grid grid-cols-2 lg:grid-cols-3 py-4 text-left gap-6">
          <div className="">
            <p className="flex flex-row align-middle items-center">
              Confidentiality <Home size={"18"} className="ml-2" />
            </p>
            <p className="text-muted-foreground text-light">
              By maintaining confidentiality, organizations safeguard their
              intellectual property, customer data, and competitive advantage,
              fostering trust and compliance with regulatory standards.
            </p>
          </div>
          <div className="">
            <p className="flex flex-row align-middle items-center">
              Integrity <HelpingHand size={"18"} className="ml-2" />
            </p>
            <p className="text-muted-foreground text-light">
              Rely on the untouchable data we provide through meticulous OSINT
              formations and audits, maintaining accuracy and reliability.
            </p>
          </div>
          <div className="">
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
      </div>
    </Card>
  );
}
