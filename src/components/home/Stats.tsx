export default function Stats() {
  const stats = [
    {
      number: "4+",
      title: "Group Companies",
    },
    {
      number: "100+",
      title: "Equipment Fleet",
    },
    {
      number: "24/7",
      title: "Support",
    },
    {
      number: "UAE",
      title: "Coverage",
    },
  ];

  return (
    <section className="bg-[#071a2f] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-[#D4A017] text-5xl font-black mb-3">
                {item.number}
              </h3>

              <p className="text-white text-lg">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
