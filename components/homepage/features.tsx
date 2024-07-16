import localFont from "next/font/local";
import { FeatureCard } from "./feature-card";
const inter = localFont({ src: "../../fonts/CalSans.woff2" });

export default function Features() {
  return (
    <>
      <p
        className={
          inter.className +
          " mt-6 mb-10 justify-center text-2xl md:text-3xl bg-gradient-to-tl from-0% from-[hsl(var(--muted))] to-40% to-[hsl(var(--foreground))] bg-clip-text text-transparent"
        }
      >
        Services offer
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <FeatureCard
          title="Cybersecurity Solutions"
          description="CRIC specializes in comprehensive cybersecurity services, offering thorough vulnerability checks, ethical hacking, and proactive incident management to fortify your digital defenses."
          icon={"HandCoins"}
          size={2}
        />

        <FeatureCard
          title="Cyber-Origin Intelligence"
          description="Harness our Cyber-Origin Intelligence for a strategic edge; we analyze and track online traces and threat agents, delivering critical insights to preempt cyber threats."
          icon={"NotebookText"}
        />
        <FeatureCard
          title="Security Training And Awareness"
          description="Our security training programs are designed to elevate your team's cyber defense skills and awareness, ensuring your data's integrity against threats."
          icon={"BarChart3"}
        />
      </div>
    </>
  );
}
