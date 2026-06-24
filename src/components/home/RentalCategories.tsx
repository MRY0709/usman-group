import Image from "next/image";

const categories = [
  {
    title: "Excavators",
    image: "/categories/excavator.jpg",
  },
  {
    title: "Wheel Loaders",
    image: "/categories/wheel-loader.jpg",
  },
  {
    title: "Backhoe Loaders",
    image: "/categories/backhoe-loader.jpg",
  },
  {
    title: "Cranes",
    image: "/categories/crane.jpg",
  },
  {
    title: "Forklifts",
    image: "/categories/forklift.jpg",
  },
  {
    title: "Low Bed Trailers",
    image: "/categories/lowbed-trailer.jpg",
  },
];

export default function RentalCategories() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#D4A017] font-semibold tracking-[4px] uppercase">
            Our Fleet
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Rental Categories
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto mt-6">
            Explore our wide range of heavy equipment and transport solutions
            available across the UAE.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition duration-500" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-600 mt-3">
                  Reliable and professionally maintained equipment available for
                  rental projects.
                </p>

                <button className="mt-5 text-[#D4A017] font-semibold">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
