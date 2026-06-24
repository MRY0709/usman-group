export default function GroupCompanies() {
  const companies = [
    {
      name: "USMAN TRANSPORT LLC",
      description:
        "Providing heavy equipment rental and transportation services across the UAE.",
    },
    {
      name: "GLT TRANSPORT LLC",
      description:
        "Specialized logistics and transport solutions for industrial projects.",
    },
    {
      name: "UIT TRANSPORT BR LLC",
      description:
        "Reliable fleet management and equipment transportation services.",
    },
    {
      name: "USMAN & IMTIAZ TRANSPORT LLC",
      description:
        "Supporting construction and infrastructure projects with modern machinery.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#D4A017] tracking-[4px] font-semibold uppercase">
            Our Group
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Group Companies
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto mt-6">
            A strong network of companies working together to deliver reliable
            transport, logistics, and heavy equipment rental services across the
            UAE.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl border border-slate-200 bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#D4A017] text-black flex items-center justify-center font-bold text-xl mb-6">
                {index + 1}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {company.name}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {company.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
