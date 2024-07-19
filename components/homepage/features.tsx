import localFont from "next/font/local";
import { FeatureCard } from "./feature-card";
import { HandCoins } from "lucide-react";
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
          title="CyberScore Audit"
          description="CRIC conducts affordable cybersecurity audits, evaluating your company's data privacy practices, performing penetration testing, and assessing employee cybersecurity knowledge. The resulting score, based on these assessments, will be displayed on your website as social proof of your cybersecurity standards."
          icon={"HeartHandshake"}
          buttonText={"Get My Free Check"}
          buttonVariant="default"
          size={2}
        />

        <FeatureCard
          title="Cyber Insight"
          description="An AI powered tool, revealing all the information about someone. Uncover hidden details about anyone to secure your life."
          icon={"ScanEye"}
          buttonText={"Track Your Online Exposure"}
        />
        <FeatureCard
          title="CRIC Academy"
          description="Our OSINT training programs are designed to elevate your cyber skills and precious tools to the next level, from beginner to advanced."
          icon={"BookOpen"}
        />
      </div>
    </>
  );
}
