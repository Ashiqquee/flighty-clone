import Image from "next/image";

export function SharingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Share your flying with friends and family.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Flighty Friends lets you instantly share your flying with your loved ones, so they can monitor your trip status and get notified when you land. Add your loved ones just once, and you'll never have to manually share flight details again.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-16">
          <div className="md:w-1/3">
            <div className="text-center md:text-left mb-6">
              <h3 className="text-xl font-bold mb-2">Never hear "can you send me your flight info?" ever again.</h3>
              <p className="text-gray-600">
                Choose who you want to share your flying with. They can then customize the notifications they get about your trip (like when you've landed, whether there are delays, and more).
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 mb-4 max-w-sm mx-auto md:mr-0 md:ml-0">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-500">✈️</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Mom is flying today</p>
                  <p className="text-sm text-gray-500">AA101 to New York departs in 4h</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-4 mb-4 max-w-sm mx-auto md:mr-0 md:ml-0">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-500">✈️</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Mom took off for New York</p>
                  <p className="text-sm text-gray-500">Arrives in 4h 30m at 8:34pm local time</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 max-w-sm mx-auto md:mr-0 md:ml-0">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-500">🛬</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Mom landed in New York</p>
                  <p className="text-sm text-gray-500">6:32am (22m early) and 88°</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/3">
            <Image
              src="https://web-assets.same.dev/1904130977/3438109014.png"
              alt="Flighty Sharing Features"
              width={300}
              height={600}
              className="mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
