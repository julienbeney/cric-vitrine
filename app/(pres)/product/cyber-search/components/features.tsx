import localFont from "next/font/local";
import { FeatureCard } from "./feature-card";
import { HandCoins } from "lucide-react";
const inter = localFont({ src: "../../../../../fonts/CalSans.woff2" });

export default function SearchFeatures() {
  return (
    <div>
      <p
        className={
          inter.className +
          " mt-6 mb-4 justify-center text-2xl md:text-3xl bg-gradient-to-tl from-0% from-[hsl(var(--muted))] to-40% to-[hsl(var(--foreground))] bg-clip-text text-transparent"
        }
      >
        Benefits
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <FeatureCard
          title="Darknet Ready"
          description="Our OSINT algortihm have total access to darket."
          icon={"Cctv"}
        />
        <FeatureCard
          title="User-Friendly"
          description="Byebye CLI. Navigate with ease through an intuitive and seamless interface, designed for both beginners and experts"
          icon={"UserCheck"}
        />
        <FeatureCard
          title="Data Collection"
          description="Access a vast range of open-source intelligence from public databases, social media, and the dark web to stay ahead of potential threats."
          icon={"Globe"}
        />
        <FeatureCard
          title="Dataleak Detection"
          description="Take care of your exposed password. Some of them are already in the wild."
          icon={"FolderOpenDot"}
        />
      </div>
    </div>
  );
}
