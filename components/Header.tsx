import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface HeaderProps {
    onOpenWhitelist: () => void;
}

const languages = [
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
];

export default function Header({ onOpenWhitelist }: HeaderProps) {
    const { language, setLanguage, t } = useLanguage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);

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

    // Close mobile menu on resize if larger than lg
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [mobileMenuOpen]);

    const handleLanguageChange = (code: string) => {
        setLanguage(code as any);
        setLangMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${scrolled ? "glass-panel py-3 shadow-sm border-b border-[var(--slate-100)]" : "bg-transparent py-5"
                }`}
        >
            <div className="section-container !py-0">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group relative z-50">
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
                        {/* Language Selector */}
                        <div className="relative mr-2">
                            <button
                                onClick={() => setLangMenuOpen(!langMenuOpen)}
                                className="px-3 py-1.5 rounded-full border border-[var(--slate-200)] text-[var(--slate-600)] hover:text-[var(--ai-primary)] hover:border-[var(--ai-primary)] transition-all flex items-center gap-2 text-sm font-medium"
                            >
                                <Globe size={16} />
                                <span className="uppercase">{language}</span>
                                <svg
                                    className={`w-3 h-3 transition-transform ${langMenuOpen ? "rotate-180" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {langMenuOpen && (
                                <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-2xl shadow-premium border border-[var(--slate-100)] py-2 animate-in fade-in zoom-in-95 duration-200">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => handleLanguageChange(lang.code)}
                                            className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-[var(--slate-50)] transition-colors ${language === lang.code ? "text-[var(--ai-primary)] font-bold" : "text-[var(--slate-600)]"
                                                }`}
                                        >
                                            <span className="text-base">{lang.flag}</span>
                                            {lang.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

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
                        className="lg:hidden p-2 text-[var(--slate-900)] relative z-50"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-white z-[40] transition-all duration-500 ease-in-out transform lg:hidden ${mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
                    }`}
            >
                <div className="h-full flex flex-col p-8 pt-24 overflow-y-auto">
                    <div className="flex flex-col gap-6 mb-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-3xl font-black text-[var(--slate-900)] active:text-[var(--ai-primary)]"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4 mt-auto">
                        <Link
                            href="/business"
                            className="bg-[var(--slate-50)] text-[var(--slate-900)] font-bold py-4 rounded-2xl flex items-center justify-center border border-[var(--slate-100)] text-lg"
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
                            onClick={() => {
                                onOpenWhitelist();
                                setMobileMenuOpen(false);
                            }}
                            className="btn-ai btn-ai-primary w-full text-lg py-4"
                        >
                            {t.nav.cta}
                        </button>

                        <div className="grid grid-cols-2 gap-3 mt-8">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        handleLanguageChange(lang.code);
                                        setMobileMenuOpen(false);
                                    }}
                                    className={`flex items-center gap-3 p-3 rounded-2xl border transition-all ${language === lang.code
                                        ? "bg-[var(--ai-glow)] border-[var(--ai-primary)] text-[var(--ai-primary)] font-bold"
                                        : "border-[var(--slate-100)] text-[var(--slate-600)]"
                                        }`}
                                >
                                    <span>{lang.flag}</span>
                                    <span className="text-sm font-bold uppercase">{lang.code}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
