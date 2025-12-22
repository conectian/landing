"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Rocket, ShieldCheck, Cpu, Layout, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

import { useLanguage } from "@/context/LanguageContext";

interface BusinessShowcaseProps {
    onOpenWhitelist?: () => void;
}

export default function BusinessShowcase({ onOpenWhitelist }: BusinessShowcaseProps) {
    const { t } = useLanguage();

    const verifiedCases = [
        {
            title: "AP Automation (Invoices)",
            metrics: [
                "-20–30% Backoffice hours",
                "Payback < 9 months",
                "10min → 2.5min/invoice"
            ],
            systems: "SAP, Netsuite, Local ERP",
            sectors: "Industrial, Retail, Services"
        },
        {
            title: "Assisted L1 Support",
            metrics: [
                "TTR 24h → ~3h",
                "-22% Operating cost",
                "CSAT +8–12 pts"
            ],
            systems: "Zendesk, Freshdesk, Salesforce",
            sectors: "SaaS, Telco, E-commerce"
        },
        {
            title: "B2B Lead Priority",
            metrics: [
                "2% → 3% close rate (+50%)",
                "Cycle -15%",
                "Win-rate +3–5 pts"
            ],
            systems: "HubSpot, Salesforce",
            sectors: "SaaS B2B, Services"
        }
    ];

    const esVerifiedCases = [
        {
            title: "AP Automation (Facturas)",
            metrics: [
                "-20–30% horas Backoffice",
                "Payback < 9 meses",
                "10min → 2,5min/factura"
            ],
            systems: "SAP, Netsuite, ERP local",
            sectors: "Industrial, Retail, Servicios"
        },
        {
            title: "Soporte L1 asistido",
            metrics: [
                "TTR 24h → ~3h",
                "-22% coste operativo",
                "CSAT +8–12 ptos"
            ],
            systems: "Zendesk, Freshdesk, Salesforce",
            sectors: "SaaS, Telco, E-commerce"
        },
        {
            title: "Prioridad de leads B2B",
            metrics: [
                "2% → 3% de cierre (+50%)",
                "Ciclo -15%",
                "Win-rate +3–5 ptos"
            ],
            systems: "HubSpot, Salesforce",
            sectors: "SaaS B2B, Servicios"
        }
    ];

    const currentCases = t.nav.empresas === "Business" ? verifiedCases : esVerifiedCases;

    const programSteps = t.nav.empresas === "Business" ? [
        {
            title: "Pilot Sprint (4–6 weeks)",
            items: [
                "Use case blueprint",
                "Metrics and milestone contracts",
                "Impact report to management"
            ]
        },
        {
            title: "Adoption & Enablement",
            items: [
                "Team training",
                "Runbooks and SLAs",
                "Live metrics dashboard"
            ]
        },
        {
            title: "AI Go-to-Market",
            items: [
                "Success cases (verified)",
                "ABM content by sector",
                "Real impact PR/Comms"
            ]
        }
    ] : [
        {
            title: "Pilot Sprint (4–6 semanas)",
            items: [
                "Blueprint del caso de uso",
                "Métricas y contratos por hitos",
                "Reporte de impacto a dirección"
            ]
        },
        {
            title: "Adopción & Enablement",
            items: [
                "Formación de equipos",
                "Runbooks y SLAs",
                "Panel de métricas vivas"
            ]
        },
        {
            title: "Go-to-Market IA",
            items: [
                "Casos de éxito (verificados)",
                "Contenido ABM por sector",
                "PR/Comms de impacto real"
            ]
        }
    ];
    return (
        <div className="space-y-24 mt-24">
            {/* Verified Cases Section */}
            <div>
                <div className="grid md:grid-cols-3 gap-6">
                    {currentCases.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-[2rem] bg-white border border-[var(--slate-200)] shadow-sm hover:shadow-md transition-all group"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <ShieldCheck className="w-4 h-4 text-[var(--ai-primary)]" />
                                <span className="text-[10px] font-black text-[var(--slate-400)] uppercase tracking-widest">{t.business.showcase.badge}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-6">{item.title}</h3>
                            <div className="space-y-3 mb-8">
                                {item.metrics.map((metric, midx) => (
                                    <div key={midx} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                        </div>
                                        <span className="text-sm font-medium text-[var(--slate-700)]">{metric}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-2 pt-6 border-t border-[var(--slate-100)]">
                                <p className="text-[10px] font-bold text-[var(--slate-400)] uppercase tracking-wider">{t.business.showcase.systems}: <span className="text-[var(--slate-600)]">{item.systems}</span></p>
                                <p className="text-[10px] font-bold text-[var(--slate-400)] uppercase tracking-wider">{t.business.showcase.sectors}: <span className="text-[var(--slate-600)]">{item.sectors}</span></p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Growth Program Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-10 md:p-16 rounded-[3rem] bg-[var(--slate-900)] text-white relative overflow-hidden"
            >
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[var(--ai-primary)] opacity-10 blur-[120px] pointer-events-none" />

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <Rocket className="w-5 h-5 text-[var(--ai-primary)]" />
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-[var(--ai-primary)]">{t.business.showcase.program_badge}</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-12 !text-white">
                        {t.business.showcase.program_title}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {programSteps.map((step, idx) => (
                            <div key={idx} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h4 className="text-lg font-bold mb-6 !text-white">{step.title}</h4>
                                <ul className="space-y-4">
                                    {step.items.map((bullet, bidx) => (
                                        <li key={bidx} className="flex items-start gap-3 text-sm text-slate-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--ai-primary)] mt-1.5 flex-shrink-0" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-8 border-t border-white/10">
                        <button
                            onClick={onOpenWhitelist}
                            className="btn-ai btn-ai-primary border-none shadow-none group px-8"
                        >
                            {t.business.showcase.program_btn}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
