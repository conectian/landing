"use client";

import { ArrowRight, CheckCircle2, Heart, Zap, ShieldCheck, BarChart3, Clock, TrendingUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";

import { useLanguage } from "@/context/LanguageContext";

interface HeroProps {
    onOpenWhitelist: () => void;
}

export default function Hero({ onOpenWhitelist }: HeroProps) {
    const { t } = useLanguage();
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.85;
        }
    }, []);

    return (
        <section className="relative min-h-[60svh] flex items-center pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
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

            <div className="section-container relative z-10 pt-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <div className="text-left max-w-2xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black text-[var(--slate-900)] mb-8 leading-[1] tracking-tight"
                        >
                            {t.hero.title_part1}
                            <span className="text-[var(--ai-primary)]">{t.hero.highlight1}</span>
                            <br className="hidden md:block" />
                            {t.hero.title_part2}
                            <span className="text-[var(--ai-primary)]">{t.hero.highlight2}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-[var(--slate-600)] mb-10 leading-snug font-medium max-w-xl"
                        >
                            {t.hero.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-4 mb-12"
                        >
                            <Link
                                href="/business"
                                className="btn-ai btn-ai-primary w-full sm:w-auto text-lg group px-8"
                            >
                                {t.hero.btn_cases}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <button
                                onClick={onOpenWhitelist}
                                className="btn-ai btn-ai-secondary w-full sm:w-auto text-lg px-8"
                            >
                                {t.hero.btn_consult}
                            </button>
                        </motion.div>

                        {/* Trust Signals */}
                        {/* <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap gap-8"
                        >
                            <div className="flex items-center gap-2 text-sm font-medium text-[var(--slate-600)]">
                                <Heart className="w-4 h-4 text-pink-500" />
                                <span>Solo soluciones probadas</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium text-[var(--slate-600)]">
                                <Zap className="w-4 h-4 text-amber-500" />
                                <span>Pago por resultados</span>
                            </div>
                        </motion.div> */}
                    </div>

                    {/* Right Column - Visual Card */}
                    <div className="relative self-start">
                        {/* Main Case Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative z-10 p-8 rounded-[2rem] bg-white border border-[var(--slate-100)] shadow-premium max-w-lg mx-auto lg:ml-auto"
                        >
                            {/* Card Header Info */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                                    <Sparkles className="w-5 h-5 text-blue-600" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">{t.hero.card.badge}</span>
                            </div>

                            {/* Client Problem Quote */}
                            <div className="mb-6 p-4 rounded-sm bg-[var(--slate-50)] border-l-4 border-[var(--ai-primary)]">
                                <p className="text-sm text-[var(--slate-600)] italic">
                                    "{t.hero.card.quote}"
                                </p>
                            </div>

                            <h3 className="text-2xl font-bold mb-6 text-[var(--slate-900)]">{t.hero.card.title}</h3>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-bold text-[var(--slate-800)]">{t.hero.card.result_label}</p>
                                        <p className="text-sm text-[var(--slate-500)]">{t.hero.card.result_value}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-bold text-[var(--slate-800)]">{t.hero.card.roi_label}</p>
                                        <p className="text-sm text-[var(--slate-500)]">{t.hero.card.roi_value}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-bold text-[var(--slate-800)]">{t.hero.card.impl_label}</p>
                                        <p className="text-sm text-[var(--slate-500)]">{t.hero.card.impl_value}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-[var(--slate-50)]">
                                <p className="text-[10px] font-medium text-[var(--slate-400)] italic">{t.hero.card.footer}</p>
                            </div>

                            {/* Verification Badge */}
                            <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-[var(--ai-primary)] text-white text-[10px] font-bold shadow-lg flex items-center gap-2">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                {t.hero.card.verified}
                            </div>
                        </motion.div>

                        {/* Floating Metric Badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-12 -bottom-18 z-20 p-5 rounded-2xl bg-white border border-[var(--slate-100)] shadow-xl flex items-center gap-4 hidden md:flex"
                        >
                            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                                <Clock className="w-5 h-5 text-green-500" />
                            </div>
                            <div>
                                <p className="text-lg font-black text-green-600">{t.hero.card.metric1_val}</p>
                                <p className="text-[10px] font-bold text-[var(--slate-400)] uppercase">{t.hero.card.metric1_label}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -right-8 -bottom-6 z-20 p-5 rounded-2xl bg-white border border-[var(--slate-100)] shadow-xl flex items-center gap-4 hidden md:flex"
                        >
                            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-emerald-500" />
                            </div>
                            <div>
                                <p className="text-lg font-black text-emerald-600">{t.hero.card.metric2_val}</p>
                                <p className="text-[10px] font-bold text-[var(--slate-400)] uppercase">{t.hero.card.metric2_label}</p>
                            </div>
                        </motion.div>

                        {/* Extra decorative blobs for the visual side */}
                        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-blue-400/5 blur-[80px] rounded-full -z-10" />
                    </div>
                </div>
            </div>

            {/* Visual element at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
        </section>
    );
}
