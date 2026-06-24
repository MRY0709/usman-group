export default function ContactCTA() {
  return (
    <section className="py-24 bg-[#071a2f] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4A017] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4A017] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <p className="text-[#D4A017] tracking-[4px] uppercase font-semibold">
          Get Started
        </p>

        <h2 className="text-5xl md:text-6xl font-bold text-white mt-6">
          Need Heavy Equipment
          <br />
          For Your Next Project?
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto mt-6 text-lg">
          Contact Usman Group today for reliable equipment rental,
          transportation, and logistics solutions across the UAE.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-10">
          <button className="bg-[#D4A017] text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
            Get Free Quote
          </button>

          <button className="border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition-all duration-300">
            Call Now
          </button>
        </div>
      </div>
    </section>
  );
}
