import type { Metadata, Viewport } from "next";
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



export const viewport: Viewport = {
  themeColor: "#0D0B0A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ozeiscafe.com"),
  title: "OZEIS Cafe",
  description: "OZEIS Cafe adalah coffee shop modern di Gowa yang menghadirkan kopi berkualitas, suasana nyaman, dan tempat ideal untuk bekerja, belajar, maupun bersantai bersama teman.",
  applicationName: "OZEIS Cafe",
  authors: [{ name: "OZEIS Cafe" }],
  generator: "Next.js",
  keywords: [
    "OZEIS Cafe",
    "Cafe Gowa",
    "Coffee Shop Gowa",
    "Cafe Makassar",
    "Coffee Shop Makassar",
    "Tempat Nongkrong Gowa",
    "Kopi Gowa",
    "Cafe Nyaman",
    "Working Space",
    "Coffee",
    "Cafe"
  ],
  category: "Restaurant",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "OZEIS Cafe",
    description: "Nikmati pengalaman ngopi dengan suasana nyaman, kopi berkualitas, dan pelayanan terbaik di OZEIS Cafe.",
    url: "https://ozeiscafe.com",
    siteName: "OZEIS Cafe",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "OZEIS Cafe Hero Image",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OZEIS Cafe",
    description: "Nikmati pengalaman ngopi dengan suasana nyaman, kopi berkualitas, dan pelayanan terbaik di OZEIS Cafe.",
    images: ["/images/hero.jpg"],
  },
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

