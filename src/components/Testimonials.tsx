const testimonials = [
  {
    name: "Ayşe K.",
    text: "Burcu Hanım ile yaptığımız Kader Matrisi analizi hayatıma bambaşka bir bakış açısı kazandırdı. Yıllardır anlamlandıramadığım olayları artık çok daha net görüyorum.",
    service: "Kader Matrisi",
  },
  {
    name: "Mehmet S.",
    text: "Quantum Dönüşüm seansları inanılmaz bir deneyimdi. İçsel bloklarımın farkına vardım ve hayatımda somut değişiklikler yaşamaya başladım.",
    service: "Quantum Dönüşüm",
  },
  {
    name: "Elif D.",
    text: "Numeroloji analizi o kadar isabetliydi ki şaşkınlıktan ağzım açık kaldı. Burcu Hanım'ın rehberliği ile kariyer değişikliği yaptım ve çok mutluyum.",
    service: "Karmik Numeroloji",
  },
  {
    name: "Zeynep T.",
    text: "Celebrity Code analizi ile kişisel markamı yeniden konumlandırdım. Sosyal medyada büyük bir sıçrama yaşadım. Kesinlikle tavsiye ederim!",
    service: "Celebrity Code",
  },
];

export default function Testimonials() {
  return (
    <section id="yorumlar" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-lavender text-sm tracking-[0.2em] uppercase mb-3">
            Yorumlar
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
            Danışanlarım Ne Diyor?
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="card-mystical rounded-2xl p-6 sm:p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple to-lavender flex items-center justify-center text-white text-sm font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <span className="text-text-primary font-medium text-sm">
                    {testimonial.name}
                  </span>
                </div>
                <span className="text-purple-light text-xs bg-purple/10 px-3 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
