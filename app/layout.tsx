import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from 'next/headers';
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const country = headersList.get('x-vercel-ip-country');
  const lang = (country === 'ES' || headersList.get('accept-language')?.startsWith('es')) ? 'es' : 'en';

  const trans = {
    es: {
      title: "Conectian | Marketplace de Casos de Éxito de IA para Empresas",
      desc: "Conectamos empresas con proveedores de IA verificados basándonos en casos de éxito reales. La plataforma líder para la adopción de IA con ROI garantizado.",
    },
    en: {
      title: "Conectian | AI Success Cases Marketplace for Business",
      desc: "We connect companies with verified AI providers based on real success cases. The leading platform for AI adoption with guaranteed ROI.",
    }
  };

  const t = trans[lang as keyof typeof trans] || trans.en;

  return {
    title: t.title,
    description: t.desc,
    keywords: ["IA para empresas", "AI for business", "Marketplace IA", "Proveedores de IA", "AI providers", "Casos de éxito IA", "AI success cases"],
    authors: [{ name: "Conectian" }],
    viewport: "width=device-width, initial-scale=1",
    robots: "index, follow",
    alternates: {
      canonical: "https://conectian.com",
    },
    openGraph: {
      title: t.title,
      description: t.desc,
      url: "https://conectian.com",
      siteName: "Conectian",
      locale: lang === 'es' ? "es_ES" : "en_US",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Conectian - IA que ya funciona",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.desc,
      images: ["/og-image.png"],
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Conectian",
  "url": "https://conectian.com",
  "logo": "https://conectian.com/logo.png",
  "description": "Marketplace que conecta proveedores de IA con empresas a través de casos de éxito verificados.",
  "sameAs": [
    "https://www.linkedin.com/company/conectian",
    "https://twitter.com/conectian"
  ],
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://conectian.com/#soluciones",
    "query-input": "required name=search_term_string"
  }
};

import { LanguageProvider } from "@/context/LanguageContext";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const country = headersList.get('x-vercel-ip-country');
  const initialLang = (country === 'ES' || headersList.get('accept-language')?.startsWith('es')) ? 'es' : 'en';

  return (
    <html lang={initialLang}>
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider initialLanguage={initialLang as 'es' | 'en'}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
