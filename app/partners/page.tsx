"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhitelistModal from "@/components/WhitelistModal";
import PartnerForm from "@/components/PartnerForm";

export default function PartnersPage() {
    const [isWhitelistOpen, setIsWhitelistOpen] = useState(false);
    const openWhitelist = () => setIsWhitelistOpen(true);
    const closeWhitelist = () => setIsWhitelistOpen(false);

    return (
        <div className="min-h-screen bg-white">
            <Header onOpenWhitelist={openWhitelist} />

            <main className="pt-24">
                <PartnerForm onOpenWhitelist={openWhitelist} />
            </main>

            <Footer onOpenWhitelist={openWhitelist} />
            <WhitelistModal isOpen={isWhitelistOpen} onClose={closeWhitelist} />
        </div>
    );
}
