import { Title } from "@/components/homepage/title";
import { Title2 } from "@/components/homepage/title2";
import Footer from "@/components/homepage/footer";
import { Card } from "@/components/ui/display-card";

export default function AboutUs() {
  return (
    <>
      <Title title={"About CRIC"} />
      <p className="text-muted-foreground text-sm md:text-base my-6"></p>
      <Card className="w-full mt-6 py-4 p-3 sm:p-4 lg bg-gradient-to-br from-transparent to-[hsl(var(--muted))] justify-between text-left">
        <Title2 title={"Our story 📜"} />
        <p className="text-muted-foreground text-sm md:text-base my-6">
          We met on AI Start-up scene in 2023, after couple of months of
          collaboration. We started to work on OSINT Solutions and were driven
          by these goals: Build something performant and affordable for anyone
          🧑‍💻 A project with deep level of search powererd by all the latest hot
          technologies 🌶️
        </p>
        <Title2 title={"Our values ⚖️"} />
        <p className="text-muted-foreground text-sm md:text-lg my-6">
          We are a small team of 2 people, we are a small company. We are not a
          VC funded startup. We are not looking for investors. We want to keep
          our freedom and build a substainable business while working on
          features that provides the best value to our users. We also want to be
          transparent about our business. We are not going to hide our ups and
          downs. We are going to share our journey with you.
        </p>
        <Title2 title={"Our mission 🚀"} />
        <p className="text-muted-foreground text-sm md:text-lg mt-6">
          We want to make the web faster and more reliable for everyone,
          wherever they are in the world. To achieve this, we are building a
          platform that helps developers monitor their websites and APIs. We are
          here to fight Us-East-1 privilege. ⚔️
        </p>
      </Card>
    </>
  );
}
