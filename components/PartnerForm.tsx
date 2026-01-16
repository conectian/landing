"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Sparkles, Building2, Globe, Clock, Zap, Cpu, Layers, CheckCircle2, Target } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface PartnerFormProps {
    onOpenWaitlist?: () => void;
}

export default function PartnerForm({ onOpenWaitlist }: PartnerFormProps) {
    const { t, language } = useLanguage();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        companyName: "",
        region: "",
        experience: "",
        operatingZones: "",
        mainStacks: "",
        integrations: "",
        caseProblem: "",
        caseSector: "",
        caseSystems: "",
        caseMetric1: "",
        caseMetric2: "",
        caseTimeToValue: "",
        casePayback: "",
        caseSLA: "",
        caseAdoption: "",
        caseEvidences: "",
        verificationLevel: "Bronce",
        projectCostRange: "25-75k",
        closingHorizon: "4-8 semanas",
        email: ""
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onOpenWaitlist?.();
    };

    const labels = t.partners;
    const isEn = language === "en";


    return (
        <section className="section-container">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <span className="badge-ai gap-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {labels.section_badge}
                </span>
                <h2 className="text-3xl lg:text-5xl font-bold mt-6 mb-4">
                    {labels.title}
                </h2>
                <p className="text-lg text-[var(--slate-500)] max-w-3xl mx-auto">
                    {labels.subtitle}
                </p>
            </motion.div>

            {/* Form */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-[var(--slate-200)] shadow-xl relative overflow-hidden"
            >
                {/* Onboarding Steps Header */}
                <div className="mb-12">
                    <h3 className="text-sm font-black text-[var(--ai-primary)] mb-6 uppercase tracking-widest text-center">{labels.onboarding_title}</h3>
                    <div className="grid md:grid-cols-4 gap-4 text-left">
                        {[
                            { title: labels.step1, items: labels.step1_items },
                            { title: labels.step2, items: labels.step2_items },
                            { title: labels.step3, items: labels.step3_items },
                            { title: labels.step4, items: labels.step4_items }
                        ].map((step, i) => (
                            <div key={i} className="p-5 rounded-2xl bg-[var(--slate-50)] border border-[var(--slate-100)] shadow-sm">
                                <h4 className="text-[10px] font-black text-[var(--slate-900)] mb-3 uppercase tracking-wider">{step.title}</h4>
                                <ul className="space-y-1.5">
                                    {step.items.map((item, j) => (
                                        <li key={j} className="text-[10px] text-[var(--slate-500)] flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-[var(--ai-primary)]/40" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <form className="space-y-10 relative">
                    {/* Section: Company Profile */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Building2 className="w-5 h-5 text-[var(--ai-primary)]" />
                            <h3 className="text-xl font-bold uppercase tracking-tight">{labels.form_title}</h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <FormField label={labels.field_company} placeholder="Acme AI Labs" value={formData.companyName} onChange={v => setFormData({ ...formData, companyName: v })} />
                            <FormField label={labels.field_region} placeholder="España / EU" value={formData.region} onChange={v => setFormData({ ...formData, region: v })} />
                            <FormField label={labels.field_experience} placeholder="Promedio + seniority" value={formData.experience} onChange={v => setFormData({ ...formData, experience: v })} />
                            <FormField label={labels.field_operating} placeholder="Madrid, Barcelona, remoto EU" value={formData.operatingZones} onChange={v => setFormData({ ...formData, operatingZones: v })} />
                            <FormField label={labels.field_stacks} placeholder="OpenAI, Azure, Vertex, LangChain..." value={formData.mainStacks} onChange={v => setFormData({ ...formData, mainStacks: v })} />
                            <FormField label={labels.field_integrations} placeholder="SAP, Salesforce, HubSpot, Zendesk..." value={formData.integrations} onChange={v => setFormData({ ...formData, integrations: v })} />
                        </div>
                    </div>

                    {/* Section: Case Study #1 */}
                    <div className="p-8 rounded-3xl bg-[var(--slate-50)] border border-[var(--slate-200)]">
                        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[var(--slate-200)]">
                            <Zap className="w-5 h-5 text-[var(--ai-primary)]" />
                            <h3 className="text-lg font-bold uppercase tracking-tight">{labels.case_title}</h3>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                            <FormField className="md:col-span-1" label={labels.field_problem} placeholder="10 min por factura, 8.000/mes" value={formData.caseProblem} onChange={v => setFormData({ ...formData, caseProblem: v })} />
                            <FormField label={labels.field_sector} placeholder="Industrial / 500 empleados" value={formData.caseSector} onChange={v => setFormData({ ...formData, caseSector: v })} />
                            <FormField label={labels.field_systems} placeholder="SAP S/4HANA, OCR, RPA" value={formData.caseSystems} onChange={v => setFormData({ ...formData, caseSystems: v })} />
                        </div>

                        <div className="grid md:grid-cols-4 gap-4 mb-6">
                            <FormField label={labels.field_metric1} placeholder="10min → 2,5min" value={formData.caseMetric1} onChange={v => setFormData({ ...formData, caseMetric1: v })} />
                            <FormField label={labels.field_metric2} placeholder="-22% coste soporte" value={formData.caseMetric2} onChange={v => setFormData({ ...formData, caseMetric2: v })} />
                            <FormField label={labels.field_time} placeholder="6-8 semanas" value={formData.caseTimeToValue} onChange={v => setFormData({ ...formData, caseTimeToValue: v })} />
                            <FormField label={labels.field_payback} placeholder="< 9 meses" value={formData.casePayback} onChange={v => setFormData({ ...formData, casePayback: v })} />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <FormField label={labels.field_sla} placeholder="Respuesta <3h, uptime 99,9%" value={formData.caseSLA} onChange={v => setFormData({ ...formData, caseSLA: v })} />
                            <FormField label={labels.field_adoption} placeholder="% de uso semanal / equipos" value={formData.caseAdoption} onChange={v => setFormData({ ...formData, caseAdoption: v })} />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-[10px] font-black text-[var(--slate-500)] uppercase tracking-wider">
                                {labels.field_evidence}
                            </label>
                            <textarea
                                disabled
                                value={formData.caseEvidences}
                                onChange={(e) => setFormData({ ...formData, caseEvidences: e.target.value })}
                                placeholder="Dashboard anon., carta del cliente, contrato con hitos (redactado)"
                                className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white opacity-60 focus:outline-none transition-all min-h-[120px]"
                            />
                        </div>
                    </div>

                    {/* Section: Project Details */}
                    <div className="grid md:grid-cols-4 gap-6">
                        <FormSelect
                            label={labels.field_level}
                            value={formData.verificationLevel}
                            onChange={v => setFormData({ ...formData, verificationLevel: v })}
                            options={labels.options_level}
                            placeholder={labels.field_select_placeholder}
                        />
                        <FormSelect
                            label={labels.field_cost}
                            value={formData.projectCostRange}
                            onChange={v => setFormData({ ...formData, projectCostRange: v })}
                            options={["< 25k", "25-75k", "75-200k", "200-500k", "500k+"]}
                            placeholder={labels.field_select_placeholder}
                        />
                        <FormSelect
                            label={labels.field_closure}
                            value={formData.closingHorizon}
                            onChange={v => setFormData({ ...formData, closingHorizon: v })}
                            options={labels.options_closure}
                            placeholder={labels.field_select_placeholder}
                        />
                        <FormField
                            type="email"
                            label={labels.field_email}
                            placeholder="proveedor@empresa.com"
                            value={formData.email}
                            onChange={v => setFormData({ ...formData, email: v })}
                        />
                    </div>

                    {/* Submit Button & Status */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 border-t border-[var(--slate-100)] relative z-40">
                        <div className="flex items-center gap-4">
                            <button
                                type="button"
                                onClick={onOpenWaitlist}
                                className="btn-ai btn-ai-primary group px-10 w-full sm:w-auto"
                            >
                                {labels.btn_send}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            {status === 'success' && (
                                <motion.p
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-emerald-600 font-bold text-sm hidden sm:block"
                                >
                                    {labels.thank_you}

                                </motion.p>
                            )}

                            {status === 'error' && (
                                <motion.p
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-red-500 font-bold text-sm"
                                >
                                    {labels.error}
                                </motion.p>
                            )}
                        </div>

                        <p className="text-[10px] text-[var(--slate-400)] max-w-xs leading-tight">
                            {labels.terms}
                        </p>
                    </div>
                </form>
            </motion.div>

            {/* GTM Section - Simple & Integrated */}
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-[var(--slate-200)] shadow-xl relative overflow-hidden mt-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div className="max-w-2xl">
                        <span className="text-[14px] font-black text-[var(--ai-primary)] uppercase tracking-[0.2em] flex items-center mb-3">
                            <Target className="w-3.5 h-3.5 mr-2" />
                            {labels.gtm_section.badge}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-[var(--slate-900)] tracking-tight">
                            {labels.gtm_section.title}
                        </h3>
                    </div>
                    <button
                        onClick={onOpenWaitlist}
                        className="btn-ai btn-ai-primary !py-3 !px-6 text-sm"
                    >
                        {labels.gtm_section.btn}
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {labels.gtm_section.cards.map((card, i) => (
                        <div key={i} className="card-ai !p-6 border-[var(--slate-100)]">
                            <h4 className="text-xs font-black text-[var(--slate-900)] mb-4 uppercase tracking-wider">
                                {card.title}
                            </h4>
                            <ul className="space-y-3">
                                {card.items.map((item, j) => (
                                    <li key={j} className="text-xs text-[var(--slate-500)] flex items-start gap-3">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--ai-primary)]/60 mt-0.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FormField({ label, placeholder, value, onChange, type = "text", className = "" }: { label: string, placeholder: string, value: string, onChange: (v: string) => void, type?: string, className?: string }) {
    return (
        <div className={className}>
            <label className="block text-[10px] font-black text-[var(--slate-500)] mb-2 uppercase tracking-wider">
                {label}
            </label>
            <input
                type={type}
                disabled
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white opacity-60 focus:outline-none transition-all italic text-sm"
            />
        </div>
    );
}

function FormSelect({ label, value, onChange, options, placeholder }: { label: string, value: string, onChange: (v: string) => void, options: string[], placeholder?: string }) {
    return (
        <div>
            <label className="block text-[10px] font-black text-[var(--slate-500)] mb-2 uppercase tracking-wider">
                {label}
            </label>
            <select
                disabled
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white opacity-60 focus:outline-none transition-all text-sm font-medium"
            >
                <option value="">{placeholder || "..."}</option>

                {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
        </div>
    );
}
