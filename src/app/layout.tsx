import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Burcu Buyan Yolal | Profesyonel Yaşam & Kuantum Bilinçaltı Dönüşüm Koçu",
  description:
    "Profesyonel Yaşam & Kuantum Bilinçaltı Dönüşüm Koçu, EFT-NLP Uygulayıcısı. JAAS Seansı, Kader Matriksi Analizi, Karmik Numeroloji Analizi, Kuantum Dönüşüm Online Seans hizmetleri.",
  keywords: [
    "kuantum bilinçaltı dönüşüm koçu",
    "JAAS seansı",
    "kader matriksi analizi",
    "karmik numeroloji",
    "EFT-NLP",
    "kuantum dönüşüm",
    "Burcu Buyan Yolal",
    "bilinçaltı koçluk",
    "ilişki enerjileri",
  ],
  openGraph: {
    title: "Burcu Buyan Yolal | Profesyonel Yaşam & Kuantum Bilinçaltı Dönüşüm Koçu",
    description:
      "JAAS Seansı, Kader Matriksi, Karmik Numeroloji ve Kuantum Dönüşüm hizmetleri.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
