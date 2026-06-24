export default function About() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[#D4A017] font-semibold tracking-[3px] uppercase mb-4">
              About Us
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#071a2f] leading-tight mb-6">
              Heavy Equipment Rental &
              <br />
              Transport Solutions
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Usman Group is one of the trusted heavy equipment rental and
              transport solution providers in the UAE. We deliver reliable
              machinery, professional support, and efficient logistics services
              to construction, industrial, and infrastructure projects.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-[#D4A017] text-xl">✓</span>
                <span className="text-gray-700">Reliable Equipment</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#D4A017] text-xl">✓</span>
                <span className="text-gray-700">Professional Operators</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#D4A017] text-xl">✓</span>
                <span className="text-gray-700">UAE Wide Coverage</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#D4A017] text-xl">✓</span>
                <span className="text-gray-700">24/7 Support</span>
              </div>
            </div>

            <button className="bg-[#D4A017] text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/hero/slide1.jpg"
              alt="Heavy Equipment"
              className="w-full h-[550px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
