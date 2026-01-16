"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";
import BusinessSearch from "@/components/BusinessSearch";

export default function EmpresasPage() {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
    const openWaitlist = () => setIsWaitlistOpen(true);
    const closeWaitlist = () => setIsWaitlistOpen(false);

    return (
        <div className="min-h-screen bg-white">
            <Header onOpenWaitlist={openWaitlist} />

            <main className="pt-24">
                <BusinessSearch onOpenWaitlist={openWaitlist} />
            </main>

            <Footer onOpenWaitlist={openWaitlist} />
            <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
        </div>
    );
}
