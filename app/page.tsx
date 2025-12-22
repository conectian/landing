"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UseCasesGrid from "@/components/UseCasesGrid";
import ValueProposition from "@/components/ValueProposition";
import DealRoomShowcase from "@/components/DealRoomShowcase";
import PartnersSection from "@/components/PartnersSection";
import FAQSection from "@/components/FAQSection";
import WhitelistModal from "@/components/WhitelistModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [isWhitelistOpen, setIsWhitelistOpen] = useState(false);

  const openWhitelist = () => setIsWhitelistOpen(true);
  const closeWhitelist = () => setIsWhitelistOpen(false);

  return (
    <>
      <Header onOpenWhitelist={openWhitelist} />
      <main>
        <Hero onOpenWhitelist={openWhitelist} />
        <ValueProposition />
        <UseCasesGrid onOpenWhitelist={openWhitelist} />
        <DealRoomShowcase onOpenWhitelist={openWhitelist} />
        <PartnersSection onOpenWhitelist={openWhitelist} />
        <FAQSection onOpenWhitelist={openWhitelist} />
      </main>
      <Footer onOpenWhitelist={openWhitelist} />

      <WhitelistModal isOpen={isWhitelistOpen} onClose={closeWhitelist} />
    </>
  );
}
