"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";
import { useState } from "react";
import { Scale, Building2, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function LegalNoticePage() {
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
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Aviso Legal</h1>
                        <p className="text-xl text-[var(--slate-500)] leading-relaxed">
                            Información legal obligatoria y condiciones de uso de la plataforma Conectian.
                        </p>
                    </motion.div>

                    <div className="prose prose-slate max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-[var(--slate-900)] mb-4">1. Propiedad Intelectual</h2>
                            <p className="text-[var(--slate-600)] leading-relaxed">
                                Todos los contenidos de este sitio web, incluyendo textos, gráficos, logotipos, iconos e imágenes,
                                son propiedad exclusiva de CONECTIAN AI SOLUTIONS S.L. o de sus proveedores de contenidos,
                                estando protegidos por las leyes de propiedad intelectual internacionales.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--slate-900)] mb-4">2. Condiciones de Uso</h2>
                            <p className="text-[var(--slate-600)] leading-relaxed">
                                El acceso a este sitio web atribuye la condición de USUARIO e implica la aceptación total
                                de las disposiciones incluidas en este Aviso Legal. El usuario se compromete a usar el
                                sitio web de forma diligente y lícita.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--slate-900)] mb-4">3. Responsabilidad</h2>
                            <p className="text-[var(--slate-600)] leading-relaxed">
                                Conectian no garantiza la disponibilidad permanente de los servicios, quedando exonerada por
                                cualquier tipo de responsabilidad por posibles daños y perjuicios causados debido a la
                                indisponibilidad del servicio por causas de fuerza mayor o errores en las redes de transferencia de datos.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer onOpenWaitlist={openWaitlist} />
            <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
        </div>
    );
}
