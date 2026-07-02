import React from "react";
import { MapPin, Clock, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section id="lokasi" className="py-24 bg-brand-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-orange">
              Temukan Kami
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-warm-light">
              Kunjungi Ozeis Cafe
            </h2>
            <div className="h-1 w-20 bg-brand-orange rounded-full"></div>

            {/* Address Block */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-warm-dark rounded-2xl text-brand-orange border border-white/5">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-sm">
                <p className="font-bold text-brand-warm-light mb-1">Alamat Kedai</p>
                <p className="text-brand-muted leading-relaxed">
                  Ruko Flavour Walk Citra Garden, Blok D15 No D12,<br />
                  Kel. Paccinongang, Kec. Somba Opu,<br />
                  Kabupaten Gowa, Sulawesi Selatan
                </p>
              </div>
            </div>

            {/* Opening Hours Block */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-warm-dark rounded-2xl text-brand-orange border border-white/5">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-sm">
                <p className="font-bold text-brand-warm-light mb-1">Jam Operasional</p>
                <div className="text-brand-muted leading-relaxed space-y-1">
                  <p>
                    <span className="font-semibold text-brand-warm-light">Senin - Jumat:</span> 08.00 - 22.00 WITA
                  </p>
                  <p>
                    <span className="font-semibold text-brand-warm-light">Sabtu - Minggu:</span> 09.00 - 23.00 WITA
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Directions Button */}
            <a
              href="https://maps.google.com/?q=Ruko+Flavour+Walk+Citra+Garden+Gowa"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-brand-orange text-white font-bold hover:bg-brand-orange-hover transition-all shadow-xl shadow-brand-orange/20 hover:shadow-brand-orange/40 hover:-translate-y-1 duration-200 mt-2 flex items-center gap-2"
            >
              <Navigation className="w-4 h-4" /> Dapatkan Arah Navigasi
            </a>
          </div>

          {/* Map Container */}
          <div className="lg:col-span-7 bg-brand-warm-dark border border-white/5 rounded-[2.5rem] p-4 shadow-2xl relative h-[450px] overflow-hidden">
            {/* Dark Styled Map Iframe Embed */}
            <iframe
              title="Google Maps Location for OZEIS Cafe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.5701830604245!2d119.467475!3d-5.188718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee2a8435d8e7b%3A0xc3456b7dc9768ae5!2sCitraLand%20Celebes%20Gowa!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-[2rem] filter invert-[0.9] hue-rotate-[200deg] contrast-125 brightness-90 shadow-inner"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
