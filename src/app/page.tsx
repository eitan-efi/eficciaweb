import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { DiagnosisReveal } from "@/components/DiagnosisReveal";
import { PainPoints } from "@/components/PainPoints";
import { Outcomes } from "@/components/Outcomes";
import { Process } from "@/components/Process";
import { AboutEitan } from "@/components/AboutEitan";

import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-[100dvh] flex flex-col items-center">
        <Hero />
        <ProofStrip />
        <DiagnosisReveal />
        <PainPoints />
        <Outcomes />
        <Process />
        <AboutEitan />

        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}
