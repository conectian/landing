import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Conectian | Marketplace de Casos de Éxito de IA para Empresas",
  description: "Conectamos empresas con proveedores de IA verificados basándonos en casos de éxito reales. La plataforma líder para la adopción de IA con ROI garantizado.",
  keywords: ["IA para empresas", "Marketplace IA", "Proveedores de IA", "Casos de éxito IA", "Adopción IA", "ROI IA"],
  authors: [{ name: "Conectian" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  alternates: {
    canonical: "https://conectian.com",
  },
  openGraph: {
    title: "Conectian | El Marketplace de IA que ya funciona",
    description: "Conectamos empresas con soluciones de IA probadas y proveedores verificados. Resultados reales y ROI garantizado.",
    url: "https://conectian.com",
    siteName: "Conectian",
    locale: "es_ES",
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
    title: "Conectian | Marketplace de Casos de Éxito de IA",
    description: "Conectamos empresas con proveedores de IA verificados. Sin experimentos, solo resultados.",
    images: ["/og-image.png"],
  },
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
