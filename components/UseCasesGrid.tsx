"use client";

import { motion } from "framer-motion";
import { ArrowRight, Receipt, Headset, Users, TrendingUp, CheckCircle2 } from "lucide-react";

const successCases = [
    {
        id: "ap-automation",
        category: "Operaciones",
        title: "Automatización de Facturas (AP Automation)",
        description: "Reducción drástica del tiempo de procesamiento mediante extracción inteligente de datos y validación automática.",
        metrics: [
            { label: "Tiempo / Factura", before: "10 min", after: "2.5 min" },
            { label: "ROI Estimado", value: "< 9 meses" }
        ],
        icon: <Receipt className="w-6 h-6 text-[var(--ai-primary)]" />,
        tags: ["Finanzas", "Back-office"]
    },
    {
        id: "l1-support",
        category: "Atención al Cliente",
        title: "Soporte L1 con IA Generativa",
        description: "Resolución de consultas comunes 24/7 con integración en CRM para una experiencia personalizada y fluida.",
        metrics: [
            { label: "Respuesta", before: "24h", after: "3h" },
            { label: "Ahorro Costes", value: "22%" }
        ],
        icon: <Headset className="w-6 h-6 text-[var(--ai-primary)]" />,
        tags: ["Soporte", "GenAI"]
    },
    {
        id: "lead-scoring",
        category: "Ventas",
        title: "Priorización Inteligente de Leads",
        description: "Identificación de prospectos con mayor probabilidad de conversión usando modelos predictivos avanzados.",
        metrics: [
            { label: "Cierre Ventas", value: "+50%" },
            { label: "Ciclo Venta", value: "-15%" }
        ],
        icon: <Users className="w-6 h-6 text-[var(--ai-primary)]" />,
        tags: ["Ventas", "Predictivo"]
    }
];

interface UseCasesGridProps {
    onOpenWhitelist: () => void;
}

export default function UseCasesGrid({ onOpenWhitelist }: UseCasesGridProps) {
    return (
        <section id="soluciones" className="section-container">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="badge-ai">Casos de Éxito Reales</span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl lg:text-5xl font-bold mb-6"
                >
                    Encuentra tu solución
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-[var(--slate-500)]"
                >
                    Encuentra la solución ideal entre cientos de casos de éxito verificados de nuestra red de partners. No reinventamos la rueda: te conectamos con lo que ya funciona.
                </motion.p>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {successCases.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="card-ai group hover:border-[var(--ai-primary)]/30"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-[var(--ai-primary)]/10 flex items-center justify-center">
                                {item.icon}
                            </div>
                            <div>
                                <span className="text-xs font-bold text-[var(--ai-primary)] uppercase tracking-widest">{item.category}</span>
                                <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                            </div>
                        </div>

                        <p className="text-[var(--slate-500)] mb-8 line-clamp-2">
                            {item.description}
                        </p>

                        <div className="space-y-4 mb-8">
                            {item.metrics.map((metric, mIdx) => (
                                <div key={mIdx} className="flex items-center justify-between p-3 rounded-lg bg-[var(--slate-50)] border border-[var(--slate-100)]">
                                    <span className="text-sm font-medium text-[var(--slate-600)]">{metric.label}</span>
                                    <div className="flex items-center gap-2">
                                        {metric.before && (
                                            <span className="text-xs text-[var(--slate-400)] line-through">{metric.before}</span>
                                        )}
                                        <span className="text-sm font-bold text-[var(--ai-primary)]">
                                            {metric.after || metric.value}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-[var(--slate-100)]">
                            <div className="flex gap-2">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-bold px-2 py-0.5 rounded bg-[var(--slate-200)] text-[var(--slate-600)]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <button className="text-[var(--ai-primary)] font-bold text-sm flex items-center gap-1 group/btn">
                                Leer más
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Info */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-16 p-8 rounded-3xl bg-[var(--slate-900)] text-white flex flex-col md:flex-row items-center justify-between gap-8"
            >
                <div>
                    <h4 className="text-2xl font-bold mb-2 !text-white">¿No encuentras tu caso específico?</h4>
                    <p className="text-slate-400">Nuestro equipo de expertos puede analizar tu problema y proponer soluciones ya probadas.</p>
                </div>
                <button
                    onClick={onOpenWhitelist}
                    className="btn-ai btn-ai-primary whitespace-nowrap"
                >
                    Solicitar Auditoría Gratuita
                </button>
            </motion.div>
        </section>
    );
}
