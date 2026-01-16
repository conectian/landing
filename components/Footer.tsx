import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FooterProps {
    onOpenWaitlist: () => void;
}

export default function Footer({ onOpenWaitlist }: FooterProps) {
    const { t } = useLanguage();

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
                            {t.footer.brand_desc}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-[var(--slate-900)] mb-6">{t.footer.platform}</h4>
                        <ul className="space-y-4">
                            <li><Link href="/#soluciones" className="text-sm text-[var(--slate-500)] hover:text-[var(--ai-primary)] transition-colors">{t.nav.casos}</Link></li>
                            <li><Link href="/business" className="text-sm text-[var(--slate-500)] hover:text-[var(--ai-primary)] transition-colors">{t.nav.empresas}</Link></li>
                            <li><Link href="/#partners" className="text-sm text-[var(--slate-500)] hover:text-[var(--ai-primary)] transition-colors">{t.nav.partners}</Link></li>
                            <li><Link href="/#faq" className="text-sm text-[var(--slate-500)] hover:text-[var(--ai-primary)] transition-colors">{t.nav.faq}</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-[var(--slate-900)] mb-6">{t.footer.company}</h4>
                        <ul className="space-y-4">
                            <li><Link href="/aviso-legal" className="text-sm text-[var(--slate-500)] hover:text-[var(--ai-primary)] transition-colors">{t.footer.legal}</Link></li>
                            <li><Link href="/privacidad" className="text-sm text-[var(--slate-500)] hover:text-[var(--ai-primary)] transition-colors">{t.footer.privacy}</Link></li>
                            <li><Link href="/terminos" className="text-sm text-[var(--slate-500)] hover:text-[var(--ai-primary)] transition-colors">{t.footer.terms}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-[var(--slate-900)] mb-6">{t.footer.contact}</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="mailto:info@conectian.com" className="flex items-center gap-3 text-sm text-[var(--slate-500)] hover:text-[var(--ai-primary)] transition-colors">
                                    <Mail className="w-4 h-4" />
                                    info@conectian.com
                                </a>
                            </li>
                            <li className="pt-4">
                                <button
                                    onClick={onOpenWaitlist}
                                    className="btn-ai btn-ai-secondary w-full"
                                >
                                    {t.footer.cta_btn}
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[var(--slate-100)] flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-[var(--slate-400)]">
                        © {new Date().getFullYear()} CONECTIAN AI SOLUTIONS S.L. {t.footer.all_rights}.
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
