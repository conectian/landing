"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface WhitelistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function WhitelistModal({ isOpen, onClose }: WhitelistModalProps) {
    const [step, setStep] = useState<"form" | "success">("form");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call / Email sending
        await new Promise(resolve => setTimeout(resolve, 1500));

        setLoading(false);
        setStep("success");
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
                        onClick={onClose}
                        className="absolute inset-0 bg-[var(--slate-900)]/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl p-8 lg:p-12 overflow-hidden"
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-[var(--slate-50)] transition-colors"
                        >
                            <X className="w-6 h-6 text-[var(--slate-400)]" />
                        </button>

                        {step === "form" ? (
                            <>
                                <div className="mb-8">
                                    <span className="badge-ai mb-4">Acceso Anticipado</span>
                                    <h2 className="text-3xl font-bold text-[var(--slate-900)] leading-tight">
                                        Únete a la <br /> <span className="text-[var(--ai-primary)]">Whitelist de Conectian</span>
                                    </h2>
                                    <p className="mt-4 text-[var(--slate-500)]">
                                        Estamos finalizando los detalles. Inscríbete para ser de los primeros en implementar IA real en tu negocio.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-[var(--slate-700)] mb-2 px-1">Nombre completo</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Ej. Juan Pérez"
                                            className="w-full px-5 py-4 rounded-2xl border border-[var(--slate-100)] bg-[var(--slate-50)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--ai-primary)]/20 focus:border-[var(--ai-primary)] font-medium transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-[var(--slate-700)] mb-2 px-1">Correo electrónicoprofesional</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="juan@empresa.com"
                                            className="w-full px-5 py-4 rounded-2xl border border-[var(--slate-100)] bg-[var(--slate-50)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--ai-primary)]/20 focus:border-[var(--ai-primary)] font-medium transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-[var(--slate-700)] mb-2 px-1">¿Qué problema quieres resolver con IA?</label>
                                        <textarea
                                            required
                                            rows={3}
                                            placeholder="Cuéntanos brevemente tus necesidades..."
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
                                                Enviar solicitud
                                                <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                    <p className="text-center text-xs text-[var(--slate-400)]">
                                        Al enviar aceptas nuestra política de privacidad. <br /> Notificaremos tu interés a info@conectian.com
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
                                <h2 className="text-3xl font-bold text-[var(--slate-900)] mb-4">¡Solicitud Enviada!</h2>
                                <p className="text-[var(--slate-500)] mb-10 leading-relaxed">
                                    Tu mensaje ha sido enviado correctamente a **info@conectian.com**. <br />
                                    Te contactaremos muy pronto para darte acceso prioritario.
                                </p>
                                <button
                                    onClick={onClose}
                                    className="btn-ai btn-ai-secondary w-full"
                                >
                                    Cerrar
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
