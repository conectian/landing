import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface HeaderProps {
    onOpenWhitelist: () => void;
}

export default function Header({ onOpenWhitelist }: HeaderProps) {
    const { language, setLanguage, t } = useLanguage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        { name: t.nav.casos, href: "/#soluciones" },
        { name: t.nav.metodo, href: "/#nosotros" },
        { name: t.nav.partners, href: "/#partners" },
        { name: t.nav.faq, href: "/#faq" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === "es" ? "en" : "es");
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-panel py-3 shadow-sm" : "bg-transparent py-5"
                }`}
        >
            <div className="section-container !py-0">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image
                            src="/logo.png"
                            alt="Conectian Logo"
                            width={140}
                            height={40}
                            className="h-8 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[var(--slate-600)] hover:text-[var(--ai-primary)] font-medium text-sm transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--ai-primary)] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTAs */}
                    <div className="hidden lg:flex items-center gap-3">
                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className="p-2 mr-2 rounded-full border border-[var(--slate-200)] text-[var(--slate-600)] hover:text-[var(--ai-primary)] hover:border-[var(--ai-primary)] transition-all flex items-center gap-2"
                            title={language === "es" ? "Switch to English" : "Cambiar a Español"}
                        >
                            <Globe size={18} />
                            <span className="text-xs font-bold uppercase">{language}</span>
                        </button>

                        <Link
                            href="/business"
                            className="px-4 py-2 rounded-full text-sm font-medium border border-[var(--slate-200)] hover:border-[var(--ai-primary)] hover:bg-[var(--ai-glow)] transition-all"
                        >
                            {t.nav.empresas}
                        </Link>
                        <Link
                            href="/partners"
                            className="px-4 py-2 rounded-full text-sm font-medium border border-[var(--slate-200)] hover:border-[var(--ai-primary)] hover:bg-[var(--ai-glow)] transition-all"
                        >
                            {t.nav.partners}
                        </Link>
                        <button
                            onClick={onOpenWhitelist}
                            className="btn-ai btn-ai-primary !py-2.5 !px-6 text-sm ml-2"
                        >
                            {t.nav.cta}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-[var(--slate-900)]"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden mt-4 p-6 glass-panel rounded-2xl shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-semibold text-[var(--slate-900)] hover:text-[var(--ai-primary)]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-3 pt-6 border-t border-[var(--slate-200)]">
                                <Link
                                    href="/business"
                                    className="btn-ai btn-ai-secondary w-full text-center"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {t.nav.empresas}
                                </Link>
                                <Link
                                    href="/partners"
                                    className="btn-ai btn-ai-secondary w-full text-center"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {t.nav.partners}
                                </Link>
                                <button
                                    onClick={() => { onOpenWhitelist(); setMobileMenuOpen(false); }}
                                    className="btn-ai btn-ai-primary w-full"
                                >
                                    {t.nav.cta}
                                </button>

                                {/* Mobile Language Toggle */}
                                <button
                                    onClick={() => { toggleLanguage(); setMobileMenuOpen(false); }}
                                    className="mt-4 flex items-center justify-center gap-2 p-3 rounded-xl border border-[var(--slate-200)] text-[var(--slate-900)] font-bold uppercase transition-all"
                                >
                                    <Globe size={18} />
                                    {language === "es" ? "English" : "Español"}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
