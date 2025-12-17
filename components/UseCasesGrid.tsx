"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Database, Cloud, Code, BarChart3 } from "lucide-react";

const techIcons: Record<string, React.ReactNode> = {
    Python: <Code className="w-4 h-4" />,
    AWS: <Cloud className="w-4 h-4" />,
    "Machine Learning": <BarChart3 className="w-4 h-4" />,
    "Big Data": <Database className="w-4 h-4" />,
};

const useCases = [
    {
        id: 1,
        title: "Optimización de Cadena de Suministro",
        sector: "Logística",
        problem: "Reducción de costes operativos y tiempos de entrega mediante predicción de demanda y optimización de rutas.",
        stack: ["Python", "AWS", "Machine Learning"],
        kpi: { value: "-32%", label: "Costes Logísticos" },
        impact: "4.2M€ ahorro anual",
    },
    {
        id: 2,
        title: "Automatización de Due Diligence",
        sector: "Legal & M&A",
        problem: "Análisis automatizado de contratos y documentación legal para operaciones de fusiones y adquisiciones.",
        stack: ["Python", "Machine Learning", "Big Data"],
        kpi: { value: "-75%", label: "Tiempo de Revisión" },
        impact: "800+ horas/mes liberadas",
    },
    {
        id: 3,
        title: "Detección de Fraude Financiero",
        sector: "Banca",
        problem: "Sistema de detección en tiempo real de transacciones fraudulentas con machine learning avanzado.",
        stack: ["Python", "AWS", "Machine Learning"],
        kpi: { value: "99.2%", label: "Precisión Detección" },
        impact: "15M€ fraude evitado",
    },
    {
        id: 4,
        title: "Chatbot Atención al Cliente",
        sector: "Retail",
        problem: "Automatización del 80% de consultas de primer nivel con comprensión de lenguaje natural.",
        stack: ["Python", "AWS", "Machine Learning"],
        kpi: { value: "+45%", label: "Satisfacción Cliente" },
        impact: "24/7 disponibilidad",
    },
    {
        id: 5,
        title: "Mantenimiento Predictivo Industrial",
        sector: "Manufactura",
        problem: "Predicción de fallos en maquinaria industrial antes de que ocurran, minimizando paradas no planificadas.",
        stack: ["Python", "Big Data", "Machine Learning"],
        kpi: { value: "-60%", label: "Paradas No Planificadas" },
        impact: "2.8M€ ahorro anual",
    },
    {
        id: 6,
        title: "Scoring Crediticio Avanzado",
        sector: "Fintech",
        problem: "Modelo de scoring alternativo que incorpora datos no tradicionales para mejorar decisiones de crédito.",
        stack: ["Python", "AWS", "Big Data"],
        kpi: { value: "+28%", label: "Tasa de Aprobación" },
        impact: "Mora reducida 40%",
    },
];

export default function UseCasesGrid() {
    return (
        <section id="casos" className="section bg-white">
            <div className="container mx-auto max-w-7xl px-4 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="text-[var(--accent-red)] font-semibold text-sm uppercase tracking-wider">
                        Casos de Éxito
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[var(--navy-900)] mt-3 mb-4">
                        Soluciones IA con Impacto Real
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Descubre cómo empresas líderes han transformado sus operaciones con nuestras soluciones de inteligencia artificial.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {useCases.map((useCase, index) => (
                        <motion.article
                            key={useCase.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="card group cursor-pointer"
                        >
                            {/* Card Header */}
                            <div className="p-6 pb-4 border-b border-gray-100">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-semibold text-[var(--navy-500)] bg-[var(--navy-900)]/5 px-3 py-1 rounded-full">
                                        {useCase.sector}
                                    </span>
                                    <div className="flex items-center gap-1 text-[var(--accent-red)]">
                                        <TrendingUp className="w-4 h-4" />
                                        <span className="text-sm font-bold">{useCase.kpi.value}</span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-[var(--navy-900)] group-hover:text-[var(--navy-700)] transition-colors">
                                    {useCase.title}
                                </h3>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 pt-4">
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                    {useCase.problem}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {useCase.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="inline-flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                                        >
                                            {techIcons[tech]}
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* KPI & Impact */}
                                <div className="bg-[var(--gray-50)] rounded-lg p-3 mb-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs text-gray-500">{useCase.kpi.label}</p>
                                            <p className="text-lg font-bold text-[var(--navy-900)]">{useCase.kpi.value}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-gray-500">Impacto</p>
                                            <p className="text-sm font-semibold text-[var(--accent-red)]">{useCase.impact}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Link */}
                                <a
                                    href={`#caso-${useCase.id}`}
                                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--navy-900)] hover:text-[var(--accent-red)] transition-colors group/link"
                                >
                                    Ver detalles
                                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <a href="#todos-casos" className="btn btn-outline">
                        Ver todos los casos de éxito
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
