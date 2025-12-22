"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhitelistModal from "@/components/WhitelistModal";
import BusinessSearch from "@/components/BusinessSearch";
import BusinessShowcase from "@/components/BusinessShowcase";

export default function BusinessPage() {
    const [isWhitelistOpen, setIsWhitelistOpen] = useState(false);
    const openWhitelist = () => setIsWhitelistOpen(true);
    const closeWhitelist = () => setIsWhitelistOpen(false);

    return (
        <div className="min-h-screen bg-white">
            <Header onOpenWhitelist={openWhitelist} />

            <main className="pt-24 pb-20">
                <div className="section-container">
                    <BusinessSearch onOpenWhitelist={openWhitelist} />
                    <BusinessShowcase onOpenWhitelist={openWhitelist} />
                </div>
            </main>

            <Footer onOpenWhitelist={openWhitelist} />
            <WhitelistModal isOpen={isWhitelistOpen} onClose={closeWhitelist} />
        </div>
    );
}
