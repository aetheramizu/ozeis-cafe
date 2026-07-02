"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Tentang Kami", href: "#tentang" },
  { name: "Menu", href: "#menu" },
  { name: "Rewards", href: "#rewards" },
  { name: "Review", href: "#review" },
  { name: "Lokasi", href: "#lokasi" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-brand-charcoal/95 shadow-xl border-b border-white/5 backdrop-blur-md"
          : "py-5 bg-brand-charcoal/80 border-b border-white/5 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 overflow-hidden rounded-md border border-brand-orange/30 group-hover:border-brand-orange transition-all duration-300">
            <Image
              src="/logoozeis.png"
              alt="Ozeis Cafe Logo"
              fill
              sizes="40px"
              className="object-contain p-0.5"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-brand-warm-light group-hover:text-brand-orange transition-colors">
              OZEIS CAFE
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-brand-orange">
              Premium Coffee & Study Space
            </span>
          </div>
        </a>

        {/* Desktop Menu Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-brand-orange transition-colors text-brand-warm-light"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Header CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Ozeis%20Cafe,%20saya%20ingin%20bertanya%20mengenai..."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-brand-orange text-white font-semibold text-sm hover:bg-brand-orange-hover transition-all shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40 hover:-translate-y-0.5 duration-200"
          >
            Hubungi Kami
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-brand-warm-light hover:text-brand-orange transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-charcoal/95 border-b border-white/10 py-6 px-6 flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium py-1.5 border-b border-white/5 text-brand-warm-light hover:text-brand-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Ozeis%20Cafe..."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-full bg-brand-orange text-white font-semibold shadow-lg shadow-brand-orange/20 hover:bg-brand-orange-hover transition-all"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
