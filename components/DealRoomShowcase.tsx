"use client";

import { motion } from "framer-motion";
import { Rocket, GraduationCap, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";

const adoptionStages = [
    {
        id: "pilot",
        icon: <Rocket className="w-6 h-6 text-[var(--ai-primary)]" />,
        title: "Pilot Sprint",
        duration: "4-6 semanas",
        description: "Validamos técnicamente el caso de uso con tus propios datos antes de escalar.",
        items: ["Prueba de concepto (PoC)", "Validación de métricas", "Cálculo de ROI real"]
    },
    {
        id: "adoption",
        icon: <GraduationCap className="w-6 h-6 text-[var(--ai-primary)]" />,
        title: "Adopción de IA",
        duration: "Continuo",
        description: "Integramos la solución en tus flujos de trabajo y formamos a tu equipo.",
        items: ["Integración vía API/CRM", "Formación de usuarios", "Soporte técnico dedicado"]
    },
    {
        id: "gtm",
        icon: <BarChart3 className="w-6 h-6 text-[var(--ai-primary)]" />,
        title: "GTM IA",
        duration: "Crecimiento",
        description: "Optimizamos la solución y buscamos nuevas oportunidades de expansión.",
        items: ["Mejora continua del modelo", "Dashboard de resultados", "Escalado a otras áreas"]
    }
];

interface DealRoomShowcaseProps {
    onOpenWhitelist: () => void;
}

export default function DealRoomShowcase({ onOpenWhitelist }: DealRoomShowcaseProps) {
    return (
        <section id="empresas" className="section-container relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-[var(--ai-primary)]/5 blur-[120px] -z-10" />

            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="badge-ai">Para Empresas</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl lg:text-5xl font-bold mb-6"
                    >
                        Soluciones para <br />
                        <span className="text-[var(--ai-primary)]">Clientes y Empresas</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-[var(--slate-500)] mb-10 leading-relaxed"
                    >
                        No te entregamos un software y nos vamos. Te acompañamos en todo el proceso de transformación
                        para asegurar que la tecnología se traduce en impacto real en tu negocio.
                    </motion.p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[var(--slate-100)] shadow-sm">
                            <div className="w-10 h-10 rounded-lg bg-[var(--ai-glow)] flex items-center justify-center flex-shrink-0">
                                <CheckCircle2 className="w-6 h-6 text-[var(--ai-primary)]" />
                            </div>
                            <div>
                                <h4 className="font-bold">Acompañamiento Estratégico</h4>
                                <p className="text-sm text-[var(--slate-500)]">Sesiones periódicas para alinear la tecnología con tus objetivos de negocio.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[var(--slate-100)] shadow-sm">
                            <div className="w-10 h-10 rounded-lg bg-[var(--ai-glow)] flex items-center justify-center flex-shrink-0">
                                <CheckCircle2 className="w-6 h-6 text-[var(--ai-primary)]" />
                            </div>
                            <div>
                                <h4 className="font-bold">Seguridad Enterprise</h4>
                                <p className="text-sm text-[var(--slate-500)]">Infraestructura blindada y cumplimiento normativo garantizado por contrato.</p>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-12"
                    >
                        <button
                            onClick={onOpenWhitelist}
                            className="btn-ai btn-ai-primary"
                        >
                            Agendar una Demo del Programa
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                </div>

                {/* Stages Visualizer */}
                <div className="relative">
                    <div className="absolute left-[31px] top-8 bottom-8 w-px bg-gradient-to-b from-[var(--ai-primary)] to-transparent hidden md:block" />

                    <div className="space-y-12">
                        {adoptionStages.map((stage, index) => (
                            <motion.div
                                key={stage.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.4 }}
                                className="relative pl-0 md:pl-16"
                            >
                                {/* Circle on the line */}
                                <div className="absolute left-[20px] top-1 w-6 h-6 rounded-full bg-white border-2 border-[var(--ai-primary)] z-10 hidden md:block" />

                                <div className="card-ai group hover:bg-[var(--ai-glow)]/30">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                                            {stage.icon}
                                        </div>
                                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--slate-100)] text-[var(--slate-600)]">
                                            {stage.duration}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{stage.title}</h3>
                                    <p className="text-[var(--slate-500)] text-sm mb-6 leading-relaxed">
                                        {stage.description}
                                    </p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {stage.items.map(item => (
                                            <li key={item} className="flex items-center gap-2 text-xs font-medium text-[var(--slate-600)]">
                                                <div className="w-1 h-1 rounded-full bg-[var(--ai-primary)]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
