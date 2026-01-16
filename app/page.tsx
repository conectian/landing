"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UseCasesGrid from "@/components/UseCasesGrid";
import ValueProposition from "@/components/ValueProposition";
import DealRoomShowcase from "@/components/DealRoomShowcase";
import PartnersSection from "@/components/PartnersSection";
import FAQSection from "@/components/FAQSection";
import WaitlistModal from "@/components/WaitlistModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  return (
    <>
      <Header onOpenWaitlist={openWaitlist} />
      <main>
        <Hero onOpenWaitlist={openWaitlist} />
        <ValueProposition />
        <UseCasesGrid onOpenWaitlist={openWaitlist} />
        <DealRoomShowcase onOpenWaitlist={openWaitlist} />
        <PartnersSection onOpenWaitlist={openWaitlist} />
        <FAQSection onOpenWaitlist={openWaitlist} />
      </main>
      <Footer onOpenWaitlist={openWaitlist} />

      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </>
  );
}
