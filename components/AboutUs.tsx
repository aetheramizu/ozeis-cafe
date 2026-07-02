import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="tentang" className="py-24 bg-brand-warm-dark relative overflow-hidden">
      <div className="absolute top-[50%] right-[-10%] w-[30vw] h-[30vw] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Gallery Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden h-48 md:h-64 shadow-lg hover:scale-[1.02] transition-transform duration-500 relative">
                <Image
                  src="/images/about-1.jpg"
                  alt="Cafe Seating Interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden h-64 md:h-80 shadow-lg hover:scale-[1.02] transition-transform duration-500 relative group">
                <Image
                  src="/images/about-2.jpg"
                  alt="Pouring Coffee Craft"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-xs font-semibold tracking-wider border border-white/40 px-3 py-1.5 rounded-full text-brand-warm-light">
                    Biji Pilihan Lokal
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-3xl overflow-hidden h-64 md:h-80 shadow-lg hover:scale-[1.02] transition-transform duration-500 relative">
                <Image
                  src="/images/about-3.jpg"
                  alt="Students studying at Cafe"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden h-48 md:h-64 shadow-lg hover:scale-[1.02] transition-transform duration-500 relative">
                <Image
                  src="/images/about-4.jpg"
                  alt="Barista working"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Description */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start gap-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-orange">
              Tentang Ozeis
            </span>

            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight text-brand-warm-light">
              Lebih Dari Sekadar Secangkir Kopi.
            </h2>

            <div className="h-1 w-20 bg-brand-orange rounded-full"></div>

            <p className="text-brand-muted leading-relaxed text-sm md:text-base">
              Lahir dari kecintaan mendalam terhadap cita rasa kopi Nusantara dan kebutuhan akan <span className="text-brand-warm-light font-medium">ruang kerja kolaboratif yang inklusif</span> di Kabupaten Gowa, Sulawesi Selatan. OZEIS CAFE hadir bukan sekadar sebagai tempat memesan kafein harian Anda.
            </p>

            <p className="text-brand-muted leading-relaxed text-sm md:text-base">
              Kami merancang setiap jengkal ruang dengan filosofi kehangatan rumah. Dengan konektivitas internet super cepat, kelimpahan stopkontak listrik, dan pencahayaan hangat yang nyaman di mata, OZEIS CAFE adalah episentrum bagi lahirnya ide-ide kreatif mahasiswa, pertemuan hangat keluarga, hingga kolaborasi profesional muda.
            </p>

            {/* Feature checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-4">
              <div className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-brand-orange/20 text-brand-orange">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-brand-warm-light">Atmosfer Cozy & Tenang</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-brand-orange/20 text-brand-orange">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-brand-warm-light">Biji Kopi Pilihan Premium</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-brand-orange/20 text-brand-orange">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-brand-warm-light">Pelayanan Super Ramah</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-brand-orange/20 text-brand-orange">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-brand-warm-light">Harga Sangat Bersahabat</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
