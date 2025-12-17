"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Play } from "lucide-react";

const features = [
    "Deal Room seguro para compartir información con proveedores",
    "Dashboard ejecutivo con KPIs en tiempo real",
    "Gestión centralizada de todos los casos de uso",
    "Trazabilidad completa de cada proyecto",
    "Integración con herramientas enterprise (SAP, Salesforce, etc.)",
    "Reportes automatizados para stakeholders",
];

export default function DealRoomShowcase() {
    return (
        <section id="plataforma" className="section bg-white overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-[var(--accent-red)] font-semibold text-sm uppercase tracking-wider">
                            Plataforma Deal Room
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-[var(--navy-900)] mt-3 mb-6">
                            Control Total de tus Proyectos de IA
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">
                            Una plataforma centralizada para gestionar la colaboración con proveedores de IA,
                            seguir el progreso de cada proyecto y medir resultados en tiempo real.
                        </p>

                        {/* Features List */}
                        <ul className="space-y-4 mb-8">
                            {features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-[var(--accent-red)] flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4">
                            <a href="#demo" className="btn btn-primary">
                                Solicitar Demo
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a href="#video" className="btn btn-outline">
                                <Play className="w-4 h-4" />
                                Ver Video
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column - Dashboard Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Browser Frame */}
                        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                            {/* Browser Header */}
                            <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="flex-1 mx-4">
                                    <div className="bg-white rounded-md px-3 py-1.5 text-xs text-gray-500 border border-gray-200 max-w-xs">
                                        app.conectian.com/dashboard
                                    </div>
                                </div>
                            </div>

                            {/* Dashboard Content */}
                            <div className="bg-white">
                                {/* Dashboard Header */}
                                <div className="flex border-b border-gray-100">
                                    {/* Sidebar */}
                                    <div className="w-48 bg-[var(--navy-900)] p-4 hidden sm:block">
                                        <div className="flex items-center gap-2 mb-6">
                                            <div className="w-8 h-8 bg-white/10 rounded-lg" />
                                            <span className="text-white font-semibold text-sm">Conectian</span>
                                        </div>
                                        <nav className="space-y-2">
                                            {["Dashboard", "Proyectos", "Proveedores", "Analytics", "Deal Room"].map((item, i) => (
                                                <div
                                                    key={item}
                                                    className={`px-3 py-2 rounded-md text-sm ${i === 0
                                                            ? "bg-white/10 text-white"
                                                            : "text-white/60 hover:text-white"
                                                        }`}
                                                >
                                                    {item}
                                                </div>
                                            ))}
                                        </nav>
                                    </div>

                                    {/* Main Content */}
                                    <div className="flex-1 p-4">
                                        {/* Stats Cards */}
                                        <div className="grid grid-cols-3 gap-3 mb-4">
                                            {[
                                                { label: "Proyectos Activos", value: "12" },
                                                { label: "ROI Generado", value: "€2.4M" },
                                                { label: "Tasa de Éxito", value: "94%" },
                                            ].map((stat) => (
                                                <div
                                                    key={stat.label}
                                                    className="bg-gray-50 rounded-lg p-3 text-center"
                                                >
                                                    <p className="text-lg font-bold text-[var(--navy-900)]">{stat.value}</p>
                                                    <p className="text-xs text-gray-500">{stat.label}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Chart Placeholder */}
                                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="text-sm font-semibold text-gray-700">Progreso de Proyectos</span>
                                                <span className="text-xs text-gray-400">Último mes</span>
                                            </div>
                                            <div className="flex items-end gap-1 h-24">
                                                {[40, 65, 45, 80, 55, 70, 85, 60, 90, 75, 95, 70].map((h, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex-1 bg-[var(--navy-500)] rounded-t opacity-80"
                                                        style={{ height: `${h}%` }}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Recent Projects */}
                                        <div className="space-y-2">
                                            <span className="text-sm font-semibold text-gray-700">Proyectos Recientes</span>
                                            {[
                                                { name: "Optimización Logística", status: "En Progreso", color: "bg-blue-500" },
                                                { name: "Chatbot IA", status: "Completado", color: "bg-green-500" },
                                            ].map((project) => (
                                                <div
                                                    key={project.name}
                                                    className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2"
                                                >
                                                    <span className="text-sm text-gray-700">{project.name}</span>
                                                    <span className={`text-xs px-2 py-1 rounded-full text-white ${project.color}`}>
                                                        {project.status}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 -top-4 -right-4 w-72 h-72 bg-[var(--navy-900)]/5 rounded-full blur-3xl" />
                        <div className="absolute -z-10 -bottom-4 -left-4 w-48 h-48 bg-[var(--accent-red)]/5 rounded-full blur-2xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
