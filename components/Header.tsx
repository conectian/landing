"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Soluciones", href: "#soluciones" },
    { name: "Casos de Éxito", href: "#casos" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Recursos", href: "#recursos" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="container mx-auto max-w-7xl px-4 lg:px-8">
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="Conectian"
                            width={140}
                            height={40}
                            className="h-8 lg:h-10 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[var(--navy-900)] hover:text-[var(--navy-700)] font-medium text-sm transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTAs */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link
                            href="#acceso"
                            className="btn btn-outline text-sm py-2 px-4"
                        >
                            Acceso Clientes
                        </Link>
                        <Link
                            href="#proveedor"
                            className="btn btn-secondary text-sm py-2 px-4"
                        >
                            Soy Proveedor
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-[var(--navy-900)]"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-100">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-[var(--navy-900)] hover:text-[var(--navy-700)] font-medium py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
                                <Link href="#acceso" className="btn btn-outline text-sm">
                                    Acceso Clientes
                                </Link>
                                <Link href="#proveedor" className="btn btn-secondary text-sm">
                                    Soy Proveedor
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
