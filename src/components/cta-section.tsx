import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 bg-[#0e0b17] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Have a nice flight!
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          We'll handle the details. You just enjoy your trip. Available on iPhone, iPad, Mac and Apple Watch. Download for free.
        </p>

        <Link href="https://apps.apple.com/app/apple-store/id1358823008" className="inline-block">
          <Button className="bg-white text-[#0e0b17] hover:bg-white/90 font-bold rounded-full px-8 py-6 text-lg">
            Give Flighty a try
          </Button>
        </Link>

        <div className="mt-16 grid grid-cols-4 gap-4 max-w-md mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-3">
              <Image
                src="https://web-assets.same.dev/892902317/2559402901.png"
                alt="iPhone"
                width={30}
                height={30}
              />
            </div>
            <span className="text-xs">iPhone</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-3">
              <Image
                src="https://web-assets.same.dev/3764492526/1591523722.png"
                alt="iPad"
                width={30}
                height={30}
              />
            </div>
            <span className="text-xs">iPad</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-3">
              <Image
                src="https://web-assets.same.dev/817376040/4176530802.png"
                alt="Mac"
                width={30}
                height={30}
              />
            </div>
            <span className="text-xs">Mac</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-3">
              <span className="text-2xl">⌚</span>
            </div>
            <span className="text-xs">Watch</span>
          </div>
        </div>
      </div>
    </section>
  );
}
