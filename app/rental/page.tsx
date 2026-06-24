import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

export default function RentalPage() {
  return (
    <>
      <Navbar />

      <section className="bg-[#071a2f] pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#D4A017] uppercase tracking-[4px] font-semibold">
            Equipment Rental
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-4">
            Heavy Equipment
            <br />
            Rental Solutions
          </h1>

          <p className="text-white/80 max-w-3xl mx-auto mt-6 text-lg">
            Reliable heavy equipment rental services across the UAE. From
            excavators to cranes, we provide modern machinery for construction,
            industrial, and infrastructure projects.
          </p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#D4A017] uppercase tracking-[4px] font-semibold">
            Our Equipment
          </p>

          <h2 className="text-5xl font-bold text-[#071a2f] mt-4">
            Rental Categories
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6">
            Explore our wide range of heavy equipment available for rental
            across the UAE.
          </p>
        </div>
      </section>
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Excavator */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <img
                src="/categories/excavator.jpg"
                alt="Excavator"
                className="w-full h-64 object-cover transition duration-500 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#071a2f]">
                  Excavators
                </h3>
                <p className="text-gray-600 mt-3">
                  Heavy-duty excavators for construction and earthmoving
                  projects.
                </p>
              </div>
            </div>

            {/* Wheel Loader */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <img
                src="/categories/wheel-loader.jpg"
                alt="Wheel Loader"
                className="w-full h-64 object-cover transition duration-500 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#071a2f]">
                  Wheel Loaders
                </h3>
                <p className="text-gray-600 mt-3">
                  Powerful loaders for material handling and site operations.
                </p>
              </div>
            </div>

            {/* Backhoe Loader */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <img
                src="/categories/backhoe-loader.jpg"
                alt="Backhoe Loader"
                className="w-full h-64 object-cover transition duration-500 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#071a2f]">
                  Backhoe Loaders
                </h3>
                <p className="text-gray-600 mt-3">
                  Versatile machines for digging, loading, and utility work.
                </p>
              </div>
            </div>

            {/* Crane */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <img
                src="/categories/crane.jpg"
                alt="Crane"
                className="w-full h-64 object-cover transition duration-500 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#071a2f]">Cranes</h3>
                <p className="text-gray-600 mt-3">
                  Mobile and heavy-duty cranes for lifting operations.
                </p>
              </div>
            </div>

            {/* Forklift */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <img
                src="/categories/forklift.jpg"
                alt="Forklift"
                className="w-full h-64 object-cover transition duration-500 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#071a2f]">Forklifts</h3>
                <p className="text-gray-600 mt-3">
                  Efficient material handling equipment for warehouses and
                  sites.
                </p>
              </div>
            </div>

            {/* Low Bed Trailer */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <img
                src="/categories/lowbed-trailer.jpg"
                alt="Low Bed Trailer"
                className="w-full h-64 object-cover transition duration-500 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#071a2f]">
                  Low Bed Trailers
                </h3>
                <p className="text-gray-600 mt-3">
                  Safe transportation solutions for heavy machinery and
                  equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#071a2f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#D4A017] uppercase tracking-[4px] font-semibold">
              Why Rent From Us
            </p>

            <h2 className="text-5xl font-bold text-white mt-4">
              Trusted Equipment Partner
            </h2>

            <p className="text-white/70 max-w-3xl mx-auto mt-6">
              We provide reliable machinery, professional operators, and
              exceptional customer support for projects across the UAE.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-[#D4A017] text-5xl font-bold">100+</h3>
              <p className="text-white text-xl font-semibold mt-4">
                Equipment Fleet
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-[#D4A017] text-5xl font-bold">24/7</h3>
              <p className="text-white text-xl font-semibold mt-4">
                Customer Support
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-[#D4A017] text-5xl font-bold">4+</h3>
              <p className="text-white text-xl font-semibold mt-4">
                Group Companies
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-[#D4A017] text-5xl font-bold">UAE</h3>
              <p className="text-white text-xl font-semibold mt-4">
                Nationwide Coverage
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#D4A017] uppercase tracking-[4px] font-semibold">
            Get Started
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-[#071a2f] mt-4">
            Need Equipment For Your Next Project?
          </h2>

          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
            Contact Usman Group today for reliable heavy equipment rental,
            transportation, and logistics solutions across the UAE.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
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
