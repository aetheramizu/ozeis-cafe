import React from "react";
import Image from "next/image";
import { Camera, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-warm-dark border-t border-white/5 py-16 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">

        {/* Company Info column */}
        <div className="lg:col-span-5 flex flex-col items-start gap-6">
          <a href="#home" className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-brand-orange/30">
              <Image
                src="/logoozeis.png"
                alt="Ozeis Cafe Logo"
                fill
                sizes="48px"
                className="object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wider text-brand-warm-light">
                OZEIS CAFE
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-brand-orange">
                Premium Coffee & Study Space
              </span>
            </div>
          </a>
          <p className="text-sm text-brand-muted leading-relaxed max-w-sm">
            Kami hadir untuk menyajikan biji kopi pilihan lokal dengan kualitas terbaik dipadu dengan ruang kolaboratif yang menunjang segala lini produktivitas belajar Anda di Gowa.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/ozeis.cafe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Ozeis Cafe"
              className="p-2.5 rounded-full bg-brand-charcoal hover:bg-brand-orange text-brand-muted hover:text-white transition-all border border-white/5"
            >
              <Camera className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Ozeis Cafe"
              className="p-2.5 rounded-full bg-brand-charcoal hover:bg-brand-orange text-brand-muted hover:text-white transition-all border border-white/5"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="mailto:contact@ozeiscafe.com"
              aria-label="Email Ozeis Cafe"
              className="p-2.5 rounded-full bg-brand-charcoal hover:bg-brand-orange text-brand-muted hover:text-white transition-all border border-white/5"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation Links Column */}
        <div className="lg:col-span-3 lg:col-start-7 flex flex-col gap-4">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-orange">
            Navigasi
          </p>
          <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm">
            <a href="#home" className="text-brand-muted hover:text-brand-orange transition-colors">
              Home
            </a>
            <a href="#tentang" className="text-brand-muted hover:text-brand-orange transition-colors">
              Tentang Kami
            </a>
            <a href="#menu" className="text-brand-muted hover:text-brand-orange transition-colors">
              Menu
            </a>
            <a href="#rewards" className="text-brand-muted hover:text-brand-orange transition-colors">
              Rewards
            </a>
            <a href="#review" className="text-brand-muted hover:text-brand-orange transition-colors">
              Review
            </a>
            <a href="#lokasi" className="text-brand-muted hover:text-brand-orange transition-colors">
              Lokasi
            </a>
          </div>
        </div>

        {/* Campus Support */}
        <div className="lg:col-span-3 flex flex-col gap-4 text-sm">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-orange">
            Technopreneurship Project
          </p>
          <p className="text-brand-muted leading-relaxed">
            Website ini dikembangkan untuk kebutuhan Tugas Akhir mata kuliah Technopreneurship Universitas Gowa. Merepresentasikan digitalisasi ruang bisnis ritel lokal.
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-muted">
        <p>&copy; 2026 OZEIS CAFE. All Rights Reserved.</p>
        <p>Designed with Passion for Technopreneurship Final Exam.</p>
      </div>
    </footer>
  );
}
