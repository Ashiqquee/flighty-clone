import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-gradient-hero text-white pt-32 pb-24 overflow-hidden relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl mx-auto leading-tight">
          Your ticket to stress-free flying
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          The only app that tells you everything about your flight. Get real-time updates, the fastest alerts and delay predictions.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Image
              src="https://web-assets.same.dev/243846788/2288871113.png"
              alt="Apple Design Award"
              width={24}
              height={24}
              className="mr-2"
            />
            <span className="text-sm font-medium">Apple Design Award</span>
            <span className="ml-2 text-xs text-white/60">Winner 2023</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Image
              src="https://web-assets.same.dev/226990655/1663159426.png"
              alt="App of the Year"
              width={24}
              height={24}
              className="mr-2"
            />
            <span className="text-sm font-medium">App of the Year</span>
            <span className="ml-2 text-xs text-white/60">Finalist 2023</span>
          </div>
        </div>

        <Link href="https://apps.apple.com/app/apple-store/id1358823008" className="inline-block">
          <Button className="bg-white text-[#0e0b17] hover:bg-white/90 font-bold rounded-full px-8 py-6 text-lg">
            Give Flighty a try
          </Button>
        </Link>
      </div>

      <div className="mt-16 flex justify-center">
        <div className="relative glow-effect">
          <div className="relative z-10 transform rotate-[-5deg]">
            <Image
              src="https://web-assets.same.dev/704386241/2484205066.png"
              alt="Flighty App Screenshot"
              width={320}
              height={650}
              className="rounded-[32px] border-[8px] border-black shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
