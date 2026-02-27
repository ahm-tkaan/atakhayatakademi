import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Burcu Buyan Yolal | Quantum Bilinçaltı Dönüşüm Koçu & Numerolog",
  description:
    "Sayıların ve enerjinin rehberliğinde bilinçaltınızın derinliklerine yolculuk yapın. JAAS, Kader Matrisi, Karmik Numeroloji, Quantum Dönüşüm, Enerji Takvimi ve Celebrity Code hizmetleri.",
  keywords: [
    "numeroloji",
    "quantum dönüşüm",
    "bilinçaltı koçluk",
    "kader matrisi",
    "karmik numeroloji",
    "JAAS",
    "enerji takvimi",
    "celebrity code",
    "Burcu Buyan Yolal",
  ],
  openGraph: {
    title: "Burcu Buyan Yolal | Quantum Bilinçaltı Dönüşüm Koçu & Numerolog",
    description:
      "Sayıların ve enerjinin rehberliğinde bilinçaltınızın derinliklerine yolculuk yapın.",
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
