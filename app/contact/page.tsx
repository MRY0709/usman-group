import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="bg-[#071a2f] pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#D4A017] uppercase tracking-[4px] font-semibold">
            Contact Us
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-4">
            Get In Touch
          </h1>

          <p className="text-white/80 max-w-3xl mx-auto mt-6 text-lg">
            We are ready to help with heavy equipment rental, transportation,
            and logistics solutions across the UAE.
          </p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-[#071a2f]">Phone</h3>

              <a
                href="tel:+971501918874"
                className="block text-gray-600 hover:text-[#D4A017] transition"
              >
                +971 50 191 8874
              </a>

              <a
                href="tel:+971503545674"
                className="block text-gray-600 hover:text-[#D4A017] transition mt-2"
              >
                +971 50 354 5674
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-[#071a2f]">Email</h3>

              <a
                href="mailto:usman@transportuae.co"
                className="text-gray-600 hover:text-[#D4A017] transition break-all"
              >
                usman@transportuae.co
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-[#071a2f]">
                Location
              </h3>

              <a
                href="https://maps.google.com/?q=Al+Quoz+4+Dubai+UAE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#D4A017] transition"
              >
                Al Quoz 4, Dubai - UAE
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-[#071a2f]">
                Working Hours
              </h3>

              <a
                href="tel:+971501918874"
                className="text-gray-600 hover:text-[#D4A017] transition"
              >
                24/7 Support Available
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side Form */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h2 className="text-4xl font-bold text-[#071a2f] mb-6">
                Send Us A Message
              </h2>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border rounded-xl px-5 py-4 outline-none focus:border-[#D4A017]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border rounded-xl px-5 py-4 outline-none focus:border-[#D4A017]"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border rounded-xl px-5 py-4 outline-none focus:border-[#D4A017]"
                />

                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full border rounded-xl px-5 py-4 outline-none focus:border-[#D4A017]"
                />

                <button
                  type="submit"
                  className="bg-[#D4A017] text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Side Company Info */}
            <div className="bg-[#071a2f] text-white p-8 rounded-3xl">
              <p className="text-[#D4A017] uppercase tracking-[4px] font-semibold">
                Contact Information
              </p>

              <h2 className="text-4xl font-bold mt-4">Muhammad Usman</h2>

              <p className="text-white/80 mt-2 text-xl">Manager</p>

              <div className="space-y-6 mt-10">
                <div>
                  <h3 className="font-semibold text-[#D4A017]">Phone</h3>

                  <a
                    href="tel:+971501918874"
                    className="block hover:text-[#D4A017] transition"
                  >
                    +971 50 191 8874
                  </a>

                  <a
                    href="tel:+971503545674"
                    className="block hover:text-[#D4A017] transition"
                  >
                    +971 50 354 5674
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-[#D4A017]">Email</h3>

                  <a
                    href="mailto:usman@transportuae.co"
                    className="hover:text-[#D4A017] transition"
                  >
                    usman@transportuae.co
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-[#D4A017]">Website</h3>

                  <a
                    href="https://www.usmantransportuae.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D4A017] transition"
                  >
                    www.usmantransportuae.com
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-[#D4A017]">Location</h3>

                  <p className="mt-2">Al Quoz 4, Dubai - UAE</p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#D4A017]">
                    Response Time
                  </h3>

                  <p className="mt-2">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Location</h2>

          <div className="overflow-hidden rounded-3xl shadow-xl">
            <iframe
              src="https://maps.google.com/maps?q=Al%20Quoz%204%20Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
