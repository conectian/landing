"use client";

import { Search, Sparkles, ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface HeroProps {
    onOpenWhitelist: () => void;
}

export default function Hero({ onOpenWhitelist }: HeroProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.85;
        }
    }, []);

    return (
        <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 bg-indigo-900">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80 grayscale"
                    style={{ filter: 'grayscale(100%) brightness(1.1) sepia(100%) hue-rotate(190deg) saturate(200%)' }}
                >
                    <source src="https://videos.pexels.com/video-files/18069235/18069235-uhd_2560_1440_24fps.mp4" type="video/mp4" />
                </video>
                {/* Overlay for readability and blue tint */}
                <div className="absolute inset-0 bg-white/40 mix-blend-screen" />
                <div className="absolute inset-0 bg-indigo-50/60" />
            </div>

            {/* Background Decorations (placed above video overlay but below content) */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[var(--ai-primary)] opacity-[0.05] blur-3xl rounded-full z-1" />
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-indigo-500 opacity-[0.05] blur-3xl rounded-full z-1" />

            <div className="section-container relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="badge-ai gap-2">
                            <Sparkles className="w-3.5 h-3.5" />
                            Liderando la adopción de IA real
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 lg:mb-8"
                    >
                        Resolvemos tu problema con <br className="hidden lg:block" />
                        <span className="text-[var(--ai-primary)] relative">
                            IA que ya funciona.
                            <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                                <path d="M0 6 C 20 2, 40 2, 50 4 C 60 6, 80 6, 100 2" stroke="var(--ai-primary)" strokeWidth="3" fill="transparent" opacity="0.2" />
                            </svg>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg lg:text-xl text-[var(--slate-500)] mb-10 max-w-2xl leading-relaxed"
                    >
                        Accede al primer marketplace de <strong>casos de éxito de IA verificados</strong>. Identificamos tu problema y te conectamos con el proveedor que ya ha resuelto retos idénticos en empresas como la tuya.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto"
                    >
                        <button
                            onClick={onOpenWhitelist}
                            className="btn-ai btn-ai-primary w-full sm:w-auto text-lg group"
                        >
                            Ver casos de éxito
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={onOpenWhitelist}
                            className="btn-ai btn-ai-secondary w-full sm:w-auto text-lg group"
                        >
                            <Play className="w-5 h-5 fill-current" />
                            Ver como funciona
                        </button>
                    </motion.div>

                </div>
            </div>

            {/* Visual element at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
        </section>
    );
}
