import { Button } from "../ui/button";
import { Card } from "../ui/display-card";
import Icon from "../ui/icon";
import BuyButton from "./buy-button";
import { Title } from "./title";
import {
  Bug,
  Grid2X2,
  HandCoins,
  HelpCircle,
  HelpingHand,
  Home,
  ServerCrash,
} from "lucide-react";
export default function Audits() {
  return (
    <Card className="my-4 p-4 w-full bg-gradient-to-bl from-transparent to-[hsl(var(--muted))]">
      <div className="flex flex-col items-center justify-center gap-4">
        <Button variant={"outline"} size={"icon"} className="rounded-full m-2">
          <Icon
            name={"Bug"}
            strokeWidth={"1.8"}
            size={"24"}
            color={"var(--foreground)"}
          />
        </Button>
        <Title title={"Strengthen Your Security and Compliance!"} />
        <BuyButton title={"Book your audit now"} url="/book-a-call" />
        <div className="grid grid-cols-2 lg:grid-cols-3 py-4 text-left gap-6">
          <div className="">
            <p className="flex flex-row align-middle items-center">
              Risk Mitigation <ServerCrash size={"18"} className="ml-2" />
            </p>
            <p className="text-muted-foreground text-light">
              Our comprehensive security audits identify critical
              vulnerabilities and provide actionable strategies to protect your
              assets.
            </p>
          </div>
          <div className="">
            <p className="flex flex-row align-middle items-center">
              Threat Detection & Prevention <Bug size={"18"} className="ml-2" />
            </p>
            <p className="text-muted-foreground text-light">
              Our proactive approach uncovers hidden weaknesses, ensuring your
              defenses are prepared for real-world cyber threats.
            </p>
          </div>
          <div className="">
            <p className="flex flex-row align-middle items-center">
              Data Compliance <Grid2X2 size={"18"} className="ml-2" />
            </p>
            <p className="text-muted-foreground text-light">
              Achieve and maintain compliance with our thorough data protection
              audits, tailored to your industry's regulations.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
