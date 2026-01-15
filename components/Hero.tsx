"use client";

import { ArrowRight, CheckCircle2, Heart, Zap, ShieldCheck, BarChart3, Clock, TrendingUp, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { useLanguage } from "@/context/LanguageContext";

interface HeroProps {
    onOpenWhitelist: () => void;
}

export default function Hero({ onOpenWhitelist }: HeroProps) {
    const { t } = useLanguage();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.80;
        }
    }, []);

    // Rotate through success case cards every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCardIndex((prev) => (prev + 1) % t.hero.cards.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [t.hero.cards.length]);

    const activeCard = t.hero.cards[activeCardIndex];

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
                    poster="https://images.pexels.com/videos/18069235/ai-artificial-intelligence-assistive-ai-computer-18069235.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
                            <span className="text-[var(--ai-primary)] pr-2">{t.hero.highlight1}</span>
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
                    </div>

                    {/* Right Column - Visual Card */}
                    <div className="relative self-start">
                        {/* Main Case Card with AnimatePresence for smooth transitions */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCardIndex}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="relative z-10 p-8 rounded-[2rem] bg-white border border-[var(--slate-100)] shadow-premium max-w-lg mx-auto lg:ml-auto min-h-[540px] flex flex-col"
                            >
                                {/* Card Header Info */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                                        <Sparkles className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">{activeCard.badge}</span>
                                </div>

                                {/* Client Problem Quote */}
                                <div className="mb-6 p-4 rounded-sm bg-[var(--slate-50)] border-l-4 border-[var(--ai-primary)] min-h-[80px] flex items-center">
                                    <p className="text-sm text-[var(--slate-600)] italic">
                                        "{activeCard.quote}"
                                    </p>
                                </div>

                                <h3 className="text-2xl font-bold mb-6 text-[var(--slate-900)]">{activeCard.title}</h3>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-bold text-[var(--slate-800)]">{activeCard.result_label}</p>
                                            <p className="text-sm text-[var(--slate-500)]">{activeCard.result_value}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-bold text-[var(--slate-800)]">{activeCard.roi_label}</p>
                                            <p className="text-sm text-[var(--slate-500)]">{activeCard.roi_value}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-bold text-[var(--slate-800)]">{activeCard.impl_label}</p>
                                            <p className="text-sm text-[var(--slate-500)]">{activeCard.impl_value}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-[var(--slate-50)]">
                                    <p className="text-[10px] font-medium text-[var(--slate-400)] italic">{activeCard.footer}</p>
                                </div>

                                {/* Verification Badge */}
                                <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-[var(--ai-primary)] text-white text-[10px] font-bold shadow-lg flex items-center gap-2">
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    {activeCard.verified}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Card Navigation Dots */}
                        <div className="flex justify-center gap-2 mt-6">
                            {t.hero.cards.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveCardIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeCardIndex
                                        ? 'bg-[var(--ai-primary)] w-6'
                                        : 'bg-[var(--slate-300)] hover:bg-[var(--slate-400)]'
                                        }`}
                                    aria-label={`Ver caso ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Floating Metric Badges */}
                        <motion.div
                            animate={{
                                y: [0, -12, 0],
                                x: [0, 5, 0],
                                rotate: [0, 1, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{ willChange: "transform" }}
                            className="absolute -left-12 -bottom-18 z-20 p-5 rounded-2xl bg-white border border-[var(--slate-100)] shadow-xl flex items-center gap-4 hidden md:flex"
                        >
                            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                                <Clock className="w-5 h-5 text-green-500" />
                            </div>
                            <div>
                                <p className="text-lg font-black text-green-600">{activeCard.metric1_val}</p>
                                <p className="text-[10px] font-bold text-[var(--slate-400)] uppercase">{activeCard.metric1_label}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{
                                y: [0, 12, 0],
                                x: [0, -5, 0],
                                rotate: [0, -1, 0]
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                            }}
                            style={{ willChange: "transform" }}
                            className="absolute -right-8 -bottom-6 z-20 p-5 rounded-2xl bg-white border border-[var(--slate-100)] shadow-xl flex items-center gap-4 hidden md:flex"
                        >
                            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-emerald-500" />
                            </div>
                            <div>
                                <p className="text-lg font-black text-emerald-600">{activeCard.metric2_val}</p>
                                <p className="text-[10px] font-bold text-[var(--slate-400)] uppercase">{activeCard.metric2_label}</p>
                            </div>
                        </motion.div>

                        {/* Extra decorative blobs for the visual side */}
                        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-blue-400/5 blur-[80px] rounded-full -z-10" />
                    </div>
                </div>
            </div>

            {/* Trust Bar - Clean & Integrated */}
            <div className="absolute bottom-0 left-0 right-0 z-20 pb-12 hidden md:block">
                <div className="section-container !py-0">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center justify-center gap-12 pt-8"
                    >
                        {t.hero.trust_bar.map((text, i) => (
                            <div key={i} className="flex items-center gap-3 group">
                                <div className="w-5 h-5 rounded-full bg-[var(--ai-glow)] flex items-center justify-center border border-[var(--ai-primary)]/10">
                                    <ShieldCheck className="w-3 h-3 text-[var(--ai-primary)]" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--slate-500)] group-hover:text-[var(--ai-primary)] transition-colors">
                                    {text}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Visual element at the bottom - subtle overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />
        </section>
    );
}
