const subjects = [
  {
    flag: "DE",
    name: "Deutsch",
    detail: "3 jednotky — cvičení, nápovědy a vokabeltraining",
  },
  {
    flag: "NET",
    name: "Správa počítačových sítí",
    detail: "1. ročník, 27 lekcí včetně VLSM, teorie a kvízů",
  },
  {
    flag: "HW",
    name: "Technické vybavení",
    detail: "Architektura, historie a základy bit/byte",
  },
  {
    flag: "CZ",
    name: "Český jazyk a literatura",
    detail: "Mluvnice a 82 knih maturitní četby se zápisky a kvízy",
  },
];

export function Subjects() {
  return (
    <section id="predmety" className="px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Čtyři otevřené předměty</h2>
        <p className="section-lead">
          Další předměty jsou zatím zamčené placeholdery — obsah doroste.
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 list-none p-0 m-0">
          {subjects.map((subject) => (
            <li
              key={subject.name}
              className="glass rounded-2xl px-6 py-6 transition-[transform,background] duration-200 hover:-translate-y-0.5 hover:bg-[rgba(255,255,255,0.55)]"
            >
              <span className="inline-block text-xs font-bold tracking-[0.12em] text-teal mb-3">
                {subject.flag}
              </span>
              <h3 className="font-[family-name:var(--font-fraunces)] text-xl font-semibold text-ink m-0">
                {subject.name}
              </h3>
              <p className="mt-2 mb-0 text-ink-muted leading-relaxed">
                {subject.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
