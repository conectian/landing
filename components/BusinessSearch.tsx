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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus('loading');

        const templateParams = {
            name: "Búsqueda de Caso de Éxito",
            email: formData.email,
            message: `
Sector: ${formData.sector}
Tamaño empresa: ${formData.companySize}
Ubicación: ${formData.location}
Problema principal: ${formData.problem}
Objetivo: ${formData.objective}
Plazo esperado: ${formData.timeframe}
Prioridad: ${formData.priority}
Email de contacto: ${formData.email}
            `,
            time: new Date().toLocaleString(),
            title: "Nueva búsqueda de caso de éxito",
        };

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
            );
            setStatus('success');
            setFormData({
                sector: "",
                companySize: "",
                location: "",
                problem: "",
                objective: "",
                timeframe: "",
                priority: "",
                email: ""
            });
            // Reset success after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error("Error sending email:", error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        } finally {
            setLoading(false);
        }
    };

    const objectives = t.nav.empresas === "Business" ? [
        "Save costs", "Accelerate time", "Increase sales", "Compliance/Security"
    ] : [
        "Ahorrar coste", "Acelerar tiempo", "Aumentar ventas", "Cumplimiento/seguridad"
    ];

    const timeframes = t.nav.empresas === "Business" ? [
        "< 3 months", "3-6 months", "6-9 months", "9-12 months"
    ] : [
        "< 3 meses", "3-6 meses", "6-9 meses", "9-12 meses"
    ];

    const priorities = t.nav.empresas === "Business" ? [
        "High", "Medium", "Low"
    ] : [
        "Alta", "Media", "Baja"
    ];

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
                    {/* Progress Bar when loading */}
                    {status === 'loading' && (
                        <div className="absolute top-0 left-0 h-1 bg-[var(--ai-primary)] animate-shimmer w-full" />
                    )}

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Row 1 */}
                        <div className="grid md:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-[var(--slate-600)] mb-2 uppercase tracking-wider">
                                    {t.business.fields.sector}
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.sector}
                                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                                    placeholder={t.business.fields.sector_placeholder}
                                    className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--ai-primary)]/20 focus:border-[var(--ai-primary)] transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[var(--slate-600)] mb-2 uppercase tracking-wider">
                                    {t.business.fields.size}
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.companySize}
                                    onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                                    placeholder={t.business.fields.size_placeholder}
                                    className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--ai-primary)]/20 focus:border-[var(--ai-primary)] transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[var(--slate-600)] mb-2 uppercase tracking-wider">
                                    {t.business.fields.location}
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    placeholder={t.business.fields.location_placeholder}
                                    className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--ai-primary)]/20 focus:border-[var(--ai-primary)] transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[var(--slate-600)] mb-2 uppercase tracking-wider">
                                    {t.business.fields.problem}
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.problem}
                                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                                    placeholder={t.business.fields.problem_placeholder}
                                    className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--ai-primary)]/20 focus:border-[var(--ai-primary)] transition-all"
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
                                    required
                                    value={formData.objective}
                                    onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--ai-primary)]/20 focus:border-[var(--ai-primary)] transition-all"
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
                                    required
                                    value={formData.timeframe}
                                    onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--ai-primary)]/20 focus:border-[var(--ai-primary)] transition-all"
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
                                    required
                                    value={formData.priority}
                                    onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--ai-primary)]/20 focus:border-[var(--ai-primary)] transition-all"
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
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="your@company.com"
                                    className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--ai-primary)]/20 focus:border-[var(--ai-primary)] transition-all"
                                />
                            </div>
                        </div>

                        {/* Submit Button & Status */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-[var(--slate-100)]">
                            <button
                                type="submit"
                                disabled={loading || status === 'success'}
                                className={`btn-ai group px-8 ${status === 'success' ? 'bg-emerald-500 text-white border-emerald-500' : 'btn-ai-primary'}`}
                            >
                                {status === 'loading' ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : status === 'success' ? (
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" />
                                        {t.nav.empresas === "Business" ? "Sent Successfully" : "Enviado con éxito"}
                                    </div>
                                ) : (
                                    <>
                                        {t.business.btn_search}
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <motion.p
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-emerald-600 font-bold text-sm"
                                >
                                    {t.nav.empresas === "Business" ? "Thank you! We'll contact you soon." : "¡Gracias! Te contactaremos pronto."}
                                </motion.p>
                            )}

                            {status === 'error' && (
                                <motion.p
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-red-500 font-bold text-sm"
                                >
                                    {t.nav.empresas === "Business" ? "Error sending. Please try again." : "Error al enviar. Inténtalo de nuevo."}
                                </motion.p>
                            )}

                            <p className="text-[10px] text-[var(--slate-400)] max-w-xs leading-tight text-center md:text-right">
                                {t.nav.empresas === "Business"
                                    ? "You will receive verified and documented success cases that match your profile."
                                    : "Recibirás casos de éxito verificados y documentados que coincidan con tu perfil."}
                            </p>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

import { CheckCircle2 } from "lucide-react";
