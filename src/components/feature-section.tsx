import Image from "next/image";

export function FeatureSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you've ever wanted to know about your flight—and more.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Flighty keeps you informed by tracking more information about your flight than any other app—like the #1 and #2 biggest causes of delays. Know exactly what's happening and how it affects your flight, so you can finally just enjoy your trip.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-24">
          <div>
            <h3 className="text-2xl font-bold mb-4">See why you're delayed. Finally!</h3>
            <p className="text-gray-600 mb-6">
              Airlines often keep delay information under wraps until the last minute. Flighty doesn't. We track the inbound aircraft 25 hours before your flight, so we can predict a new departure time long before the airline notifies you.
            </p>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h4 className="font-semibold">Delay predictions. Long before airlines admit it.</h4>
              <p className="text-gray-500 text-sm mt-1">
                Late planes are the #1 cause of delays. Flighty uses machine learning to predict delays due to late arriving aircraft — up to 6 hours before the airline says anything.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://web-assets.same.dev/704386241/2484205066.png"
              alt="Delay predictions screenshot"
              width={300}
              height={550}
              className="mx-auto"
            />
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full transform scale-75 -z-10"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-24">
          <div className="order-2 md:order-1 relative">
            <Image
              src="https://web-assets.same.dev/1904130977/3438109014.png"
              alt="Air Traffic Control"
              width={300}
              height={550}
              className="mx-auto"
            />
            <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full transform scale-75 -z-10"></div>
          </div>
          <div className="order-1 md:order-2">
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 mb-6">
              <h4 className="font-semibold">Direct from the tower.</h4>
              <p className="text-gray-500 text-sm mt-1">
                Air Traffic Control mandates are the #2 cause of delays. Flighty sifts through these and tells you what might impact your flight: like ground stops, weather, or airport issues.
              </p>
            </div>
            <div className="bg-orange-50 rounded-xl p-5 border border-orange-200">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                <h4 className="font-semibold text-orange-800">JFK Arrivals</h4>
              </div>
              <h5 className="font-bold text-orange-900 mb-2">Flights to JFK Grounded</h5>
              <p className="text-orange-700 text-sm">
                Some flights to JFK (but not this flight currently) are grounded for the next 24 min due to thunderstorms. Probably of extension is 30-60%.
              </p>
              <div className="flex justify-between mt-3">
                <span className="text-xs font-medium bg-orange-200 text-orange-800 px-2 py-1 rounded">Thunderstorms</span>
                <span className="text-xs text-orange-600">Advisory from Air Traffic Control</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">First to know. First to go.</h3>
            <p className="text-gray-600 mb-6">
              Hear about delays and gate changes before anyone else, even the pilot. Flighty's alerts are instant, clear, and unfiltered, giving you the earliest heads-up to rebook quickly and avoid long lines.
            </p>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h4 className="font-semibold">Putting the Pro in approachable.</h4>
              <p className="text-gray-500 text-sm mt-1">
                Powerful, pilot-grade data that you can actually understand. Get gate info, departure times, baggage belts, and booking codes—all at a glance. Never stop and stare at a flight board again.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://web-assets.same.dev/1161277595/1885388443.png"
              alt="Flight alerts"
              width={300}
              height={550}
              className="mx-auto"
            />
            <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full transform scale-75 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
