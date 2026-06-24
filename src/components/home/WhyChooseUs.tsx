export default function WhyChooseUs() {
  const features = [
    {
      title: "24/7 Support",
      description: "Round the clock assistance for all rental operations.",
    },
    {
      title: "Modern Fleet",
      description: "Well-maintained and regularly inspected equipment.",
    },
    {
      title: "Certified Operators",
      description: "Experienced and qualified professionals available.",
    },
    {
      title: "Fast Delivery",
      description: "Quick equipment dispatch across UAE projects.",
    },
    {
      title: "UAE Coverage",
      description: "Serving construction sites throughout the UAE.",
    },
    {
      title: "Competitive Rates",
      description: "Affordable rental solutions without compromising quality.",
    },
  ];

  return (
    <section className="py-24 bg-[#071a2f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#D4A017] tracking-[4px] font-semibold uppercase">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Trusted Heavy Equipment Partner
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mt-6">
            We provide reliable machinery, transport solutions, and professional
            support for projects of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#D4A017] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#D4A017] flex items-center justify-center text-black font-bold text-xl mb-6">
                {index + 1}
              </div>

              <h3 className="text-white text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
