import Link from "next/link";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

export default function FleetPage() {
  return (
    <>
      <Navbar />

      <section className="bg-[#071a2f] pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#D4A017] uppercase tracking-[4px] font-semibold">
            Our Fleet
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-4">
            Modern Equipment
            <br />
            Ready For Every Project
          </h1>

          <p className="text-white/80 max-w-3xl mx-auto mt-6 text-lg">
            Explore our extensive fleet of heavy equipment, machinery, transport
            vehicles, and lifting solutions available across the UAE.
          </p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#D4A017] uppercase tracking-[4px] font-semibold">
              Equipment Gallery
            </p>

            <h2 className="text-5xl font-bold text-[#071a2f] mt-4">
              Our Fleet Collection
            </h2>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Browse our modern fleet of heavy machinery available for projects
              across the UAE.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img
                src="/images/fleet/fleet1.jpg"
                alt="Fleet"
                className="w-full h-80 object-cover transition duration-500 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img
                src="/images/fleet/fleet2.jpg"
                alt="Fleet"
                className="w-full h-80 object-cover transition duration-500 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img
                src="/images/fleet/fleet3.jpg"
                alt="Fleet"
                className="w-full h-80 object-cover transition duration-500 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img
                src="/images/fleet/fleet4.jpg"
                alt="Fleet"
                className="w-full h-80 object-cover transition duration-500 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img
                src="/images/fleet/fleet5.jpg"
                alt="Fleet"
                className="w-full h-80 object-cover transition duration-500 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img
                src="/images/fleet/fleet6.jpg"
                alt="Fleet"
                className="w-full h-80 object-cover transition duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#071a2f]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#D4A017] uppercase tracking-[4px] font-semibold">
            Fleet Statistics
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Numbers That Matter
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="bg-[#0d2744] rounded-3xl p-8 border border-white/10">
              <h3 className="text-5xl font-bold text-[#D4A017]">100+</h3>
              <p className="text-white mt-3">Heavy Equipment</p>
            </div>

            <div className="bg-[#0d2744] rounded-3xl p-8 border border-white/10">
              <h3 className="text-5xl font-bold text-[#D4A017]">24/7</h3>
              <p className="text-white mt-3">Customer Support</p>
            </div>

            <div className="bg-[#0d2744] rounded-3xl p-8 border border-white/10">
              <h3 className="text-5xl font-bold text-[#D4A017]">4+</h3>
              <p className="text-white mt-3">Group Companies</p>
            </div>

            <div className="bg-[#0d2744] rounded-3xl p-8 border border-white/10">
              <h3 className="text-5xl font-bold text-[#D4A017]">UAE</h3>
              <p className="text-white mt-3">Nationwide Coverage</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#D4A017] uppercase tracking-[4px] font-semibold">
            Get Started
          </p>

          <h2 className="text-5xl font-bold text-[#071a2f] mt-4">
            Need Equipment For Your Next Project?
          </h2>

          <p className="text-gray-600 mt-6 text-lg">
            Contact Usman Group today for reliable heavy equipment rental
            solutions across the UAE.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="/contact"
              className="bg-[#D4A017] text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Get Free Quote
            </a>

            <a
              href="tel:+971501918874"
              className="border-2 border-[#071a2f] text-[#071a2f] px-8 py-4 rounded-xl font-semibold hover:bg-[#071a2f] hover:text-white transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
