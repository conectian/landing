"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language, TranslationKeys } from "@/lib/translations";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: React.ReactNode;
    initialLanguage?: Language;
}

export function LanguageProvider({ children, initialLanguage }: LanguageProviderProps) {
    const [language, setLanguage] = useState<Language>(initialLanguage || "es");

    useEffect(() => {
        // Priority:
        // 1. Saved preference
        // 2. Initial language (from server)
        // 3. Browser language detection
        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang && (savedLang === "es" || savedLang === "en")) {
            setLanguage(savedLang);
        } else if (initialLanguage) {
            setLanguage(initialLanguage);
        } else {
            const browserLang = navigator.language.split("-")[0];
            if (browserLang === "es") {
                setLanguage("es");
            } else {
                setLanguage("en");
            }
        }
    }, [initialLanguage]);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
