"use client";

import { motion } from "framer-motion";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import { useLanguage } from "@/context/LanguageContext";

interface BusinessSearchProps {
    onOpenWhitelist: () => void;
}

export default function BusinessSearch({ onOpenWhitelist }: BusinessSearchProps) {
    const { t, language } = useLanguage();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        sector: "",
        companySize: "",
        location: "",
        problem: "",
        objective: "",
        timeframe: "",
        priority: "",
        email: ""
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onOpenWhitelist();
    };

    const objectives = t.business.objective_options;
    const timeframes = t.business.timeline_options;
    const priorities = t.business.priority_options;


    return (
        <section id="empresas">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="badge-ai gap-2">
                        <Search className="w-3.5 h-3.5" />
                        {t.business.subtitle}
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-bold mt-6 mb-4">
                        {t.business.title}
                    </h2>
                </motion.div>

                {/* Search Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-[var(--slate-200)] shadow-xl relative overflow-hidden"
                >
                    <form className="space-y-8 relative">
                        {/* Row 1 */}
                        <div className="grid md:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-[var(--slate-600)] mb-2 uppercase tracking-wider">
                                    {t.business.fields.sector}
                                </label>
                                <input
                                    type="text"
                                    disabled
                                    value={formData.sector}
                                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                                    placeholder={t.business.fields.sector_placeholder}
                                    className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white opacity-60 focus:outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[var(--slate-600)] mb-2 uppercase tracking-wider">
                                    {t.business.fields.size}
                                </label>
                                <input
                                    type="text"
                                    disabled
                                    value={formData.companySize}
                                    onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                                    placeholder={t.business.fields.size_placeholder}
                                    className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white opacity-60 focus:outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[var(--slate-600)] mb-2 uppercase tracking-wider">
                                    {t.business.fields.location}
                                </label>
                                <input
                                    type="text"
                                    disabled
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    placeholder={t.business.fields.location_placeholder}
                                    className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white opacity-60 focus:outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[var(--slate-600)] mb-2 uppercase tracking-wider">
                                    {t.business.fields.problem}
                                </label>
                                <input
                                    type="text"
                                    disabled
                                    value={formData.problem}
                                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                                    placeholder={t.business.fields.problem_placeholder}
                                    className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white opacity-60 focus:outline-none transition-all"
                                />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid md:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-[var(--slate-600)] mb-2 uppercase tracking-wider">
                                    {t.business.fields.objective}
                                </label>
                                <select
                                    disabled
                                    value={formData.objective}
                                    onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white opacity-60 focus:outline-none transition-all"
                                >
                                    <option value="">{t.business.fields.objective_placeholder}</option>
                                    {objectives.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[var(--slate-600)] mb-2 uppercase tracking-wider">
                                    {t.business.fields.timeline}
                                </label>
                                <select
                                    disabled
                                    value={formData.timeframe}
                                    onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white opacity-60 focus:outline-none transition-all"
                                >
                                    <option value="">{t.business.fields.objective_placeholder}</option>
                                    {timeframes.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[var(--slate-600)] mb-2 uppercase tracking-wider">
                                    {t.business.fields.priority}
                                </label>
                                <select
                                    disabled
                                    value={formData.priority}
                                    onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white opacity-60 focus:outline-none transition-all"
                                >
                                    <option value="">{t.business.fields.objective_placeholder}</option>
                                    {priorities.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[var(--slate-600)] mb-2 uppercase tracking-wider">
                                    {t.business.fields.email}
                                </label>
                                <input
                                    type="email"
                                    disabled
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="your@company.com"
                                    className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white opacity-60 focus:outline-none transition-all"
                                />
                            </div>
                        </div>

                        {/* Submit Button & Status */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-[var(--slate-100)] relative z-40">
                            <button
                                type="button"
                                onClick={onOpenWhitelist}
                                className="btn-ai btn-ai-primary group px-8"
                            >
                                {t.business.btn_search}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            {status === 'success' && (
                                <motion.p
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-emerald-600 font-bold text-sm"
                                >
                                    {t.business.success_msg}
                                </motion.p>
                            )}

                            {status === 'error' && (
                                <motion.p
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-red-500 font-bold text-sm"
                                >
                                    {t.business.error_msg}
                                </motion.p>
                            )}

                            <p className="text-[10px] text-[var(--slate-400)] max-w-xs leading-tight text-center md:text-right">
                                {t.business.footer_disclaimer}
                            </p>

                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

import { CheckCircle2 } from "lucide-react";
