import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Conectian | IA con Resultados Medibles para Empresas",
  description: "Conectian transforma desafíos empresariales en soluciones de IA con ROI demostrable. Plataforma B2B líder en inteligencia artificial aplicada.",
  keywords: "IA empresarial, inteligencia artificial, B2B, ROI, transformación digital",
  openGraph: {
    title: "Conectian | IA con Resultados Medibles",
    description: "Plataforma B2B líder en soluciones de IA con resultados medibles",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
