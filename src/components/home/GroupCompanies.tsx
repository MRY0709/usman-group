import { Truck, Building2, Wrench, HardHat } from "lucide-react";

export default function GroupCompanies() {
  const companies = [
    {
      icon: <Truck size={28} />,
      name: "USMAN TRANSPORT LLC",
      description:
        "Providing heavy equipment rental and transportation services across the UAE.",
    },
    {
      icon: <Building2 size={28} />,
      name: "GLT TRANSPORT LLC",
      description:
        "Specialized logistics and transport solutions for industrial projects.",
    },
    {
      icon: <Wrench size={28} />,
      name: "UIT TRANSPORT BR LLC",
      description:
        "Reliable fleet management and equipment transportation services.",
    },
    {
      icon: <HardHat size={28} />,
      name: "USMAN & IMTIAZ TRANSPORT LLC",
      description:
        "Supporting construction and infrastructure projects with modern machinery.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#D4A017] tracking-[4px] font-semibold uppercase">
            Trusted Business Network
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Our Group Companies
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto mt-6 text-lg">
            A strong network of companies working together to deliver
            transportation, logistics and heavy equipment rental services across
            the UAE.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                h-full
                flex
                flex-col
                p-8
                rounded-3xl
                border
                border-slate-200
                bg-white
                shadow-md
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-2xl
                hover:border-[#D4A017]
              "
            >
              {/* Premium Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4A017]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Icon */}
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-[#D4A017]
                  text-black
                  flex
                  items-center
                  justify-center
                  mb-6
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:rotate-6
                "
              >
                {company.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  text-2xl
                  font-bold
                  text-slate-900
                  mb-4
                  transition-colors
                  duration-300
                  group-hover:text-[#D4A017]
                "
              >
                {company.name}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed">
                {company.description}
              </p>

              {/* Bottom Link */}
              <div className="mt-auto pt-6">
                <div className="flex items-center gap-2 text-[#D4A017] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Learn More →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
