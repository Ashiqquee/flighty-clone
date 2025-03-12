import Image from "next/image";

const features = [
  {
    title: "Everything you've ever wanted to know about your flight—and more.",
    description: "Flighty keeps you informed by tracking more information about your flight than any other app—like the #1 and #2 biggest causes of delays. Know exactly what's happening and how it affects your flight, so you can finally just enjoy your trip.",
    imageUrl: "https://web-assets.same.dev/1904130977/3438109014.png",
    alt: "Flighty App Features"
  },
  {
    title: "See why you're delayed. Finally!",
    description: "Airlines often keep delay information under wraps until the last minute. Flighty doesn't. We track the inbound aircraft 25 hours before your flight, so we can predict a new departure time long before the airline notifies you.",
    imageUrl: "https://web-assets.same.dev/704386241/2484205066.png",
    alt: "Flighty Delay Information"
  },
  {
    title: "First to know. First to go.",
    description: "Hear about delays and gate changes before anyone else, even the pilot. Flighty's alerts are instant, clear, and unfiltered, giving you the earliest heads-up to rebook quickly and avoid long lines.",
    imageUrl: "https://web-assets.same.dev/1161277595/1885388443.png",
    alt: "Flighty App Notifications"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center mb-20 last:mb-0 gap-8`}
          >
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
                {feature.title}
              </h2>
              <p className="text-lg text-gray-700 max-w-xl mx-auto md:mx-0">
                {feature.description}
              </p>

              {index === 1 && (
                <div className="mt-6 bg-gray-100 rounded-xl p-4 max-w-sm mx-auto md:mx-0">
                  <h4 className="font-medium text-gray-800 mb-2">Delay predictions. Long before airlines admit it.</h4>
                  <p className="text-gray-600 text-sm">
                    Late planes are the #1 cause of delays. Flighty uses machine learning to predict delays due to late arriving aircraft — up to 6 hours before the airline says anything.
                  </p>
                </div>
              )}
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <Image
                  src={feature.imageUrl}
                  alt={feature.alt}
                  width={400}
                  height={800}
                  className="relative z-10"
                />
                <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full transform scale-75 -z-10"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
