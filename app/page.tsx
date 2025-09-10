import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Stop Overthinking Your{' '}
                  <span className="text-primary-600">Marketing</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                  Gain clarity in your marketing strategy. In just 90 minutes.
                </p>
              </div>
              
              {/* <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed">
                  If you've been second-guessing every move, chasing "one more hack," or drowning in tools—you don't need more noise. You need focus.
                </p>
              </div> */}

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://calendly.com/torchfront/free-digital-marketing-consultation?month=2025-09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg inline-block text-left"
                >
                  Schedule Your Free 90-Minute Session
                </a>
                {/* <button className="btn-secondary text-lg">
                  Learn More
                </button> */}
              </div>
              <p className="text-gray-600 italic mt-4 text-left pl-4">
                Limited spots available- claim yours today.
              </p>
            </div>

            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dncb2k7md/image/upload/v1757467167/17_yhv8zh.png"
                  alt="Professional business owner working confidently"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent-500 text-white p-4 rounded-xl shadow-lg">
                <p className="font-semibold">Free Strategy Session</p>
                <p className="text-sm">Worth $500</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What You'll Get in This Free 90-Minute Session
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "Clarity on Tools",
                description: "Know which marketing tools actually matter for your business"
              },
              {
                icon: "💪",
                title: "Confidence",
                description: "Know if your marketing is working and what to tweak"
              },
              {
                icon: "📋",
                title: "Simple Framework",
                description: "Attract the right customers without overthinking"
              },
              {
                icon: "✨",
                title: "Freedom to Focus",
                description: "Ignore the rest and get back to running your business"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 card-hover">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 lg:py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl lg:text-3xl font-bold text-white leading-relaxed">
            Stop second-guessing your marketing. You don't need more tools. You don't need AI. You need clarity.
          </blockquote>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-96 w-80 mx-auto rounded-full overflow-hidden shadow-xl">
                <Image
                  src="https://res.cloudinary.com/dncb2k7md/image/upload/v1757469522/portia_pic_jutzkl.jpg"
                  alt="Professional headshot of Portia"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                About Me
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                I've built and scaled 6-figure businesses, worked with Fortune 500 companies, and helped local real estate investors grow million-dollar portfolios. Now I'm helping business owners like you cut through the noise and focus on what works.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary-600">10+</div>
                  <div className="text-sm text-gray-600">6-Figure Businesses</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary-600">20+</div>
                  <div className="text-sm text-gray-600">VC-Backed Startups</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary-600">$1M+</div>
                  <div className="text-sm text-gray-600">Portfolios Grown</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary-600">90min</div>
                  <div className="text-sm text-gray-600">Free Session</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="bg-white py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl lg:text-3xl font-bold text-gray-900">
            Companies We Served
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-2xl sm:grid-cols-3 sm:gap-x-12 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {/* First row - Major logos */}
            <div className="col-span-1 flex justify-center">
              <Image
                alt="RIJ"
                src="https://res.cloudinary.com/dncb2k7md/image/upload/v1757538666/RIJ-_Final_Header_Logo_w30x3g.avif"
                width={200}
                height={60}
                className="max-h-16 w-full object-contain"
              />
            </div>
            <div className="col-span-1 flex justify-center">
              <Image
                alt="Google"
                src="https://res.cloudinary.com/dncb2k7md/image/upload/v1757539335/SOM-Google_logo.svg_yrytym.webp"
                width={200}
                height={60}
                className="max-h-16 w-full object-contain"
              />
            </div>
            <div className="col-span-1 flex justify-center">
              <Image
                alt="Near"
                src="https://res.cloudinary.com/dncb2k7md/image/upload/v1757538624/SOM-near_logo-768x301_qzicbe.png"
                width={180}
                height={54}
                className="max-h-14 w-full object-contain"
              />
            </div>
            <div className="col-span-1 flex justify-center">
              <Image
                alt="DigitalOcean"
                src="https://res.cloudinary.com/dncb2k7md/image/upload/v1757538624/SOM-DO_Logo_Horizontal_Black_uxdvyv_ip8nim.png"
                width={180}
                height={54}
                className="max-h-14 w-full object-contain"
              />
            </div>
            
            {/* Second row - Supporting logos */}
            <div className="col-span-1 flex justify-center">
              <Image
                alt="Honeycomb"
                src="https://res.cloudinary.com/dncb2k7md/image/upload/v1757538624/SOM-honeycomb_hzbwmx.svg"
                width={140}
                height={42}
                className="max-h-10 w-full object-contain"
              />
            </div>
            <div className="col-span-1 flex justify-center">
              <Image
                alt="Purple Tor"
                src="https://res.cloudinary.com/dncb2k7md/image/upload/v1757538624/SOM-Purple-Tor-Logo_b7luco.png"
                width={140}
                height={42}
                className="max-h-10 w-full object-contain"
              />
            </div>
            <div className="col-span-1 flex justify-center">
              <Image
                alt="Gatsby"
                src="https://res.cloudinary.com/dncb2k7md/image/upload/v1757538624/SOM-gatsby_mwtvwp_zfphkn.png"
                width={140}
                height={42}
                className="max-h-10 w-full object-contain"
              />
            </div>
            <div className="col-span-1 flex justify-center">
              <Image
                alt="Bloom Credit"
                src="https://res.cloudinary.com/dncb2k7md/image/upload/v1757538624/SOM_bloomcredit_ffdlfs_mpxi4v.png"
                width={180}
                height={54}
                className="max-h-14 w-full object-contain"
              />
            </div>
            
            {/* Third row - Outsmartly centered */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-4 flex justify-center">
              <Image
                alt="Outsmartly"
                src="https://res.cloudinary.com/dncb2k7md/image/upload/v1757538624/SOM-outsmartly_nvhvuq_rmt3if.jpg"
                width={200}
                height={60}
                className="max-h-16 w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-white pt-24 pb-16 sm:pt-32 sm:pb-24 xl:pb-32">
        <div className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
            <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
              <div className="relative aspect-2/1 h-full after:absolute after:inset-0 after:rounded-2xl after:inset-ring after:inset-ring-white/15 md:-mx-8 xl:mx-0 xl:aspect-auto">
                <Image
                  alt="Haley testimonial"
                  src="https://res.cloudinary.com/dncb2k7md/image/upload/v1757536388/haley-SOM-testimonial_p1exs5.png"
                  fill
                  className="absolute inset-0 size-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                />
              </div>
            </div>
            <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
              <figure className="relative isolate pt-6 sm:pt-12">
                <svg
                  fill="none"
                  viewBox="0 0 162 128"
                  aria-hidden="true"
                  className="absolute top-0 left-0 -z-10 h-32 stroke-white/20"
                >
                  <path
                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                    id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                  />
                  <use x={86} href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" />
                </svg>
                <blockquote className="text-xl/8 font-semibold text-white sm:text-2xl/9">
                  <p>
                    "Portia helped me cut through the noise. She created a website that wasn't just beautiful, but clear, easy to use, and focused on what mattered most turning visitors into customers. I felt confident that my marketing was working instead of second-guessing every decision."
                  </p>
                </blockquote>
                <figcaption className="mt-8 text-base">
                  <div className="font-semibold text-white">Haley</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Imagine working on what you trained to do—without fussing over marketing.
              </h2>
              
              <p className="text-xl text-blue-100">
                Stop the second-guessing. Gain clarity today.
              </p>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dncb2k7md/image/upload/v1757466832/19_smzpld.png"
                  alt="Professional woman with braids smiling"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-2xl text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                👉 Schedule your free 90-minute "Tame Your Tools" session now.
              </h3>
              
              <a 
                href="https://calendly.com/torchfront/free-digital-marketing-consultation?month=2025-09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-block text-center"
              >
                Get My Free Consultation
              </a>
              
              <p className="text-sm text-gray-500 mt-4">
                No spam. No fluff. Just results. We'll contact you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stop Over Thinking Marketing</h3>
          <p className="text-gray-400 mb-6">
            Helping business owners cut through the noise and focus on what works.
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © 2024 Stop Over Thinking Marketing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
