"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "¿Qué hace CONECTIAN exactamente?",
        answer: "Identificamos tu problema y te conectamos con soluciones de IA que ya han funcionado en empresas similares a la tuya. No experimentamos: aplicamos lo probado."
    },
    {
        question: "¿Por qué no arriesgo mi dinero?",
        answer: "Porque solo cobramos si obtienes los resultados acordados. Si la solución no cumple, no pagas."
    },
    {
        question: "¿Cómo sé que la solución funcionará para mí?",
        answer: "Te mostramos casos de éxito documentados de empresas similares a la tuya: mismo sector, mismo tamaño, mismo problema."
    },
    {
        question: "¿Trabajáis solo en España?",
        answer: "No, trabajamos internacionalmente. Tenemos casos de éxito en múltiples países y sectores."
    }
];

interface FAQSectionProps {
    onOpenWhitelist: () => void;
}

export default function FAQSection({ onOpenWhitelist }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="section-container bg-white border-t border-[var(--slate-100)]">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="badge-ai mb-4">Preguntas Frecuentes</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[var(--slate-900)]">Todo lo que necesitas <br /> saber sobre <span className="text-[var(--ai-primary)]">Conectian</span></h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-[var(--slate-100)] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none bg-white hover:bg-[var(--slate-50)] transition-colors"
                            >
                                <span className="text-lg font-bold text-[var(--slate-900)] leading-tight">{faq.question}</span>
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-[var(--ai-primary)] text-white rotate-180' : 'bg-[var(--slate-100)] text-[var(--slate-600)]'}`}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>
                            <motion.div
                                initial={false}
                                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0 text-[var(--slate-500)] leading-relaxed text-base border-t border-[var(--slate-50)]">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 p-8 rounded-3xl bg-[var(--ai-glow)] border border-[var(--ai-primary)]/10 text-center"
                >
                    <h3 className="text-xl font-bold mb-3">¿Tienes más preguntas?</h3>
                    <p className="text-[var(--slate-500)] mb-6">Estamos aquí para ayudarte a entender cómo la IA puede transformar tu negocio.</p>
                    <button
                        onClick={onOpenWhitelist}
                        className="btn-ai btn-ai-primary"
                    >
                        Contactar con Soporte
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
