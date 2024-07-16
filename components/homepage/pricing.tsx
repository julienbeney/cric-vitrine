import { PencilRuler, User, Sheet } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/display-card";
import { FeatureCard } from "./feature-card";
import { Title } from "./title";
import {} from "../ui/sheet";

export default function Component() {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-4 my-16">
        <Card className="w-full flex flex-col justify-between bg-gradient-to-br from-[hsl(var(--muted))] to-transparent">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl font-bold">Public Search</CardTitle>
            <CardDescription className="text-muted-foreground">
              For anyone who wan't gather related information about a specific
              person
            </CardDescription>
          </CardHeader>
          <div className="h-full"></div>

          <CardContent className="space-y-4 justify-end">
            <div className="flex items-baseline justify-center space-x-2">
              <span className="text-4xl font-bold tracking-tight">100 CHF</span>
              <span className="text-muted-foreground">/mois</span>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <User className="mr-2 h-4 w-4 " />
              </li>
              <li className="flex items-centebn r">
                <PencilRuler className="mr-2 h-4 w-4 " />
              </li>
              <li className="flex items-center">
                <Sheet className="mr-2 h-4 w-4 " />
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant={"outline"}>
              Get started
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full flex flex-col justify-between bg-gradient-to-tr from-[hsl(var(--muted))] to-transparent">
          <CardHeader className="space-y-2 ">
            <CardTitle className="text-2xl font-bold">Entreprise</CardTitle>
            <CardDescription className="text-muted-foreground">
              Conçu pour les entreprises en pleine croissance
            </CardDescription>
          </CardHeader>
          <div className="h-full"></div>
          <CardContent className="space-y-4 justify-end">
            <div className="flex items-baseline justify-center space-x-2">
              <span className="text-4xl font-bold tracking-tight">119 CHF</span>
              <span className="text-muted-foreground">/mois</span>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <User className="mr-2 h-4 w-4 " />
              </li>
              <li className="flex items-centebn r">
                <PencilRuler className="mr-2 h-4 w-4 " />
              </li>
              <li className="flex items-center">
                <Sheet className="mr-2 h-4 w-4 " />
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant={"default"}>
              À venir
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full flex flex-col justify-between bg-gradient-to-bl from-[hsl(var(--muted))] to-transparent">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl font-bold">Custom Offer</CardTitle>
            <CardDescription className="text-muted-foreground">
              Offering services tailored to your needs
            </CardDescription>
          </CardHeader>
          <div className="h-full"></div>
          <CardContent className="space-y-4">
            <div className="flex items-baseline justify-center space-x-2">
              <span className="text-4xl font-bold tracking-tight">???</span>
              <span className="text-muted-foreground">/mois</span>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <User className="mr-2 h-4 w-4 " />
              </li>
              <li className="flex items-centebn r">
                <PencilRuler className="mr-2 h-4 w-4 " />
              </li>
              <li className="flex items-center">
                <Sheet className="mr-2 h-4 w-4 " />
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant={"outline"}>
              Nous contacter
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
