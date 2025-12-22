"use client";

import { motion } from "framer-motion";
import { ArrowRight, Receipt, Headset, TrendingUp, FileText, Zap, BarChart3 } from "lucide-react";
import Link from "next/link";

const successCases = [
    {
        id: "ap-automation",
        category: "FINANZAS",
        title: "Automatización de facturas",
        metrics: [
            { label: "De 10 a 2,5 minutos por factura" },
            { label: "ROI en menos de 9 meses" }
        ],
        icon: <Receipt className="w-6 h-6 text-[var(--ai-primary)]" />,
    },
    {
        id: "chatbot-support",
        category: "ATENCIÓN AL CLIENTE",
        title: "Chatbot inteligente 24/7",
        metrics: [
            { label: "De 24h a 3h de respuesta media" },
            { label: "+15% resolución en primer contacto" }
        ],
        icon: <Headset className="w-6 h-6 text-[var(--ai-primary)]" />,
    },
    {
        id: "lead-scoring",
        category: "VENTAS",
        title: "Priorización de leads con IA",
        metrics: [
            { label: "+50% de conversión" },
            { label: "Equipo enfocado en oportunidades reales" }
        ],
        icon: <TrendingUp className="w-6 h-6 text-[var(--ai-primary)]" />,
    },
    {
        id: "contract-analysis",
        category: "LEGAL",
        title: "Análisis de contratos con IA",
        metrics: [
            { label: "De minutos a segundos por cláusula" },
            { label: "Alertas automáticas de riesgos" }
        ],
        icon: <FileText className="w-6 h-6 text-[var(--ai-primary)]" />,
    },
    {
        id: "process-automation",
        category: "OPERACIONES",
        title: "Automatización de procesos",
        metrics: [
            { label: "+30% productividad" },
            { label: "Menos errores humanos" }
        ],
        icon: <Zap className="w-6 h-6 text-[var(--ai-primary)]" />,
    },
    {
        id: "demand-prediction",
        category: "LOGÍSTICA",
        title: "Predicción de demanda",
        metrics: [
            { label: "Stock optimizado automáticamente" },
            { label: "Menos rupturas, menos exceso" }
        ],
        icon: <BarChart3 className="w-6 h-6 text-[var(--ai-primary)]" />,
    }
];

interface UseCasesGridProps {
    onOpenWhitelist: () => void;
}

import { useLanguage } from "@/context/LanguageContext";

export default function UseCasesGrid({ onOpenWhitelist }: UseCasesGridProps) {
    const { t } = useLanguage();

    const caseIcons = [
        <Receipt className="w-6 h-6 text-[var(--ai-primary)]" />,
        <Headset className="w-6 h-6 text-[var(--ai-primary)]" />,
        <TrendingUp className="w-6 h-6 text-[var(--ai-primary)]" />,
        <FileText className="w-6 h-6 text-[var(--ai-primary)]" />,
        <Zap className="w-6 h-6 text-[var(--ai-primary)]" />,
        <BarChart3 className="w-6 h-6 text-[var(--ai-primary)]" />,
    ];

    return (
        <section id="soluciones" className="section-container">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="badge-ai">{t.use_cases.badge}</span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl lg:text-5xl font-bold mb-6"
                >
                    {t.use_cases.title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-[var(--slate-500)]"
                >
                    {t.use_cases.desc}
                </motion.p>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {t.use_cases.cases.map((item: any, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="card-ai group hover:border-[var(--ai-primary)]/30"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-2 rounded-xl bg-[var(--ai-primary)]/10 flex items-center justify-center flex-shrink-0">
                                {caseIcons[index]}
                            </div>
                            <div className="flex-1">
                                <span className="text-[10px] font-black text-[var(--slate-400)] uppercase tracking-widest block mb-2">{item.category}</span>
                                <h4 className="text-xl font-bold">{item.title}</h4>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {item.metrics.map((metric: string, mIdx: number) => (
                                <div key={mIdx} className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--ai-primary)] mt-2 flex-shrink-0" />
                                    <span className="text-sm text-[var(--slate-600)] leading-relaxed">{metric}</span>
                                </div>
                            ))}
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
                    <h4 className="text-2xl font-bold mb-2 !text-white">{t.use_cases.footer_title}</h4>
                    <p className="text-slate-400">{t.use_cases.footer_desc}</p>
                </div>
                <Link
                    href="/business"
                    className="btn-ai btn-ai-primary whitespace-nowrap"
                >
                    {t.use_cases.footer_btn}
                </Link>
            </motion.div>
        </section>
    );
}
