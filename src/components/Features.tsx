import Image from "next/image";

const features = [
  {
    title: "Učební cesty",
    text: "Mapa předmětů, uzly lekcí a zamčené placeholdery, které čekají na obsah.",
    image: "/screenshots/subjects.png",
    alt: "Obrazovka s mapou předmětů",
  },
  {
    title: "Cvičení s nápovědou",
    text: "Německá cesta s vokabeltrainingem, tipy a postupem, který se ukládá.",
    image: "/screenshots/german.png",
    alt: "Německá učební cesta v Graduately",
  },
];

export function Features() {
  return (
    <section id="funkce" className="px-5 sm:px-8 lg:px-12 py-8 sm:py-12 pb-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Jak to vypadá uvnitř</h2>
        <p className="section-lead">
          Statistiky, hledání, deset témat a přepínač čeština / angličtina.
        </p>

        <div className="mt-12 grid gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`glass-strong rounded-[28px] overflow-hidden grid lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <h3 className="font-[family-name:var(--font-fraunces)] text-2xl sm:text-3xl font-semibold text-ink m-0">
                  {feature.title}
                </h3>
                <p className="mt-3 mb-0 text-ink-muted text-lg leading-relaxed">
                  {feature.text}
                </p>
              </div>
              <div className="relative min-h-[240px] sm:min-h-[320px]">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
