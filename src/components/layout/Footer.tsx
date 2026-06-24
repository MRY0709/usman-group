import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#041324] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/">
              <div className="cursor-pointer">
                <h3 className="text-3xl font-bold">USMAN GROUP</h3>

                <p className="text-[#D4A017] mt-2">Heavy Equipment Rental</p>
              </div>
            </Link>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Reliable heavy equipment rental, transport, and logistics
              solutions across the UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-6">Quick Links</h4>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/" className="hover:text-[#D4A017] transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-[#D4A017] transition">
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/rental"
                  className="hover:text-[#D4A017] transition"
                >
                  Rental
                </Link>
              </li>

              <li>
                <Link href="/fleet" className="hover:text-[#D4A017] transition">
                  Fleet
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#D4A017] transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-xl mb-6">Services</h4>

            <ul className="space-y-3 text-gray-400">
              <li>Excavators</li>
              <li>Wheel Loaders</li>
              <li>Backhoe Loaders</li>
              <li>Cranes</li>
              <li>Forklifts</li>
              <li>Low Bed Trailers</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xl mb-6">Contact</h4>

            <ul className="space-y-3 text-gray-400">
              <li>Al Quoz 4, Dubai - UAE</li>

              <li>
                <a
                  href="tel:+971501918874"
                  className="hover:text-[#D4A017] transition"
                >
                  +971 50 191 8874
                </a>
              </li>

              <li>
                <a
                  href="tel:+971503545674"
                  className="hover:text-[#D4A017] transition"
                >
                  +971 50 354 5674
                </a>
              </li>

              <li>
                <a
                  href="mailto:usman@transportuae.co"
                  className="hover:text-[#D4A017] transition"
                >
                  usman@transportuae.co
                </a>
              </li>

              <li>
                <a
                  href="https://www.usmantransportuae.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4A017] transition"
                >
                  www.usmantransportuae.com
                </a>
              </li>

              <li>24/7 Support Available</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">
          © 2026 Usman Group. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
