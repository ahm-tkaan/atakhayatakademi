const services = [
  {
    icon: "\u2734",
    title: "JAAS Seansı",
    description:
      "Jean Adrienne Arınma Sistemi ile bilinçaltı bloklarınızı temizleyin. Derinlemesine arınma seanslarıyla enerjinizi yenileyin ve dönüşümünüzü başlatın.",
  },
  {
    icon: "\u2726",
    title: "Kader Matriksi Analizi",
    description:
      "Doğum tarihinizden yola çıkarak kader matriksinizi hesaplayın. Yaşam derslerinizi, yeteneklerinizi ve potansiyelinizi ortaya koyun.",
  },
  {
    icon: "\u2738",
    title: "Karmik Numeroloji Analizi",
    description:
      "Sayıların gizli mesajlarını çözümleyin. Karmik borçlarınızı, yaşam döngülerinizi ve numerolojik haritanızı anlayın.",
  },
  {
    icon: "\u25C6",
    title: "Kuantum Dönüşüm - Online Seans",
    description:
      "Bilinçaltı programlamalarınızı dönüştürün. Online kuantum enerji çalışmalarıyla sınırlarınızı aşın, nerede olursanız olun.",
  },
  {
    icon: "\u25D5",
    title: "Aşk, Evlilik & İlişki Enerjileri",
    description:
      "İlişkilerinizin enerji dinamiklerini keşfedin. Aşk, evlilik ve kişilerarası bağlarınızdaki blokları çözümleyin.",
  },
  {
    icon: "\u2736",
    title: "EFT-NLP Uygulaması",
    description:
      "Duygusal Özgürleşme Tekniği ve Nöro-Linguistik Programlama ile olumsuz kalıplarınızı dönüştürün, yeni davranış kalıpları oluşturun.",
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="py-20 sm:py-28 relative">
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-10"
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
            Hizmetler
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
            Dönüşüm Yolculuğunuz
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Size özel hazırlanan analizler ve koçluk seanslarıyla hayatınıza yön
            verin.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-mystical rounded-2xl p-6 sm:p-8 group"
            >
              <div className="text-4xl mb-5 group-hover:scale-110 transition-transform inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6">
                <a
                  href="#iletisim"
                  className="text-purple-light hover:text-lavender text-sm font-medium inline-flex items-center gap-1 transition-colors"
                >
                  Detaylı Bilgi
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
