import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "OZEIS CAFE - Kopi Enak, Tempat Nyaman, Momen Berkesan",
  description: "Selamat datang di Ozeis Cafe, oase produktivitas & kehangatan di Gowa. Didesain khusus bagi mahasiswa, profesional muda, dan teman bercengkerama.",
  keywords: "Ozeis Cafe, Cafe Gowa, Coffee Shop Gowa, Co-Working Space Gowa, Kopi Gowa, Ruko Flavour Walk Citra Garden",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${cormorantGaramond.variable} ${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-brand-charcoal text-brand-warm-light font-sans overflow-x-hidden flex flex-col">
        {children}
      </body>
    </html>
  );
}

