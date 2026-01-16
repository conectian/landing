"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";
import { useState } from "react";
import { Shield, Lock, Eye, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function PrivacyPage() {
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
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Política de Privacidad</h1>
                        <p className="text-xl text-[var(--slate-500)] leading-relaxed">
                            En Conectian, la protección de tus datos y la confidencialidad de tu información empresarial
                            son nuestra máxima prioridad.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        <div className="p-6 rounded-2xl bg-[var(--slate-50)] border border-[var(--slate-100)]">
                            <Lock className="w-8 h-8 text-[var(--ai-primary)] mb-4" />
                            <h3 className="font-bold mb-2">Datos Seguros</h3>
                            <p className="text-sm text-[var(--slate-500)]">Encriptación de extremo a extremo en todos los procesos.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-[var(--slate-50)] border border-[var(--slate-100)]">
                            <Eye className="w-8 h-8 text-[var(--ai-primary)] mb-4" />
                            <h3 className="font-bold mb-2">Transparencia</h3>
                            <p className="text-sm text-[var(--slate-500)]">Solo recolectamos los datos necesarios para el servicio.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-[var(--slate-50)] border border-[var(--slate-100)]">
                            <Shield className="w-8 h-8 text-[var(--ai-primary)] mb-4" />
                            <h3 className="font-bold mb-2">Control Total</h3>
                            <p className="text-sm text-[var(--slate-500)]">Tus datos nunca se usan para entrenar modelos públicos.</p>
                        </div>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-[var(--slate-900)] mb-4 flex items-center gap-3">
                                <FileText className="w-6 h-6 text-[var(--ai-primary)]" />
                                1. Responsable del Tratamiento
                            </h2>
                            <p className="text-[var(--slate-600)] leading-relaxed">
                                CONECTIAN AI SOLUTIONS S.L., con domicilio social en España, es la responsable del tratamiento
                                de tus datos personales recogidos a través de este sitio web.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--slate-900)] mb-4">2. Finalidad de los Datos</h2>
                            <p className="text-[var(--slate-600)] leading-relaxed">
                                Los datos proporcionados a través del formulario de "Waitlist" o contacto se utilizan exclusivamente para:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-[var(--slate-600)]">
                                <li>Gestionar tu solicitud de acceso anticipado.</li>
                                <li>Enviarte información relevante sobre nuestras soluciones de IA.</li>
                                <li>Analizar tus necesidades para realizar un "match" con proveedores adecuados.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--slate-900)] mb-4">3. Seguridad de la Información</h2>
                            <p className="text-[var(--slate-600)] leading-relaxed">
                                Implementamos medidas técnicas y organizativas de última generación para garantizar la seguridad
                                de tus datos, cumpliendo estrictamente con el GDPR, ISO 27001 y estándares SOC2.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--slate-900)] mb-4">4. Tus Derechos</h2>
                            <p className="text-[var(--slate-600)] leading-relaxed">
                                Puedes ejercer tus derechos de acceso, rectificación, supresión y oposición enviando un
                                correo a <strong>info@conectian.com</strong>.
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
