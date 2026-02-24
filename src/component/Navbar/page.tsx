"use client";
import React from "react";
import dynamic from "next/dynamic";
import Navbar from "../../component/Navbar/navbar";
import LuxurySection from "../luxury/luxuryPakaga";
import WhyChampionsClub from "../WhyChampionsClub/whyChampionClub";

const JourneySearch = dynamic(() => import("../../component/Journey/journey"), {
  loading: () => <div style={{ padding: "50px", textAlign: "center" }}>Loading Journey...</div>,
  ssr: false,
});

export default function JourneyPage() {
  return (
    <main>
      <Navbar />
      <JourneySearch />
      <LuxurySection />
      <WhyChampionsClub />
    </main>
  );
}