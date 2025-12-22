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
        const savedLang = localStorage.getItem("language") as Language;
        const validLanguages: Language[] = ["es", "en", "fr", "it", "de", "ja", "zh"];

        if (savedLang && validLanguages.includes(savedLang)) {
            setLanguage(savedLang);
        } else if (initialLanguage && validLanguages.includes(initialLanguage)) {
            setLanguage(initialLanguage);
        } else {
            const browserLang = navigator.language.split("-")[0] as Language;
            if (validLanguages.includes(browserLang)) {
                setLanguage(browserLang);
            } else {
                setLanguage("es");
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
