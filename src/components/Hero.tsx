export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="star absolute w-1 h-1 bg-purple-light/60 rounded-full"
            style={{
              left: `${(i * 37 + 13) % 100}%`,
              top: `${(i * 53 + 7) % 100}%`,
              ["--duration" as string]: `${2 + (i % 4)}s`,
              ["--delay" as string]: `${(i % 5) * 0.5}s`,
              width: i % 3 === 0 ? "2px" : "1px",
              height: i % 3 === 0 ? "2px" : "1px",
            }}
          />
        ))}
      </div>

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Decorative symbol */}
        <div className="animate-float mb-6">
          <div className="inline-block text-5xl sm:text-6xl opacity-80">
            &#10022;
          </div>
        </div>

        <p className="text-lavender text-sm sm:text-base tracking-[0.3em] uppercase mb-4 font-medium">
          Profesyonel Yaşam &amp; Kuantum Bilinçaltı Dönüşüm Koçu
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Burcu Buyan Yolal</span>
        </h1>

        <p className="text-text-secondary text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
          Jean Adrienne Arınma Sistemi (JAAS) Seansı &bull; EFT-NLP Uygulayıcısı
        </p>
        <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Doğum Günü - Kader Matriksi &amp; Karmik Numeroloji Harita Analizi
          <br />
          Aşk &bull; Evlilik &bull; İlişkiler &bull; Para Enerjileri
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#iletisim"
            className="bg-purple hover:bg-purple-light text-white px-8 py-3.5 rounded-full font-medium transition-all glow-purple hover:scale-105"
          >
            Randevu Talep Et
          </a>
          <a
            href="#hizmetler"
            className="border border-purple/50 hover:border-purple-light text-purple-light hover:text-white px-8 py-3.5 rounded-full font-medium transition-all hover:bg-purple/10"
          >
            Hizmetleri İncele
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 sm:mt-24 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
