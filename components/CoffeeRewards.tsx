import React from "react";
import { Coffee, Award, Gift, Sparkles } from "lucide-react";

export default function CoffeeRewards() {
  return (
    <section id="rewards" className="py-24 bg-brand-charcoal relative overflow-hidden">
      {/* Ambient background glow elements */}
      <div className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] bg-brand-orange/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-15%] w-[35vw] h-[35vw] bg-brand-orange/5 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-orange flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> Program Loyalitas Digital
          </span>

          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-brand-warm-light">
            Ozeis Coffee Rewards
          </h2>

          <div className="h-1 w-20 bg-brand-orange rounded-full"></div>

          <p className="text-base md:text-lg text-brand-muted leading-relaxed max-w-xl">
            Kumpulkan stamp digital setiap kali menikmati kopi favoritmu. Setelah mencapai jumlah tertentu, tukarkan dengan minuman gratis sebagai bentuk apresiasi untuk pelanggan setia.
          </p>

          <div className="flex flex-col gap-2 pt-2">
            <button
              disabled
              className="px-8 py-4 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange font-bold tracking-wide cursor-not-allowed select-none transition-all shadow-md max-w-xs text-center"
            >
              Segera Hadir
            </button>
            <span className="text-xs text-brand-muted font-medium tracking-widest uppercase pl-4">
              Coming Soon
            </span>
          </div>
        </div>

        {/* Right Side: Phone Mockup / Wallet Card */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-80 sm:w-96 animate-float">
            {/* Soft Glow behind phone */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-brand-orange/30 to-brand-orange/5 rounded-[3rem] blur-2xl opacity-75"></div>

            {/* Phone Container */}
            <div className="relative bg-[#080706] border-4 border-[#252220] rounded-[2.75rem] shadow-2xl p-4 overflow-hidden w-full aspect-[9/18]">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#252220] rounded-b-2xl z-20 flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0d0c0b] mr-8"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0d0c0b]"></span>
              </div>

              {/* Status bar mock */}
              <div className="flex justify-between items-center px-4 pt-4 pb-2 text-[10px] text-brand-muted font-semibold">
                <span>9:41</span>
                <div className="flex items-center gap-1.5">
                  <span>5G</span>
                  <span className="inline-block w-4 h-2.5 border border-brand-muted/50 rounded-sm p-0.5"><span className="block w-full h-full bg-brand-muted rounded-2xs"></span></span>
                </div>
              </div>

              {/* Phone Content Screen */}
              <div className="p-3 flex flex-col gap-4 justify-between h-[92%]">
                
                {/* Header inside Phone */}
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-sm font-bold text-brand-warm-light">OZEIS CAFE</span>
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-bold">
                    Loyalty Card
                  </span>
                </div>

                {/* Main Card (Apple Wallet style) */}
                <div className="relative bg-brand-warm-dark border border-white/10 rounded-3xl p-5 shadow-xl flex-grow flex flex-col justify-between overflow-hidden">
                  
                  {/* Subtle card glow/pattern */}
                  <div className="absolute -top-10 -right-10 w-28 h-28 bg-brand-orange/10 rounded-full blur-xl pointer-events-none"></div>

                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-brand-muted">Digital Loyalty Program</p>
                      <h3 className="text-base font-bold text-brand-warm-light mt-0.5">Coffee Reward Card</h3>
                    </div>
                    <div className="p-2 bg-brand-orange/10 border border-brand-orange/20 rounded-xl text-brand-orange">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Stamp visual representation */}
                  <div className="my-6">
                    <p className="text-[11px] text-brand-muted font-medium mb-3">STAMPS COLLECTED</p>
                    
                    <div className="flex justify-between items-center gap-2.5">
                      {/* Stamp 1 - Active */}
                      <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white shadow-lg shadow-brand-orange/20 transition-all duration-300">
                        <Coffee className="w-5 h-5" />
                      </div>
                      {/* Stamp 2 - Active */}
                      <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white shadow-lg shadow-brand-orange/20 transition-all duration-300">
                        <Coffee className="w-5 h-5" />
                      </div>
                      {/* Stamp 3 - Active */}
                      <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white shadow-lg shadow-brand-orange/20 transition-all duration-300">
                        <Coffee className="w-5 h-5" />
                      </div>
                      {/* Stamp 4 - Inactive */}
                      <div className="w-10 h-10 rounded-full bg-brand-charcoal border border-white/10 flex items-center justify-center text-brand-muted/40">
                        <Coffee className="w-5 h-5" />
                      </div>
                      {/* Stamp 5 - Inactive */}
                      <div className="w-10 h-10 rounded-full bg-brand-charcoal border border-white/10 flex items-center justify-center text-brand-muted/40">
                        <Coffee className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xs font-bold text-brand-warm-light">3 dari 5 Stamp</span>
                      <span className="text-[10px] text-brand-muted">2 stamp lagi untuk free drink</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-brand-charcoal rounded-full h-1.5 mt-2 border border-white/5">
                      <div
                        className="bg-brand-orange h-full rounded-full transition-all duration-500"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>

                  {/* Reward Detail Illustration area */}
                  <div className="bg-brand-charcoal/60 border border-white/5 rounded-2xl p-3 flex items-center gap-3">
                    <div className="p-2 bg-brand-orange/10 rounded-lg text-brand-orange">
                      <Gift className="w-4 h-4" />
                    </div>
                    <div className="text-[10px] leading-tight">
                      <p className="font-semibold text-brand-warm-light">Reward berikutnya</p>
                      <p className="text-brand-muted">1 Free Signature Drink</p>
                    </div>
                  </div>

                </div>

                {/* Footer instructions on phone */}
                <div className="text-center pt-2">
                  <p className="text-[9px] text-brand-muted">
                    Scan barcode di kasir setiap kali melakukan transaksi
                  </p>
                  {/* Barcode Mock */}
                  <div className="mx-auto w-32 h-6 mt-1 bg-brand-warm-light/20 rounded flex items-center justify-around opacity-40 px-1">
                    {[1, 2, 1, 3, 2, 1, 4, 1, 2, 3, 1, 2].map((w, idx) => (
                      <span
                        key={idx}
                        className="h-4 bg-brand-warm-light"
                        style={{ width: `${w}px` }}
                      ></span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
