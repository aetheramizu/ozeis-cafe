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
  return (
    <>
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

