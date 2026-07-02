import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import StarMenu from "@/components/StarMenu";
import CoffeeRewards from "@/components/CoffeeRewards";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: "OZEIS Cafe",
    image: "https://ozeiscafe.com/logoozeis.png",
    "@id": "https://ozeiscafe.com",
    url: "https://ozeiscafe.com",
    telephone: "+6281234567890",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ruko Flavour Walk Citra Garden, Blok D15 No D12, Kel. Paccinongang",
      addressLocality: "Somba Opu",
      addressRegion: "Sulawesi Selatan",
      postalCode: "92113",
      addressCountry: "ID"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -5.188718,
      longitude: 119.467475
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        opens: "08:00",
        closes: "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
          "Sunday"
        ],
        opens: "09:00",
        closes: "23:00"
      }
    ],
    sameAs: [
      "https://instagram.com/ozeis.cafe"
    ],
    description: "OZEIS Cafe adalah coffee shop modern di Gowa yang menghadirkan kopi berkualitas, suasana nyaman, dan tempat ideal untuk bekerja, belajar, maupun bersantai bersama teman."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <StarMenu />
        <CoffeeRewards />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </>
  );
}

