import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ImportSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Import your flights in seconds
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          You can magically (read: extremely quickly) make your flights appear on Flighty from your calendar, TripIt, or your email. Get up & running with Flighty faster than you can say, have a nice flight.
        </p>

        <Link href="https://apps.apple.com/app/apple-store/id1358823008" className="inline-block">
          <Button className="bg-black text-white hover:bg-black/90 font-medium rounded-full px-6 py-5 mb-10">
            Give Flighty a try
          </Button>
        </Link>

        <div className="flex justify-center">
          <Image
            src="https://web-assets.same.dev/1392925081/558943686.png"
            alt="Import flights to Flighty"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
