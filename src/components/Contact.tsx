export default function Contact() {
  return (
    <section id="iletisim" className="py-20 sm:py-28 relative">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,92,246,0.5) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-lavender text-sm tracking-[0.2em] uppercase mb-3">
            İletişim
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
            Dönüşümünüzü Başlatın
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Sorularınız için bana ulaşın veya ücretsiz keşif görüşmesi
            randevunuzu alın.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            {/* Phone */}
            <a
              href="tel:+905451902805"
              className="card-mystical rounded-xl p-5 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-purple/20 flex items-center justify-center text-purple-light group-hover:bg-purple/30 transition-colors shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-text-secondary text-sm">Telefon</p>
                <p className="text-text-primary font-medium">
                  +90 545 190 28 05
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:burcubuyanyolal@gmail.com"
              className="card-mystical rounded-xl p-5 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-purple/20 flex items-center justify-center text-purple-light group-hover:bg-purple/30 transition-colors shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-text-secondary text-sm">E-posta</p>
                <p className="text-text-primary font-medium">
                  burcubuyanyolal@gmail.com
                </p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/burcubuyanyolal"
              target="_blank"
              rel="noopener noreferrer"
              className="card-mystical rounded-xl p-5 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-purple/20 flex items-center justify-center text-purple-light group-hover:bg-purple/30 transition-colors shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <div>
                <p className="text-text-secondary text-sm">Instagram</p>
                <p className="text-text-primary font-medium">
                  @burcubuyanyolal
                </p>
              </div>
            </a>

            {/* Website */}
            <a
              href="https://burcubuyanyolal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card-mystical rounded-xl p-5 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-purple/20 flex items-center justify-center text-purple-light group-hover:bg-purple/30 transition-colors shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div>
                <p className="text-text-secondary text-sm">Web Sitesi</p>
                <p className="text-text-primary font-medium">
                  burcubuyanyolal.com
                </p>
              </div>
            </a>
          </div>

          {/* CTA Card */}
          <div className="card-mystical rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <div className="text-5xl mb-6 opacity-80">&#10022;</div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Randevu Talep Edin
            </h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Birebir seans için lütfen randevu talep ediniz. Eğitimler
              hakkında bilgi almak için de iletişime geçebilirsiniz.
            </p>
            <a
              href="https://wa.me/905451902805?text=Merhaba%2C%20seans%20randevusu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white px-8 py-3.5 rounded-full font-medium transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp ile İletişime Geç
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
