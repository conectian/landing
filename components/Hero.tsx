"use client";

import { useState } from "react";
import { Search, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
    { value: "30+", label: "Casos de Éxito" },
    { value: "500M€+", label: "Impacto ROI Generado" },
    { value: "100+", label: "Empresas Confían" },
];

export default function Hero() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        setIsSearching(true);
        // Simulate search
        setTimeout(() => setIsSearching(false), 1500);
    };

    return (
        <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
            {/* Video Background with blue overlay */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="https://videos.pexels.com/video-files/2325093/2325093-hd_1920_1080_25fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-900)]/90 via-[var(--navy-800)]/85 to-[var(--navy-700)]/80" />
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Text & Search */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                            <Sparkles className="w-4 h-4 text-[var(--accent-red)]" />
                            <span className="text-white/90 text-sm font-medium">
                                Plataforma IA Empresarial Líder
                            </span>
                        </div>

                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold !text-white leading-tight mb-6">
                            Inteligencia Artificial con{" "}
                            <span className="text-[var(--accent-red)]">Resultados Medibles</span>
                        </h1>

                        <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-xl">
                            Transformamos desafíos empresariales en soluciones de IA con ROI demostrable.
                            Encuentra el caso de uso perfecto para tu organización.
                        </p>

                        {/* AI Search Box - Professional Style */}
                        <form onSubmit={handleSearch} className="relative max-w-xl">
                            <div className="bg-white rounded-lg shadow-lg p-1">
                                <div className="flex items-center">
                                    <div className="flex items-center gap-3 px-4 flex-1">
                                        <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Describe tu problema empresarial..."
                                            className="w-full py-4 text-gray-800 placeholder:text-gray-400 focus:outline-none text-base"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSearching}
                                        className="btn btn-primary py-4 px-6 rounded-md whitespace-nowrap disabled:opacity-70"
                                    >
                                        {isSearching ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                </svg>
                                                Buscando...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                Buscar Solución
                                                <ArrowRight className="w-4 h-4" />
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </div>
                            <p className="text-white/75 text-sm mt-3">
                                Ejemplo: "Quiero reducir costes operativos en logística" o "Automatizar atención al cliente"
                            </p>
                        </form>
                    </motion.div>

                    {/* Right Column - Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden lg:block"
                    >
                        <div className="grid grid-cols-1 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all"
                                >
                                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                                    <div className="text-white/70">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Mobile Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="lg:hidden grid grid-cols-3 gap-4 mt-12"
                >
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                            <div className="text-white/75 text-xs">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
