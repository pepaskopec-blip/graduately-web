import Image from "next/image";

const features = [
  {
    title: "Ročníky, učebnice a četba",
    text: "Každý předmět má vlastní cestu rozdělenou na ročníky, lekce nebo knihy. U němčiny nechybí učebnice Neue Freunde, Aus aller Welt a Bei uns zu Hause i čtyři ročníky od A1 po B1.",
    image: "/screenshots/subjects-app.png",
    alt: "Přehled učebnic a ročníků němčiny v Graduately",
    width: 2920,
    height: 1090,
  },
  {
    title: "Cvičení, poslech i živý kód",
    text: "Výklad, poslech, čtení, psaní, doplňování, kvízy a vokabeltraining. V programování se navíc píše a spouští C# přímo vedle výkladu a u geometrie lze rýsovat na mřížku.",
    image: "/screenshots/german-app.png",
    alt: "Německá učební cesta Neue Freunde v Graduately",
    width: 3000,
    height: 1860,
  },
];

export function Features() {
  return (
    <section id="funkce" className="px-5 sm:px-8 lg:px-12 py-8 sm:py-12 pb-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Jak to vypadá uvnitř</h2>
        <p className="section-lead">
          Statistiky, hledání (lupa nebo Cmd/Ctrl+K), deset barevných témat,
          tmavý i světlý režim a přepínač čeština / angličtina.
        </p>

        <div className="mt-12 grid gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`glass-strong rounded-[28px] overflow-hidden grid lg:grid-cols-2 items-center ${
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
              <div className="p-4 sm:p-6">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={feature.width}
                  height={feature.height}
                  className="w-full h-auto rounded-2xl block"
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
