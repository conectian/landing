"use client";

import { motion } from "framer-motion";
import { Headphones, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

const methodSteps = [
    {
        number: "01",
        icon: <Headphones className="w-8 h-8 text-[var(--ai-primary)]" />,
        title: "Escuchamos",
        description: "Identificamos las tareas repetitivas y cuellos de botella que frenan tu crecimiento. Entendemos tu negocio antes de proponer tecnología.",
    },
    {
        number: "02",
        icon: <CheckCircle2 className="w-8 h-8 text-[var(--ai-primary)]" />,
        title: "Match Inteligente",
        description: "Filtramos nuestra red de partners verificados para encontrarte al proveedor con el caso de éxito más relevante para tu negocio.",
    },
    {
        number: "03",
        icon: <ShieldCheck className="w-8 h-8 text-[var(--ai-primary)]" />,
        title: "Resultados Garantizados",
        description: "Implementamos la solución y vinculamos el éxito del proyecto al ROI conseguido. Si no funciona, no pagas.",
    },
];

import { useLanguage } from "@/context/LanguageContext";

export default function ValueProposition() {
    const { t } = useLanguage();

    const icons = [
        <Headphones className="w-8 h-8 text-[var(--ai-primary)]" />,
        <CheckCircle2 className="w-8 h-8 text-[var(--ai-primary)]" />,
        <ShieldCheck className="w-8 h-8 text-[var(--ai-primary)]" />,
    ];

    return (
        <section id="nosotros" className="section-container bg-white overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Side - Content */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="badge-ai">{t.value_prop.badge}</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl lg:text-5xl font-bold mb-6"
                    >
                        {t.value_prop.title_part1} <br />
                        <span className="text-[var(--ai-primary)]">{t.value_prop.title_part2}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-[var(--slate-500)] mb-10 leading-relaxed"
                    >
                        {t.value_prop.desc}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="p-8 rounded-2xl bg-[var(--ai-glow)] border border-[var(--ai-primary)]/10"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-[var(--ai-primary)] text-white flex items-center justify-center font-bold">
                                %
                            </div>
                            <h4 className="text-xl font-bold">{t.value_prop.pay_per_results_title}</h4>
                        </div>
                        <p className="text-[var(--slate-600)]">
                            {t.value_prop.pay_per_results_desc}
                        </p>
                    </motion.div>
                </div>

                {/* Right Side - Steps */}
                <div className="space-y-6">
                    {t.value_prop.steps.map((step: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className="card-ai group relative overflow-hidden"
                        >
                            <div className="absolute top-4 right-6 text-5xl font-black text-[var(--slate-100)] group-hover:text-[var(--ai-glow)] transition-colors">
                                {`0${index + 1}`}
                            </div>
                            <div className="flex gap-6 relative z-10">
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm border border-[var(--slate-100)] flex items-center justify-center">
                                    {icons[index]}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-[var(--slate-500)] leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
