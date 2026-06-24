import Navbar from "../../src/components/layout/Navbar";
export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <section className="py-24 bg-[#071a2f] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#D4A017] uppercase tracking-[4px] font-semibold">
            About Us
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Building Trust Through
            <br />
            Heavy Equipment Solutions
          </h1>

          <p className="text-gray-300 mt-8 max-w-3xl text-lg">
            Usman Group is a leading heavy equipment rental and transport
            company in the UAE, providing reliable machinery, logistics
            solutions, and professional support for construction and
            infrastructure projects.
          </p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#D4A017] uppercase tracking-[4px] font-semibold">
              Our Story
            </p>

            <h2 className="text-5xl font-bold text-[#071a2f] mt-4">
              Delivering Excellence
              <br />
              Across The UAE
            </h2>

            <p className="text-gray-600 mt-8 text-lg leading-relaxed">
              Usman Group has built a strong reputation in the UAE by providing
              reliable heavy equipment rental, transportation, and logistics
              solutions. Our commitment to quality service and customer
              satisfaction has made us a trusted partner for construction and
              infrastructure projects.
            </p>

            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              With modern machinery, experienced operators, and a professional
              support team, we help businesses complete projects safely,
              efficiently, and on schedule.
            </p>
          </div>

          <div>
            <img
              src="/hero/slide1.jpg"
              alt="Usman Group"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#D4A017] uppercase tracking-[4px] font-semibold">
              Our Mission & Vision
            </p>

            <h2 className="text-5xl font-bold text-[#071a2f] mt-4">
              Driving Success Through Reliable Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-10 shadow-lg">
              <h3 className="text-3xl font-bold text-[#071a2f] mb-6">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-relaxed">
                To provide dependable heavy equipment rental, transportation,
                and logistics solutions that help clients complete projects
                safely, efficiently, and on time.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg">
              <h3 className="text-3xl font-bold text-[#071a2f] mb-6">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-relaxed">
                To become the leading heavy equipment and logistics partner in
                the UAE by continuously delivering excellence, innovation, and
                customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#071a2f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#D4A017] uppercase tracking-[4px] font-semibold">
              Company Statistics
            </p>

            <h2 className="text-5xl font-bold text-white mt-4">
              Numbers That Speak
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#0d2745] rounded-3xl p-8 text-center border border-white/10">
              <h3 className="text-5xl font-bold text-[#D4A017]">100+</h3>
              <p className="text-white mt-4">Equipment Fleet</p>
            </div>

            <div className="bg-[#0d2745] rounded-3xl p-8 text-center border border-white/10">
              <h3 className="text-5xl font-bold text-[#D4A017]">24/7</h3>
              <p className="text-white mt-4">Customer Support</p>
            </div>

            <div className="bg-[#0d2745] rounded-3xl p-8 text-center border border-white/10">
              <h3 className="text-5xl font-bold text-[#D4A017]">4+</h3>
              <p className="text-white mt-4">Group Companies</p>
            </div>

            <div className="bg-[#0d2745] rounded-3xl p-8 text-center border border-white/10">
              <h3 className="text-5xl font-bold text-[#D4A017]">UAE</h3>
              <p className="text-white mt-4">Nationwide Coverage</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#D4A017] uppercase tracking-[4px] font-semibold">
              Why Choose Us
            </p>

            <h2 className="text-5xl font-bold text-[#071a2f] mt-4">
              Trusted By Businesses Across UAE
            </h2>

            <p className="max-w-3xl mx-auto text-gray-600 mt-6">
              We combine modern equipment, experienced operators, and reliable
              logistics services to deliver exceptional project support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl shadow-lg border">
              <h3 className="text-2xl font-bold text-[#071a2f] mb-4">
                Modern Fleet
              </h3>
              <p className="text-gray-600">
                Well-maintained heavy equipment ready for projects of all sizes.
              </p>
            </div>

            <div className="p-8 rounded-3xl shadow-lg border">
              <h3 className="text-2xl font-bold text-[#071a2f] mb-4">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Dedicated customer support available whenever you need
                assistance.
              </p>
            </div>

            <div className="p-8 rounded-3xl shadow-lg border">
              <h3 className="text-2xl font-bold text-[#071a2f] mb-4">
                UAE Coverage
              </h3>
              <p className="text-gray-600">
                Equipment rental and logistics solutions available across UAE.
              </p>
            </div>

            <div className="p-8 rounded-3xl shadow-lg border">
              <h3 className="text-2xl font-bold text-[#071a2f] mb-4">
                Certified Operators
              </h3>
              <p className="text-gray-600">
                Experienced professionals ensuring safety and efficiency.
              </p>
            </div>

            <div className="p-8 rounded-3xl shadow-lg border">
              <h3 className="text-2xl font-bold text-[#071a2f] mb-4">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick equipment dispatch to keep projects on schedule.
              </p>
            </div>

            <div className="p-8 rounded-3xl shadow-lg border">
              <h3 className="text-2xl font-bold text-[#071a2f] mb-4">
                Competitive Rates
              </h3>
              <p className="text-gray-600">
                Cost-effective rental solutions without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#071a2f]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#D4A017] uppercase tracking-[4px] font-semibold">
            Get Started
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Ready To Work With Us?
          </h2>

          <p className="text-white/80 mt-6 text-lg">
            Contact Usman Group today for heavy equipment rental,
            transportation, and logistics solutions across the UAE.
          </p>

          <div className="flex justify-center gap-4 mt-10">
            <button className="bg-[#D4A017] text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
              Get Free Quote
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
