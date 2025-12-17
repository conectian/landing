import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight, CheckCircle2, ShieldCheck, Lock } from "lucide-react";

const footerLinks = {
    soluciones: [
        { name: "IA para Empresas", href: "#" },
        { name: "Automatización Inteligente", href: "#" },
        { name: "Analytics Avanzado", href: "#" },
        { name: "Machine Learning", href: "#" },
        { name: "Consultoría IA", href: "#" },
    ],
    empresa: [
        { name: "Sobre Nosotros", href: "#nosotros" },
        { name: "Casos de Éxito", href: "#casos" },
        { name: "Blog", href: "#" },
        { name: "Carreras", href: "#" },
        { name: "Partners", href: "#" },
    ],
    recursos: [
        { name: "Documentación", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Guías Técnicas", href: "#" },
        { name: "Webinars", href: "#" },
        { name: "Centro de Ayuda", href: "#" },
    ],
    legal: [
        { name: "Política de Privacidad", href: "#" },
        { name: "Términos de Servicio", href: "#" },
        { name: "Política de Cookies", href: "#" },
        { name: "Aviso Legal", href: "#" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-[var(--navy-900)] text-white border-t border-white/5">
            {/* CTA Section */}
            <div className="border-b border-white/10 bg-white/[0.02]">
                <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                        <div className="text-center lg:text-left max-w-2xl py-4">
                            <span className="inline-flex items-center px-3 py-1 bg-[var(--accent-red)]/10 text-[var(--accent-red)] text-xs font-semibold rounded-full mb-4 border border-[var(--accent-red)]/20">
                                <span className="w-2 h-2 rounded-full bg-[var(--accent-red)] mr-2 animate-pulse"></span>
                                Consulta Gratuita
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4 !text-white tracking-tight">
                                ¿Listo para transformar tu negocio?
                            </h2>
                            <p className="text-white/60 text-lg leading-relaxed">
                                Agenda una sesión estratégica de 30 minutos con nuestros expertos en IA. Sin compromiso.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                            <a href="#contacto" className="btn btn-primary group w-full sm:w-auto text-center justify-center">
                                Contactar Ahora
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#demo" className="btn btn-white w-full sm:w-auto text-center justify-center">
                                Solicitar Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Links */}
            <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 py-4">
                    {/* Brand Column - Ocupa 2 columnas en desktop */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-2 flex flex-col gap-6">
                        <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                            Impulsamos el crecimiento empresarial mediante soluciones de Inteligencia Artificial éticas, escalables y orientadas a resultados.
                        </p>

                        <div className="space-y-4 pt-2">
                            <a href="mailto:info@conectian.com" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group">
                                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                    <Mail className="w-4 h-4" />
                                </div>
                                info@conectian.com
                            </a>
                            <a href="tel:+34900000000" className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group">
                                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                    <Phone className="w-4 h-4" />
                                </div>
                                +34 900 000 000
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="col-span-1">
                        <h4 className="font-semibold text-white mb-6">Soluciones</h4>
                        <ul className="space-y-3">
                            {footerLinks.soluciones.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-white/60 hover:text-[var(--accent-red)] transition-colors block py-0.5">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-semibold text-white mb-6">Empresa</h4>
                        <ul className="space-y-3">
                            {footerLinks.empresa.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-white/60 hover:text-[var(--accent-red)] transition-colors block py-0.5">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-semibold text-white mb-6">Recursos</h4>
                        <ul className="space-y-3">
                            {footerLinks.recursos.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-white/60 hover:text-[var(--accent-red)] transition-colors block py-0.5">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-semibold text-white mb-6">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-white/60 hover:text-[var(--accent-red)] transition-colors block py-0.5">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Certifications Section */}
            <div className="border-t border-white/10 bg-white/[0.01] pt-4">
                <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-10">
                    <div className="text-center mb-8">
                        <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
                            Comprometidos con la Seguridad y el Cumplimiento
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
                        {/* GDPR / EU Flag */}
                        <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                            <svg className="w-8 h-auto" viewBox="0 0 512 341.3" xmlns="http://www.w3.org/2000/svg">
                                <rect width="512" height="341.3" fill="#003399" />
                                <path fill="#FFCC00" d="M256 61.3l8.3 25.6h26.9l-21.8 15.8 8.3 25.6-21.8-15.8-21.8 15.8 8.3-25.6-21.8-15.8h26.9zM256 280l8.3 25.6h26.9l-21.8 15.8 8.3 25.6-21.8-15.8-21.8 15.8 8.3-25.6-21.8-15.8h26.9zM365.3 90.7l8.3 25.6h26.9l-21.8 15.8 8.3 25.6-21.8-15.8-21.8 15.8 8.3-25.6-21.8-15.8h26.9zM146.7 250.7l8.3 25.6h26.9l-21.8 15.8 8.3 25.6-21.8-15.8-21.8 15.8 8.3-25.6-21.8-15.8h26.9zM434.7 160l8.3 25.6h26.9l-21.8 15.8 8.3 25.6-21.8-15.8-21.8 15.8 8.3-25.6-21.8-15.8h26.9zM77.3 160l8.3 25.6h26.9l-21.8 15.8 8.3 25.6-21.8-15.8-21.8 15.8 8.3-25.6-21.8-15.8h26.9zM365.3 250.7l8.3 25.6h26.9l-21.8 15.8 8.3 25.6-21.8-15.8-21.8 15.8 8.3-25.6-21.8-15.8h26.9zM146.7 90.7l8.3 25.6h26.9l-21.8 15.8 8.3 25.6-21.8-15.8-21.8 15.8 8.3-25.6-21.8-15.8h26.9zM310.7 75.3l8.3 25.6h26.9l-21.8 15.8 8.3 25.6-21.8-15.8-21.8 15.8 8.3-25.6-21.8-15.8h26.9zM201.3 266l8.3 25.6h26.9l-21.8 15.8 8.3 25.6-21.8-15.8-21.8 15.8 8.3-25.6-21.8-15.8h26.9zM410 114.7l8.3 25.6h26.9l-21.8 15.8 8.3 25.6-21.8-15.8-21.8 15.8 8.3-25.6-21.8-15.8h26.9zM102 226.7l8.3 25.6h26.9l-21.8 15.8 8.3 25.6-21.8-15.8-21.8 15.8 8.3-25.6-21.8-15.8h26.9zM410 226.7l8.3 25.6h26.9l-21.8 15.8 8.3 25.6-21.8-15.8-21.8 15.8 8.3-25.6-21.8-15.8h26.9zM102 114.7l8.3 25.6h26.9l-21.8 15.8 8.3 25.6-21.8-15.8-21.8 15.8 8.3-25.6-21.8-15.8h26.9zM310.7 266l8.3 25.6h26.9l-21.8 15.8 8.3 25.6-21.8-15.8-21.8 15.8 8.3-25.6-21.8-15.8h26.9zM201.3 75.3l8.3 25.6h26.9l-21.8 15.8 8.3 25.6-21.8-15.8-21.8 15.8 8.3-25.6-21.8-15.8h26.9z" />
                            </svg>
                            <div className="flex flex-col">
                                <span className="text-white text-xs font-bold leading-tight">GDPR</span>
                                <span className="text-white/50 text-[10px] leading-tight">Compliant</span>
                            </div>
                        </div>

                        {/* Spain Flag / LOPD */}
                        <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                            <svg className="w-8 h-auto rounded-[2px]" viewBox="0 0 750 500" xmlns="http://www.w3.org/2000/svg">
                                <rect fill="#AA151B" width="750" height="500" />
                                <rect fill="#F1BF00" y="125" width="750" height="250" />
                                {/* Escudo simplificado para tamaños pequeños */}
                                <path fill="#AA151B" d="M200 170 h60 v100 h-60 Z" opacity="0.8" />
                            </svg>
                            <div className="flex flex-col">
                                <span className="text-white text-xs font-bold leading-tight">LOPD</span>
                                <span className="text-white/50 text-[10px] leading-tight">España</span>
                            </div>
                        </div>

                        {/* ISO 27001 */}
                        <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                            <ShieldCheck className="w-6 h-6 text-emerald-400/80" />
                            <div className="flex flex-col">
                                <span className="text-white text-xs font-bold leading-tight">ISO 27001</span>
                                <span className="text-white/50 text-[10px] leading-tight">Seguridad</span>
                            </div>
                        </div>

                        {/* ISO 9001 */}
                        <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                            <CheckCircle2 className="w-6 h-6 text-blue-400/80" />
                            <div className="flex flex-col">
                                <span className="text-white text-xs font-bold leading-tight">ISO 9001</span>
                                <span className="text-white/50 text-[10px] leading-tight">Calidad</span>
                            </div>
                        </div>

                        {/* SOC 2 */}
                        <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                            <Lock className="w-6 h-6 text-amber-400/80" />
                            <div className="flex flex-col">
                                <span className="text-white text-xs font-bold leading-tight">SOC 2</span>
                                <span className="text-white/50 text-[10px] leading-tight">Type II</span>
                            </div>
                        </div>
                    </div>

                    {/* Tech Partners - Logos mejorados y normalizados */}
                    <div className="mt-12 pt-8 border-t border-white/5">
                        <div className="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                            {/* AWS */}
                            <div className="flex items-center gap-2">
                                <svg className="h-6 w-auto text-[#FF9900]" viewBox="0 0 75 48" fill="currentColor">
                                    {/* Simplified AWS-like shape for demo or use real SVG path */}
                                    <path d="M12.9 20.8c2.4 0 4.5 1.5 5.2 3.8l-1.6.6c-1.3-3.6-6.4-3.3-6.9.5v.2c.4-.4 1.2-.6 2.1-.6 3.1 0 5.6 2.1 5.6 5.2 0 3-2.3 5.3-5.5 5.3-2.3 0-3.9-1.2-4.5-2.8v2.4h-1.8v-12h1.8v3.2c.6-3.8 3.5-5.8 5.6-5.8zm-1.8 9.5c0-2.1-1.6-3.6-3.6-3.6-2 0-3.6 1.5-3.6 3.6s1.6 3.6 3.6 3.6c2 0 3.6-1.5 3.6-3.6zm18.2-9.1l-3 9.4-3.1-9.4h-2l-3.2 9.5-2.9-9.5h-2l4 11.6h2l3-9.1 3 9.1h2l4.1-11.6h-1.9zm8.5 8.9c.7 0 1.4.2 1.8.4v-1.7c-.5-.2-1.2-.3-1.8-.3-2.1 0-3.4 1.1-3.4 2.8 0 1.9 1.4 2.3 3.4 3 2.5.8 3.3 1.5 3.3 3.3 0 2-1.7 3.3-4.1 3.3-.9 0-2-.2-2.7-.5v1.8c.6.2 1.6.4 2.6.4 3.4 0 5.9-1.8 5.9-4.9 0-2.1-1.5-3.3-3.9-4.1-2.1-.7-2.8-1.3-2.8-2.6 0-1.1 1-2 2.7-2z" fill="#FFF" />
                                    <path d="M53.1 34.2c-1.8-1.5-4.4-1.6-6.4-.3l-.8-1.2c2.6-1.7 6-1.5 8.3.4.4.3.7.8.9 1.4l-1.5.8c-.1-.5-.2-.9-.5-1.1z" fill="#FF9900" />
                                </svg>
                            </div>

                            {/* Google Cloud */}
                            <div className="flex items-center gap-2">
                                <svg className="h-6 w-auto text-white" viewBox="0 0 100 84" fill="currentColor">
                                    <path fill="#4285F4" d="M12.9 2.4L50 66.6l37.1-64.2H12.9z" />
                                    <path fill="#34A853" d="M12.9 2.4L0 24.8l25 43.3 25-43.3-37.1-22.4z" />
                                    <path fill="#FBBC04" d="M50 24.8l-25 43.3h50L50 24.8z" />
                                    <path fill="#EA4335" d="M75 68.1l25-43.3-37.1-22.4L50 24.8 75 68.1z" />
                                </svg>
                                <span className="font-medium text-sm text-white">Cloud</span>
                            </div>

                            {/* Azure */}
                            <div className="flex items-center gap-2">
                                <svg className="h-6 w-auto text-[#0078D4]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M5.483 21.003H24L14.025 4.164l-3.987 7.09 5.025 5.932zm-1.475 0l4.533-8.003-3.541-5.836L0 21.003z" />
                                </svg>
                                <span className="font-medium text-sm text-white">Azure</span>
                            </div>

                            {/* OpenAI */}
                            <div className="flex items-center gap-2">
                                <svg className="h-6 w-auto text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364l2.0201-1.1638a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4066-.6812zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.5093-2.6067-1.4998z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#050B14] border-t border-white/5">
                <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
                        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                            <p>© {new Date().getFullYear()} Conectian. Todos los derechos reservados.</p>
                            <span className="hidden md:inline text-white/10">|</span>
                            <div className="flex gap-4">
                                <span>CIF: B-12345678</span>
                                <span>Registro Mercantil de Madrid</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            <span>All systems operational</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}