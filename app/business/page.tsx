"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";
import BusinessSearch from "@/components/BusinessSearch";
import BusinessShowcase from "@/components/BusinessShowcase";

export default function BusinessPage() {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
    const openWaitlist = () => setIsWaitlistOpen(true);
    const closeWaitlist = () => setIsWaitlistOpen(false);

    return (
        <div className="min-h-screen bg-white">
            <Header onOpenWaitlist={openWaitlist} />

            <main className="pt-24 pb-20">
                <div className="section-container">
                    <BusinessSearch onOpenWaitlist={openWaitlist} />
                    <BusinessShowcase onOpenWaitlist={openWaitlist} />
                </div>
            </main>

            <Footer onOpenWaitlist={openWaitlist} />
            <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
        </div>
    );
}
