import React from "react";
import { Star, ExternalLink } from "lucide-react";

interface Review {
  id: number;
  stars: number;
  text: string;
  name: string;
  role: string;
  initials: string;
  bgColor: string;
  textColor: string;
}

export default function Reviews() {
  const reviewsList: Review[] = [
    {
      id: 1,
      stars: 5,
      text: `"Sangat merekomendasikan tempat ini! Atmosfernya luar biasa nyaman buat nugas berjam-jam. Wi-Fi kencang, banyak colokan di setiap sisi meja. Kopi Gula Aren andalan mereka benar-benar nagih."`,
      name: "Andi Nugraha",
      role: "Mahasiswa Universitas Hasanuddin",
      initials: "AN",
      bgColor: "bg-brand-orange/20",
      textColor: "text-brand-orange",
    },
    {
      id: 2,
      stars: 5,
      text: `"Staf kafe sangat ramah dan murah senyum. Begitu masuk langsung berasa vibes yang cozy dan profesional. Menu minumannya lengkap dan harga bersahabat untuk kantong mahasiswa."`,
      name: "Siti Pratiwi",
      role: "Karyawan Swasta, Gowa",
      initials: "SP",
      bgColor: "bg-brand-beige/20",
      textColor: "text-brand-beige",
    },
    {
      id: 3,
      stars: 5,
      text: `"Wajib coba Ozeis Signature! Krim atasnya benar-benar gurih dan nge-blend sempurna sama kopinya. Cocok buat kerja karena suasananya tenang dan musik latar tidak bising."`,
      name: "Rian Darmawan",
      role: "Remote UI/UX Designer",
      initials: "RD",
      bgColor: "bg-brand-orange/20",
      textColor: "text-brand-orange",
    },
  ];

  return (
    <section id="review" className="py-24 bg-brand-warm-dark relative overflow-hidden">
      <div className="absolute bottom-[20%] left-[-10%] w-[40vw] h-[40vw] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-orange">
            Review Pengunjung
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2 text-brand-warm-light">
            Apa Kata Teman Ozeis?
          </h2>
          <div className="h-1 w-20 bg-brand-orange mx-auto mt-3 mb-4"></div>
          <p className="text-brand-muted max-w-xl mx-auto text-sm">
            Disadur langsung dari penilaian nyata pelanggan kami di Google Maps Gowa.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsList.map((review) => (
            <div
              key={review.id}
              className="bg-brand-charcoal border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-brand-orange/30 hover:scale-[1.01] transition-all"
            >
              <div>
                {/* Stars */}
                <div className="flex text-yellow-500 mb-4 gap-0.5">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-brand-muted italic leading-relaxed mb-6">
                  {review.text}
                </p>
              </div>
              
              <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                <div className={`w-10 h-10 rounded-full ${review.bgColor} flex items-center justify-center font-bold ${review.textColor} text-sm`}>
                  {review.initials}
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-warm-light">{review.name}</p>
                  <p className="text-[10px] text-brand-muted">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center mt-12">
          <a
            href="https://maps.app.goo.gl/vJbK7UjD9sN2"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full border border-white/15 text-brand-warm-light hover:border-brand-orange text-xs font-bold tracking-wider inline-flex items-center gap-2 hover:bg-brand-warm-dark transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4 text-brand-orange" /> Lihat Semua Review Di Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
