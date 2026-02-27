export default function About() {
  return (
    <section id="hakkimda" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-lavender text-sm tracking-[0.2em] uppercase mb-3">
            Hakkımda
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
            Kim Olduğumu Keşfedin
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden glow-purple">
              <div className="absolute inset-0 bg-gradient-to-br from-purple/30 to-night-light flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-3 opacity-60">&#9672;</div>
                  <p className="text-text-secondary text-sm">
                    Profesyonel Fotoğraf
                  </p>
                </div>
              </div>
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-2xl border border-purple/30" />
            </div>
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-purple/10 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-lavender/10 blur-xl" />
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              Burcu Buyan Yolal
            </h3>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Quantum Bilinçaltı Dönüşüm Koçu ve Numerolog olarak, bireylerin
                yaşam yolculuklarında dönüşüm geçirmelerine rehberlik ediyorum.
                Sayıların evrensel dilini ve enerji çalışmalarını birleştirerek,
                danışanlarımın potansiyellerini keşfetmelerine yardımcı oluyorum.
              </p>
              <p>
                Yıllardır süren eğitim ve deneyimlerimle; JAAS (Jungian
                Archetypal Astrology System), Kader Matrisi, Karmik Numeroloji
                ve Quantum Dönüşüm alanlarında uzmanlaştım.
              </p>
            </div>

            {/* Certificates / highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { number: "500+", label: "Danışan" },
                { number: "10+", label: "Yıl Deneyim" },
                { number: "6", label: "Uzmanlık Alanı" },
                { number: "15+", label: "Sertifika" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="card-mystical rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-purple-light">
                    {stat.number}
                  </div>
                  <div className="text-text-secondary text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
