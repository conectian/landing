"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";
import PartnerForm from "@/components/PartnerForm";

export default function PartnersPage() {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
    const openWaitlist = () => setIsWaitlistOpen(true);
    const closeWaitlist = () => setIsWaitlistOpen(false);

    return (
        <div className="min-h-screen bg-white">
            <Header onOpenWaitlist={openWaitlist} />

            <main className="pt-24">
                <PartnerForm onOpenWaitlist={openWaitlist} />
            </main>

            <Footer onOpenWaitlist={openWaitlist} />
            <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
        </div>
    );
}
