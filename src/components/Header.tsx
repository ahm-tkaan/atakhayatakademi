"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#yorumlar", label: "Yorumlar" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-night/90 backdrop-blur-md border-b border-purple/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple to-lavender flex items-center justify-center text-white font-bold text-sm sm:text-base">
              BB
            </div>
            <span className="text-text-primary font-semibold text-sm sm:text-base group-hover:text-purple-light transition-colors">
              Burcu Buyan Yolal
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-purple-light transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#iletisim"
              className="bg-purple hover:bg-purple-light text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Randevu Al
            </a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menü"
          >
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-night/95 backdrop-blur-md border-t border-purple/20 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-text-secondary hover:text-purple-light transition-colors text-base py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#iletisim"
            onClick={() => setIsOpen(false)}
            className="bg-purple hover:bg-purple-light text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors text-center mt-2"
          >
            Randevu Al
          </a>
        </nav>
      </div>
    </header>
  );
}
