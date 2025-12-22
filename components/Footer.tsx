import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, ArrowRight, Linkedin, Twitter } from "lucide-react";

interface FooterProps {
    onOpenWhitelist: () => void;
}

export default function Footer({ onOpenWhitelist }: FooterProps) {
    return (
        <footer className="bg-white border-t border-[var(--slate-100)] pt-20 pb-10">
            <div className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 lg:col-span-1">
                        <Link href="/" className="mb-6 block">
                            <Image
                                src="/logo.png"
                                alt="Conectian Logo"
                                width={160}
                                height={45}
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-[var(--slate-500)] text-sm mb-8 leading-relaxed">
                            Resolvemos tu problema con IA que ya funciona. No experimentamos, aplicamos soluciones probadas con ROI garantizado.
                        </p>
                        {/* <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-[var(--slate-50)] flex items-center justify-center text-[var(--slate-600)] hover:bg-[var(--ai-glow)] hover:text-[var(--ai-primary)] transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[var(--slate-50)] flex items-center justify-center text-[var(--slate-600)] hover:bg-[var(--ai-glow)] hover:text-[var(--ai-primary)] transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div> */}
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-[var(--slate-900)] mb-6">Plataforma</h4>
                        <ul className="space-y-4">
                            <li><Link href="/#soluciones" className="text-sm text-[var(--slate-500)] hover:text-[var(--ai-primary)] transition-colors">Casos de Éxito de IA</Link></li>
                            <li><Link href="/#empresas" className="text-sm text-[var(--slate-500)] hover:text-[var(--ai-primary)] transition-colors">Soluciones para Clientes</Link></li>
                            <li><Link href="/#partners" className="text-sm text-[var(--slate-500)] hover:text-[var(--ai-primary)] transition-colors">Unirse como Proveedor</Link></li>
                            <li><Link href="/#faq" className="text-sm text-[var(--slate-500)] hover:text-[var(--ai-primary)] transition-colors">Preguntas Frecuentes</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-[var(--slate-900)] mb-6">Compañía</h4>
                        <ul className="space-y-4">
                            <li><Link href="/aviso-legal" className="text-sm text-[var(--slate-500)] hover:text-[var(--ai-primary)] transition-colors">Aviso Legal</Link></li>
                            <li><Link href="/privacidad" className="text-sm text-[var(--slate-500)] hover:text-[var(--ai-primary)] transition-colors">Privacidad</Link></li>
                            <li><Link href="/terminos" className="text-sm text-[var(--slate-500)] hover:text-[var(--ai-primary)] transition-colors">Términos</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-[var(--slate-900)] mb-6">Contacto</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="mailto:info@conectian.com" className="flex items-center gap-3 text-sm text-[var(--slate-500)] hover:text-[var(--ai-primary)] transition-colors">
                                    <Mail className="w-4 h-4" />
                                    info@conectian.com
                                </a>
                            </li>
                            <li className="pt-4">
                                <button
                                    onClick={onOpenWhitelist}
                                    className="btn-ai btn-ai-secondary w-full"
                                >
                                    Hablar con un experto
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[var(--slate-100)] flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-[var(--slate-400)]">
                        © {new Date().getFullYear()} CONECTIAN AI SOLUTIONS S.L. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-8">
                        <span className="text-[10px] font-bold text-[var(--slate-300)] uppercase tracking-widest">ISO 27001 Certified</span>
                        <span className="text-[10px] font-bold text-[var(--slate-300)] uppercase tracking-widest">GDPR Compliant</span>
                        <span className="text-[10px] font-bold text-[var(--slate-300)] uppercase tracking-widest">SOC2 Type II</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
