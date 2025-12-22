"use client";

import { motion } from "framer-motion";
import { UserCheck, Zap, BarChart, Globe, ArrowRight, Shield } from "lucide-react";

const steps = [
    {
        id: "step-1",
        icon: <UserCheck className="w-6 h-6 text-purple-600" />,
        title: "Perfil del Proveedor",
        description: "Definimos tu experiencia, sectores clave y capacidades técnicas del equipo.",
        tags: ["Experiencia", "Regiones", "Sectores"]
    },
    {
        id: "step-2",
        icon: <Zap className="w-6 h-6 text-purple-600" />,
        title: "Stacks y Casos",
        description: "Detallamos tus stacks tecnológicos (LLMs, RAG, MLOps) y tus 3 mejores casos de éxito.",
        tags: ["Tech Stack", "Integraciones", "PoCs"]
    },
    {
        id: "step-3",
        icon: <BarChart className="w-6 h-6 text-purple-600" />,
        title: "Métricas Verificadas",
        description: "Validamos el impacto real: antes vs después, KPIs alcanzados y evidencia de ROI.",
        tags: ["KPIs", "ROI", "Evidencias"]
    },
    {
        id: "step-4",
        icon: <Globe className="w-6 h-6 text-purple-600" />,
        title: "Publicación Verificada",
        description: "Tu perfil aparece como 'Verified Partner' con un sello de confianza para las empresas.",
        tags: ["Sello IA", "Lead Gen", "Visibilidad"]
    }
];

interface PartnersSectionProps {
    onOpenWhitelist: () => void;
}

export default function PartnersSection({ onOpenWhitelist }: PartnersSectionProps) {
    return (
        <section id="partners" className="section-container bg-white border-t border-[var(--slate-100)] relative overflow-hidden">
            {/* Subtle Gradient background for Partners section to differentiate slightly */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/5 blur-[100px] rounded-full -z-10" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/5 blur-[100px] rounded-full -z-10" />

            <div className="grid lg:grid-cols-12 gap-16 items-start">
                {/* Left side: Header */}
                <div className="lg:col-span-5 sticky top-32">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="badge-ai bg-purple-50 text-purple-700 border-purple-100">Para Partners</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl font-bold mb-6"
                    >
                        Portal para <span className="text-purple-600">Proveedores de IA</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-[var(--slate-500)] mb-10 leading-relaxed"
                    >
                        Validamos tus casos de uso con métricas reales. Publicamos un resumen verificado para que las empresas confíen en tu propuesta y aceleren su decisión.
                    </motion.p>

                    <div className="space-y-4 mb-10">
                        <div className="flex items-center gap-4 text-[var(--slate-600)] font-medium">
                            <Shield className="w-5 h-5 text-purple-500" />
                            <span>Sello de Confianza Conectian</span>
                        </div>
                        <div className="flex items-center gap-4 text-[var(--slate-600)] font-medium">
                            <Shield className="w-5 h-5 text-purple-500" />
                            <span>Acceso a Clientes Enterprise</span>
                        </div>
                        <div className="flex items-center gap-4 text-[var(--slate-600)] font-medium">
                            <Shield className="w-5 h-5 text-purple-500" />
                            <span>Generación de Leads Cualificados</span>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <button
                            onClick={onOpenWhitelist}
                            className="btn-ai bg-purple-600 text-white hover:bg-purple-700 shadow-purple-200"
                        >
                            Unirse como Partner
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                </div>

                {/* Right side: Steps Flow */}
                <div className="lg:col-span-7">
                    <div className="space-y-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 rounded-[2rem] bg-white border border-[var(--slate-100)] shadow-premium-sm hover:shadow-premium-md transition-all duration-300 relative"
                            >
                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                                        {step.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-black text-purple-300 uppercase tracking-widest">Paso {index + 1}</span>
                                            <div className="flex gap-2">
                                                {step.tags.map(tag => (
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
                                            {step.description}
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
