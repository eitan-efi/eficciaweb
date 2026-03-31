import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Automations } from "@/components/Automations";
import { Consulting } from "@/components/Consulting";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-[100dvh] flex flex-col items-center">
        <Hero />
        <Automations />
        <Consulting />
      </main>
    </>
  );
}
