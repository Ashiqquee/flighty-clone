import Image from "next/image";

type TestimonialProps = {
  name: string;
  date: string;
  title: string;
  content: string;
  isTwitter?: boolean;
  isAppStore?: boolean;
};

function Testimonial({ name, date, title, content, isTwitter, isAppStore }: TestimonialProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center overflow-hidden">
          {name.charAt(0)}
        </div>
        <div>
          <div className="flex items-center">
            <h4 className="font-bold">{name}</h4>
            {isTwitter && (
              <svg className="w-4 h-4 ml-2 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            )}
            {isAppStore && (
              <svg className="w-4 h-4 ml-2 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.69 3.559-1.701z" />
              </svg>
            )}
          </div>
          <p className="text-gray-500 text-sm">{date}</p>
        </div>
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{content}</p>
    </div>
  );
}

export function TestimonialSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            From first-time flyers to million-milers, people love Flighty.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Testimonial
            name="David Pogue"
            date="@Pogue"
            title="Ever since FlightTrack Pro died..."
            content="I've searched for the ultimate flight-tracking app. Now I've found it: @Flighty. Beautiful, clear, useful info (even tracks the INBOUND plane for your flight). Often tells me about delays before the airline does!"
            isTwitter
          />

          <Testimonial
            name="BigPlayaz"
            date="Sep 7, 2024"
            title="Great travel app!"
            content="If you fly at all, Flighty is amazing. It really does get updates on delays faster than what you'll get from the airlines. The app itself is so clearly built with care, attention to detail, and skill. All the extra info on your flight and your all time passport are great as well."
            isAppStore
          />

          <Testimonial
            name="Brian Kelly"
            date="8h"
            title="The Best By Far"
            content="The best flight tracking app I have ever experienced in 15 years and 650k miles of business travel. Extremely stable, very pretty, and easy to use. Best of all, the app is super fast with gate changes and delay notifications. Flighty alerts me before the gate agents even know of a change. I love it so much that I've paid for my team to get subscriptions."
            isTwitter
          />

          <Testimonial
            name="Parker Ortolani"
            date="@ParkerOrtolani"
            title="@Flighty is one of the most well thought out..."
            content="@Flighty is one of the most well thought out and well executed apps I've ever seen."
            isTwitter
          />

          <Testimonial
            name="a.czarnik"
            date="Aug 20, 2024"
            title="Favorite app on my phone"
            content="It's like the old Apple motto: It just works. It does exactly what it needs to, nothing more, and it does it all flawlessly. It's genuinely my favorite app on my phone. Literal perfection. No notes. Now, if only every other app on my phone worked as well as Flighty."
            isAppStore
          />

        
        </div>

        <div className="mt-12 text-center">
          {/* <Image
            src="https://web-assets.same.dev/2921278409/2085136253.jpeg"
            alt="Happy Flighty Users"
            width={800}
            height={400}
            className="mx-auto rounded-xl"
          /> */}
          <div className="mt-3 flex items-center justify-center font-bold">
            <span className="text-blue-600 text-2xl mr-2">+4 million</span>
            <a href="#" className="text-blue-600 hover:underline text-sm">View more</a>
          </div>
        </div>
      </div>
    </section>
  );
}
