import React from "react";
import Image from "next/image";
import { Star, MapPin, Wifi, Plug } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-brand-charcoal">
      {/* Ambient background glow elements */}
      <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[35vw] h-[35vw] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Info Block */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          {/* Floating Google Rating badge */}
          <div className="inline-flex items-center gap-2 bg-brand-warm-dark/80 border border-brand-orange/20 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-md">
            <span className="flex text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
            </span>
            <span className="text-xs font-semibold text-brand-warm-light">5.0 / 5.0 Rating</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
            <span className="text-xs text-brand-muted">9 Google Reviews</span>
          </div>

          {/* Main Catchy Title */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-brand-warm-light">
            Kopi Enak,<br />
            <span className="text-brand-orange font-serif italic">Tempat Nyaman,</span><br />
            Momen Berkesan.
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-brand-muted max-w-xl leading-relaxed">
            Selamat datang di <span className="text-brand-warm-light font-semibold">Ozeis Cafe</span>, oase produktivitas & kehangatan di Gowa. Didesain khusus bagi mahasiswa yang membutuhkan fokus, profesional muda yang memburu deadline, serta sahabat yang ingin bercengkerama dalam kenyamanan maksimal.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            <a
              href="#menu"
              className="px-8 py-4 rounded-full bg-brand-orange text-white font-bold tracking-wide hover:bg-brand-orange-hover transition-all text-center shadow-xl shadow-brand-orange/20 hover:shadow-brand-orange/40 hover:-translate-y-1 duration-200"
            >
              Lihat Menu Signature
            </a>
            <a
              href="#lokasi"
              className="px-8 py-4 rounded-full border border-white/10 hover:border-brand-orange text-brand-warm-light font-bold tracking-wide hover:bg-brand-warm-dark transition-all text-center hover:-translate-y-1 duration-200 flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-brand-orange" /> Lokasi Kami
            </a>
          </div>
        </div>

        {/* Right Interactive Display Block */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Morphing coffee blob behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-brand-orange/30 coffee-blob blur-md"></div>

            {/* Inner Circular Image frame */}
            <div className="absolute inset-4 overflow-hidden rounded-full border-4 border-brand-warm-dark shadow-2xl">
              <Image
                src="/images/hero.jpg"
                alt="Beautiful Coffee Craft"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-brand-warm-dark/90 border border-white/10 rounded-2xl p-3.5 shadow-xl backdrop-blur-sm max-w-[170px] flex items-center gap-3 hover:-translate-y-1 transition-transform duration-300">
              <div className="p-2 bg-brand-orange rounded-lg text-white">
                <Wifi className="w-4 h-4" />
              </div>
              <div className="text-[11px] leading-tight">
                <p className="font-bold text-brand-warm-light">Super Fast Wi-Fi</p>
                <p className="text-brand-muted">Up to 100 Mbps</p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-brand-warm-dark/90 border border-white/10 rounded-2xl p-3.5 shadow-xl backdrop-blur-sm max-w-[180px] flex items-center gap-3 hover:-translate-y-1 transition-transform duration-300">
              <div className="p-2 bg-emerald-600 rounded-lg text-white">
                <Plug className="w-4 h-4" />
              </div>
              <div className="text-[11px] leading-tight">
                <p className="font-bold text-brand-warm-light">Power Outlets</p>
                <p className="text-brand-muted">Tersedia di setiap meja</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
