"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Sparkles, Building2, Globe, Clock, Zap, Cpu, Layers, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/context/LanguageContext";

interface PartnerFormProps {
    onOpenWhitelist?: () => void;
}

export default function PartnerForm({ onOpenWhitelist }: PartnerFormProps) {
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus('loading');

        const templateParams = {
            name: "Nueva Solicitud de Partner",
            email: formData.email,
            message: `
--- Perfil del Proveedor ---
Empresa: ${formData.companyName}
Región: ${formData.region}
Experiencia: ${formData.experience}
Zonas: ${formData.operatingZones}
Stacks: ${formData.mainStacks}
Integraciones: ${formData.integrations}
Email: ${formData.email}

--- Caso de Uso Verificado #1 ---
Problema: ${formData.caseProblem}
Sector/Tamaño: ${formData.caseSector}
Sistemas: ${formData.caseSystems}
Métrica 1: ${formData.caseMetric1}
Métrica 2: ${formData.caseMetric2}
Tiempo a valor: ${formData.caseTimeToValue}
Payback: ${formData.casePayback}
SLA: ${formData.caseSLA}
Adopción: ${formData.caseAdoption}
Evidencias: ${formData.caseEvidences}

--- Clasificación ---
Nivel propuesto: ${formData.verificationLevel}
Rango coste: ${formData.projectCostRange}
Horizonte cierre: ${formData.closingHorizon}
            `,
            time: new Date().toLocaleString(),
            title: "Nueva solicitud de Partner AI",
        };

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
            );
            setStatus('success');
            setFormData({
                companyName: "", region: "", experience: "", operatingZones: "",
                mainStacks: "", integrations: "", caseProblem: "", caseSector: "",
                caseSystems: "", caseMetric1: "", caseMetric2: "", caseTimeToValue: "",
                casePayback: "", caseSLA: "", caseAdoption: "", caseEvidences: "",
                verificationLevel: "Bronce", projectCostRange: "25-75k", closingHorizon: "4-8 semanas", email: ""
            });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error("Error sending email:", error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        } finally {
            setLoading(false);
        }
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

            {/* Steps Info */}
            <div className="grid md:grid-cols-4 gap-4 mb-16 text-left">
                {[
                    { title: labels.step1, items: labels.step1_items },
                    { title: labels.step2, items: labels.step2_items },
                    { title: labels.step3, items: labels.step3_items },
                    { title: labels.step4, items: labels.step4_items }
                ].map((step, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white border border-[var(--slate-200)] shadow-sm">
                        <h4 className="text-xs font-black text-[var(--slate-900)] mb-4 uppercase tracking-wider">{step.title}</h4>
                        <ul className="space-y-2">
                            {step.items.map((item, j) => (
                                <li key={j} className="text-xs text-[var(--slate-500)] flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-[var(--ai-primary)]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Form */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-[var(--slate-200)] shadow-xl relative overflow-hidden"
            >
                {/* Progress Bar when loading */}
                {status === 'loading' && (
                    <div className="absolute top-0 left-0 h-1 bg-[var(--ai-primary)] animate-shimmer w-full" />
                )}

                <form onSubmit={handleSubmit} className="space-y-10">
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
                                required
                                value={formData.caseEvidences}
                                onChange={(e) => setFormData({ ...formData, caseEvidences: e.target.value })}
                                placeholder="Dashboard anon., carta del cliente, contrato con hitos (redactado)"
                                className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--ai-primary)]/20 focus:border-[var(--ai-primary)] transition-all min-h-[120px]"
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
                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 border-t border-[var(--slate-100)]">
                        <div className="flex items-center gap-4">
                            <button
                                type="submit"
                                disabled={loading || status === 'success'}
                                className={`btn-ai group px-10 w-full sm:w-auto ${status === 'success' ? 'bg-emerald-500 text-white border-emerald-500' : 'btn-ai-primary'}`}
                            >
                                {status === 'loading' ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : status === 'success' ? (
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" />
                                        {labels.success}
                                    </div>
                                ) : (
                                    <>
                                        {labels.btn_send}
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
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
                required
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--ai-primary)]/20 focus:border-[var(--ai-primary)] transition-all italic text-sm"
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
                required
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[var(--slate-200)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--ai-primary)]/20 focus:border-[var(--ai-primary)] transition-all text-sm font-medium"
            >
                <option value="">{placeholder || "..."}</option>

                {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
        </div>
    );
}
