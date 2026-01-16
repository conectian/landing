"use client";

import { motion } from "framer-motion";
import { UserCheck, Zap, BarChart, Globe, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";

import { useLanguage } from "@/context/LanguageContext";

interface PartnersSectionProps {
    onOpenWaitlist: () => void;
}

export default function PartnersSection({ onOpenWaitlist }: PartnersSectionProps) {
    const { t, language } = useLanguage();

    const stepsIcons = [
        <UserCheck className="w-6 h-6 text-purple-600" />,
        <Zap className="w-6 h-6 text-purple-600" />,
        <BarChart className="w-6 h-6 text-purple-600" />,
        <Globe className="w-6 h-6 text-purple-600" />
    ];

    return (
        <section id="partners" className="section-container bg-white border-t border-[var(--slate-100)] relative overflow-hidden">
            {/* Subtle Gradient background */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/5 blur-[100px] rounded-full -z-10" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/5 blur-[100px] rounded-full -z-10" />

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Left side: Header */}
                <div className="lg:col-span-5 lg:sticky lg:top-32">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="badge-ai !bg-purple-50 !text-purple-700 !border-purple-100">{t.partners.section_badge}</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl lg:text-5xl font-bold mb-6"
                    >
                        {t.partners.section_title_part1} <span className="text-purple-600">{t.partners.section_title_part2}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-[var(--slate-500)] mb-10 leading-relaxed"
                    >
                        {t.partners.section_desc}
                    </motion.p>

                    <div className="space-y-4 mb-10">
                        <div className="flex items-center gap-4 text-[var(--slate-600)] font-medium">
                            <Shield className="w-5 h-5 text-purple-500" />
                            <span>{t.partners.trust_seal}</span>
                        </div>
                        <div className="flex items-center gap-4 text-[var(--slate-600)] font-medium">
                            <Shield className="w-5 h-5 text-purple-500" />
                            <span>{t.partners.enterprise_access}</span>
                        </div>
                        <div className="flex items-center gap-4 text-[var(--slate-600)] font-medium">
                            <Shield className="w-5 h-5 text-purple-500" />
                            <span>{t.partners.lead_gen}</span>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link
                            href="/partners"
                            className="btn-ai group bg-purple-600 text-white hover:bg-purple-700 shadow-purple-200 inline-flex items-center gap-2"
                        >
                            {t.partners.btn_join}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Right side: Steps Flow */}
                <div className="lg:col-span-7">
                    <div className="space-y-6">
                        {t.partners.steps.map((step: any, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-6 md:p-8 rounded-[2rem] bg-white border border-[var(--slate-100)] shadow-sm hover:shadow-premium transition-all duration-300 relative"
                            >
                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                                        {stepsIcons[index]}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-black text-purple-300 uppercase tracking-widest">{language === "es" ? "Paso" : "Step"} {index + 1}</span>
                                            <div className="flex flex-wrap gap-2 justify-end">
                                                {step.tags.map((tag: string) => (
                                                    <span key={tag} className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--slate-50)] text-[var(--slate-400)]">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-[var(--slate-900)] mb-3 group-hover:text-purple-600 transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-[var(--slate-500)] text-sm leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
