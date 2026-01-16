"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";
import { useState } from "react";
import { Cookie, Info, Settings, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function CookiesPage() {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
    const openWaitlist = () => setIsWaitlistOpen(true);
    const closeWaitlist = () => setIsWaitlistOpen(false);

    return (
        <div className="min-h-screen bg-white">
            <Header onOpenWaitlist={openWaitlist} />

            <main className="pt-32 pb-20">
                <div className="section-container max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <span className="badge-ai">Legal</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Política de Cookies</h1>
                        <p className="text-xl text-[var(--slate-500)] leading-relaxed">
                            Transparencia sobre cómo utilizamos las cookies para mejorar tu experiencia en Conectian.
                        </p>
                    </motion.div>

                    <div className="bg-[var(--ai-glow)]/30 rounded-3xl p-8 border border-[var(--ai-primary)]/10 mb-16">
                        <div className="flex items-start gap-6">
                            <Cookie className="w-12 h-12 text-[var(--ai-primary)] flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold mb-2">¿Qué son las cookies?</h3>
                                <p className="text-[var(--slate-600)] leading-relaxed">
                                    Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo para
                                    permitir que el sitio web funcione correctamente y para recopilar información estadística
                                    sobre tu navegación.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-[var(--slate-900)] mb-6 flex items-center gap-3">
                                <ShieldCheck className="w-6 h-6 text-green-500" />
                                1. Cookies Técnicas (Necesarias)
                            </h2>
                            <p className="text-[var(--slate-600)] leading-relaxed">
                                Estas cookies son indispensables para que el sitio web funcione. Permiten la navegación
                                y el uso de las diferentes opciones o servicios que en ella existen, como controlar el
                                tráfico y la comunicación de datos.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--slate-900)] mb-6 flex items-center gap-3">
                                <Info className="w-6 h-6 text-blue-500" />
                                2. Cookies de Análisis
                            </h2>
                            <p className="text-[var(--slate-600)] leading-relaxed">
                                Son aquellas que nos permiten cuantificar el número de usuarios y realizar la medición
                                y análisis estadístico de la utilización que hacen los usuarios de nuestra web. Para ello
                                se analiza su navegación con el fin de mejorar la oferta de servicios que le ofrecemos.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--slate-900)] mb-6 flex items-center gap-3">
                                <Settings className="w-6 h-6 text-orange-500" />
                                3. Gestión de Cookies
                            </h2>
                            <p className="text-[var(--slate-600)] leading-relaxed mb-4">
                                Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la
                                configuración de las opciones del navegador instalado en tu dispositivo:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-[var(--slate-600)]">
                                <li><strong>Google Chrome:</strong> Configuración - Privacidad y seguridad - Cookies.</li>
                                <li><strong>Safari:</strong> Preferencias - Privacidad - Cookies y datos de sitios web.</li>
                                <li><strong>Firefox:</strong> Ajustes - Privacidad y seguridad - Cookies y datos del sitio.</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>

            <Footer onOpenWaitlist={openWaitlist} />
            <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
        </div>
    );
}
