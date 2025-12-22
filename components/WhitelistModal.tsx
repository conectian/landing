"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import { useLanguage } from "@/context/LanguageContext";

interface WhitelistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function WhitelistModal({ isOpen, onClose }: WhitelistModalProps) {
    const { t } = useLanguage();
    const [step, setStep] = useState<"form" | "success">("form");
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleClose = () => {
        onClose();
        // Reset state after animation
        setTimeout(() => {
            setStep("form");
            setFormData({ name: "", email: "", message: "" });
        }, 300);
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            time: new Date().toLocaleString(),
            title: "Nueva solicitud de Whitelist",
        };

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
            );
            setStep("success");
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo o escribe a info@conectian.com");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-[var(--slate-900)]/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-white rounded-3xl md:rounded-[2.5rem] shadow-2xl p-6 md:p-10 lg:p-12 overflow-hidden"
                    >
                        {/* Close button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-[var(--slate-50)] transition-colors"
                        >
                            <X className="w-6 h-6 text-[var(--slate-400)]" />
                        </button>

                        {step === "form" ? (
                            <>
                                <div className="mb-8">
                                    <span className="badge-ai mb-4">{t.whitelist.badge}</span>
                                    <h2 className="text-3xl font-bold text-[var(--slate-900)] leading-tight">
                                        {t.whitelist.title_part1} <br /> <span className="text-[var(--ai-primary)]">{t.whitelist.title_part2}</span>
                                    </h2>
                                    <p className="mt-4 text-[var(--slate-500)]">
                                        {t.whitelist.description}
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-[var(--slate-700)] mb-2 px-1">{t.whitelist.name_label}</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder={t.whitelist.name_placeholder}
                                            className="w-full px-5 py-4 rounded-2xl border border-[var(--slate-100)] bg-[var(--slate-50)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--ai-primary)]/20 focus:border-[var(--ai-primary)] font-medium transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-[var(--slate-700)] mb-2 px-1">{t.whitelist.email_label}</label>
                                        <input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder={t.whitelist.email_placeholder}
                                            className="w-full px-5 py-4 rounded-2xl border border-[var(--slate-100)] bg-[var(--slate-50)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--ai-primary)]/20 focus:border-[var(--ai-primary)] font-medium transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-[var(--slate-700)] mb-2 px-1">{t.whitelist.message_label}</label>
                                        <textarea
                                            required
                                            rows={3}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder={t.whitelist.message_placeholder}
                                            className="w-full px-5 py-4 rounded-2xl border border-[var(--slate-100)] bg-[var(--slate-50)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--ai-primary)]/20 focus:border-[var(--ai-primary)] font-medium transition-all resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="btn-ai btn-ai-primary w-full py-4 text-lg"
                                    >
                                        {loading ? (
                                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                {t.whitelist.btn_send}
                                                <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                    <p className="text-center text-xs text-[var(--slate-400)]">
                                        {t.whitelist.footer}
                                    </p>
                                </form>
                            </>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center text-center py-8"
                            >
                                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                                </div>
                                <h2 className="text-3xl font-bold text-[var(--slate-900)] mb-4">{t.whitelist.success_title}</h2>
                                <p className="text-[var(--slate-500)] mb-10 leading-relaxed">
                                    {t.whitelist.success_desc}
                                </p>
                                <button
                                    onClick={handleClose}
                                    className="btn-ai btn-ai-secondary w-full"
                                >
                                    {t.whitelist.btn_close}
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
