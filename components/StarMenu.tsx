"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FileText, ShoppingCart, X } from "lucide-react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  isBestSeller?: boolean;
}

export default function StarMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Kopi Aren",
      description: "Paduan espresso premium khas Ozeis dengan kelembutan susu murni dan kemanisan otentik Gula Aren murni.",
      price: "Rp 25.000",
      image: "/images/menu-1.jpg",
      isBestSeller: true,
    },
    {
      id: 2,
      name: "Caramel Ribbon",
      description: "Kemewahan saus karamel premium yang gurih-manis berpadu dengan espresso murni dan microfoam susu segar.",
      price: "Rp 30.000",
      image: "/images/menu-2.jpg",
    },
    {
      id: 3,
      name: "Ozeis Signature",
      description: "Mahakarya rahasia racikan barista Ozeis. Kopi espresso blend khusus dilapisi krim gurih manis yang lembut.",
      price: "Rp 28.000",
      image: "/images/menu-3.jpg",
    },
    {
      id: 4,
      name: "Vanilla Bliss",
      description: "Sensasi lembut aroma vanilla murni berpadu mesra dengan espresso berkualitas tinggi yang menenangkan jiwa.",
      price: "Rp 28.000",
      image: "/images/menu-4.jpg",
    },
    {
      id: 5,
      name: "Premium Chocolate",
      description: "Cokelat premium pekat yang padat, manis seimbang, dan creamy. Pilihan mutlak bagi pecinta non-kopi.",
      price: "Rp 23.000",
      image: "/images/menu-5.jpg",
    },
    {
      id: 6,
      name: "Cappuccino",
      description: "Sajian klasik legendaris. Keseimbangan sempurna antara kepekatan espresso segar dengan microfoam tebal lembut.",
      price: "Rp 23.000",
      image: "/images/menu-6.jpg",
    },
  ];

  return (
    <section id="menu" className="py-24 bg-brand-warm-dark relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-orange">
              Menu Pilihan
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2 text-brand-warm-light">
              Menu Signature Ozeis
            </h2>
            <div className="h-1 w-20 bg-brand-orange rounded-full mt-3"></div>
          </div>
          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-3 rounded-xl bg-brand-warm-dark border border-brand-orange/40 text-brand-orange hover:bg-brand-orange hover:text-white transition-all text-xs font-semibold flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" /> Lihat Foto Menu Asli Gowa
            </button>
          </div>
        </div>

        {/* 6 Signature Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-brand-charcoal rounded-[2rem] border border-white/5 p-6 hover:border-brand-orange/40 hover:-translate-y-2 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Best Seller Badge */}
                {item.isBestSeller && (
                  <span className="absolute top-4 right-4 z-10 bg-brand-orange text-white text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full shadow-lg">
                    BEST SELLER
                  </span>
                )}
                {/* Menu Image */}
                <div className="rounded-2xl overflow-hidden h-52 mb-5 relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-brand-warm-light mb-2">{item.name}</h3>
                <p className="text-brand-muted text-xs leading-relaxed mb-4">{item.description}</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div>
                  <span className="text-[10px] text-brand-muted uppercase tracking-wider">Mulai Dari</span>
                  <p className="text-lg font-bold text-brand-orange">
                    {item.price} <span className="text-xs font-normal text-brand-muted">(Ice / Hot)</span>
                  </p>
                </div>
                <a
                  href={`https://wa.me/6281234567890?text=Halo%20Ozeis%20Cafe,%20saya%20ingin%20memesan%20${encodeURIComponent(
                    item.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-brand-warm-dark border border-white/10 hover:border-brand-orange text-brand-warm-light hover:text-brand-orange hover:scale-110 transition-all"
                  title="Pesan Sekarang"
                >
                  <ShoppingCart className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL FOR ORIGINAL PHYSICAL MENU VIEWING */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-brand-charcoal/95 z-[100] flex items-center justify-center p-4 backdrop-blur-md transition-opacity duration-300">
          <div className="bg-brand-warm-dark border border-white/10 rounded-[2.5rem] max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col">
            {/* Modal Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-brand-warm-light">Foto Menu Asli Ozeis Cafe Gowa</h3>
                <p className="text-xs text-brand-muted">Diambil langsung dari display kasir fisik kedai kami.</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full hover:bg-white/5 text-brand-muted hover:text-brand-warm-light transition-all cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto flex justify-center items-center bg-brand-charcoal min-h-[300px] relative">
              <div className="w-full h-[50vh] relative">
                <Image
                  src="/images/menu-modal.jpg"
                  alt="Daftar Menu Asli Ozeis Cafe"
                  fill
                  className="rounded-xl border border-white/10 shadow-lg object-contain"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-white/5 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-semibold transition-all cursor-pointer"
              >
                Selesai
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
