"use client";

import { motion } from "framer-motion";
import { Shield, Zap, BarChart3, Users, CheckCircle2, Lock } from "lucide-react";

const propositions = [
    {
        icon: Shield,
        title: "Rigor y Certeza",
        description: "Metodología probada con validación técnica y legal. Cada proyecto sigue estándares enterprise.",
    },
    {
        icon: Lock,
        title: "Seguridad Total",
        description: "Infraestructura cloud certificada. Cumplimiento GDPR y protección de datos garantizada.",
    },
    {
        icon: Zap,
        title: "Velocidad de Implementación",
        description: "Del concepto a producción en semanas, no meses. Metodología ágil con entregables incrementales.",
    },
    {
        icon: BarChart3,
        title: "ROI Medible",
        description: "KPIs definidos desde el día uno. Dashboard de seguimiento con métricas de impacto real.",
    },
    {
        icon: Users,
        title: "Acompañamiento Experto",
        description: "Equipo multidisciplinar dedicado: Data Scientists, Ingenieros ML y especialistas de negocio.",
    },
    {
        icon: CheckCircle2,
        title: "Escalabilidad Garantizada",
        description: "Arquitecturas diseñadas para crecer. De piloto a producción sin fricciones técnicas.",
    },
];

export default function ValueProposition() {
    return (
        <section id="soluciones" className="section section-alt">
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
                        ¿Por qué Conectian?
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[var(--navy-900)] mt-3 mb-4">
                        Un Socio Estratégico para tu Organización
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Combinamos experiencia técnica de primer nivel con visión de negocio
                        para garantizar el éxito de cada proyecto de IA.
                    </p>
                </motion.div>

                {/* Propositions Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {propositions.map((prop, index) => (
                        <motion.div
                            key={prop.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex gap-4"
                        >
                            {/* Icon */}
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                                    <prop.icon className="w-6 h-6 text-[var(--navy-900)]" />
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-lg font-semibold text-[var(--navy-900)] mb-2">
                                    {prop.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {prop.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16 pt-12 border-t border-gray-200"
                >
                    <p className="text-center text-gray-500 text-sm mb-8">
                        Tecnologías y certificaciones en las que confiamos
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12">
                        {/* AWS Partner */}
                        <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.063-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.264-.168.312a.549.549 0 0 1-.32.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.414l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z" />
                            </svg>
                            <span className="font-medium text-sm">AWS Partner</span>
                        </div>

                        {/* Google Cloud */}
                        <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-8.825-6.893zm3.11 14.663h-6.282a4.166 4.166 0 0 1-.053-8.326h.074a2.663 2.663 0 0 1 3.115-1.66 5.13 5.13 0 0 1 6.146 3.903c3.024.333 4.17 4.203 1.103 5.636-.884.413-2.514.447-4.103.447z" />
                            </svg>
                            <span className="font-medium text-sm">Google Cloud</span>
                        </div>

                        {/* Microsoft Azure */}
                        <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M5.483 21.003H24L14.025 4.164l-3.987 7.09 5.025 5.932zm-1.475 0l4.533-8.003-3.541-5.836L0 21.003z" />
                            </svg>
                            <span className="font-medium text-sm">Microsoft Azure</span>
                        </div>

                        {/* ISO 27001 */}
                        <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                            <span className="font-medium text-sm">ISO 27001</span>
                        </div>

                        {/* GDPR Compliant */}
                        <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                            <span className="font-medium text-sm">GDPR Compliant</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
