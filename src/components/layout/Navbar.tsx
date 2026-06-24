"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Rental", href: "/rental" },
  { name: "Fleet", href: "/fleet" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 bg-[#071a2f]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-24 flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <div className="cursor-pointer">
                <h1 className="text-white text-3xl font-bold">USMAN GROUP</h1>

                <p className="text-[#D4A017] text-sm">Heavy Equipment Rental</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-[#D4A017] after:transition-all after:duration-300 ${
                    pathname === link.href
                      ? "text-[#D4A017] after:w-full"
                      : "text-white hover:text-[#D4A017] after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Get Quote */}
              <a
                href="https://wa.me/971501918874"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#D4A017] hover:bg-yellow-500 transition-all duration-300 px-5 py-3 rounded-xl font-semibold">
                  Get Quote
                </button>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-white text-3xl"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Dark Background */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`lg:hidden fixed top-24 right-4 w-[250px] rounded-2xl bg-[#071a2f] shadow-2xl z-50
    transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col p-6 space-y-6 text-white text-lg font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`hover:text-[#D4A017] transition-all duration-300 ${
                  pathname === link.href
                    ? "text-[#D4A017]"
                    : "hover:text-[#D4A017]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
