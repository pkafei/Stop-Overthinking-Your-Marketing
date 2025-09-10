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

      {/* Quote Section */}
      <section className="py-16 lg:py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl lg:text-3xl font-bold text-white leading-relaxed">
            Stop second-guessing your marketing. You don't need more tools. You don't need AI. You need clarity.
          </blockquote>
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
