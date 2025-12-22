"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhitelistModal from "@/components/WhitelistModal";
import { useState } from "react";
import { FileCheck, Terminal, Users2, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function TermsPage() {
    const [isWhitelistOpen, setIsWhitelistOpen] = useState(false);
    const openWhitelist = () => setIsWhitelistOpen(true);
    const closeWhitelist = () => setIsWhitelistOpen(false);

    return (
        <div className="min-h-screen bg-white">
            <Header onOpenWhitelist={openWhitelist} />

            <main className="pt-32 pb-20">
                <div className="section-container max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <span className="badge-ai">Legal</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Términos de Servicio</h1>
                        <p className="text-xl text-[var(--slate-500)] leading-relaxed">
                            Reglas y directrices para el uso de la plataforma de matchmaking de IA de Conectian.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-16">
                        <div className="flex items-center gap-4 p-4 rounded-xl border border-[var(--slate-100)]">
                            <Rocket className="w-5 h-5 text-[var(--ai-primary)]" />
                            <span className="text-sm font-medium">Servicio de Matchmaking</span>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-xl border border-[var(--slate-100)]">
                            <Users2 className="w-5 h-5 text-[var(--ai-primary)]" />
                            <span className="text-sm font-medium">Relación Partner-Cliente</span>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-xl border border-[var(--slate-100)]">
                            <Terminal className="w-5 h-5 text-[var(--ai-primary)]" />
                            <span className="text-sm font-medium">Uso de API y Datos</span>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-xl border border-[var(--slate-100)]">
                            <FileCheck className="w-5 h-5 text-[var(--ai-primary)]" />
                            <span className="text-sm font-medium">Garantía de Resultados</span>
                        </div>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-[var(--slate-900)] mb-4">1. Descripción del Servicio</h2>
                            <p className="text-[var(--slate-600)] leading-relaxed">
                                Conectian proporciona una plataforma que conecta a empresas que buscan soluciones de
                                Inteligencia Artificial con proveedores especializados certificados. Nuestro valor reside
                                en la validación de casos de éxito y la mitigación de riesgos tecnológicos.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--slate-900)] mb-4">2. Registro y Whitelist</h2>
                            <p className="text-[var(--slate-600)] leading-relaxed">
                                El registro en nuestra Whitelist no garantiza el acceso inmediato al servicio. Conectian
                                se reserva el derecho de seleccionar a los participantes basándose en la viabilidad técnica
                                y el potencial de impacto de los proyectos propuestos.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--slate-900)] mb-4">3. Modelo 'Pay per Results'</h2>
                            <p className="text-[var(--slate-600)] leading-relaxed">
                                Los términos económicos de cada implementación se rigen por contratos específicos. El
                                modelo de pago por resultados implica que el devengo de honorarios está supeditado a la
                                consecución de KPIs previamente acordados y documentados.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[var(--slate-900)] mb-4">4. Propiedad de los Modelos</h2>
                            <p className="text-[var(--slate-600)] leading-relaxed">
                                Salvo acuerdo en contrario, la propiedad intelectual de los modelos de IA desarrollados
                                o personalizados para un cliente pertenecerá al cliente o al partner según lo estipulado
                                en su contrato privado, actuando Conectian como facilitador de la infraestructura segura.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer onOpenWhitelist={openWhitelist} />
            <WhitelistModal isOpen={isWhitelistOpen} onClose={closeWhitelist} />
        </div>
    );
}
