const subjects = [
  {
    flag: "DE",
    name: "Deutsch",
    detail:
      "Učebnice (Neue Freunde, Aus aller Welt, Bei uns zu Hause) a 4 ročníky, 24 lekcí od A1 k B1: poslech, čtení, psaní, doplňování a kvízy",
  },
  {
    flag: "NET",
    name: "Správa počítačových sítí",
    detail:
      "4 ročníky: 1. ročník má 27 lekcí (adresy, modely, přepínače a bezdrát), ročníky 2–4 po 8 lekcích (VLAN, směrování, firewall, návrh a maturita)",
  },
  {
    flag: "HW",
    name: "Technické vybavení",
    detail:
      "4 ročníky: 1. ročník má 29 lekcí (architektura, data, skříň, deska, karty, disky a vstup), ročníky 2–4 po 8 lekcích (monitory, sestavení, RAID, servery, údržba)",
  },
  {
    flag: "CAD",
    name: "Technická grafika",
    detail:
      "4 ročníky AutoCADu, v každém 8 lekcí: výkres a souřadnice, úpravy a kóty, pohledy a tisk, 3D a maturitní zadání",
  },
  {
    flag: "GFX",
    name: "Prezentační grafika",
    detail:
      "4 ročníky, v každém 8 lekcí: Photoshop od pixelu po plakát, Premiere Pro a ve čtvrtém ročníku Illustrator, After Effects a InDesign",
  },
  {
    flag: "SW",
    name: "Programové vybavení",
    detail:
      "4 ročníky, v každém 8 lekcí: Windows a licence, Word a Excel, Access a MySQL, pak WordPress, Power BI, dávkové soubory a zásady",
  },
  {
    flag: "C#",
    name: "Programování",
    detail:
      "4 ročníky C# po vzoru W3Schools — u každé lekce se kód píše a spouští vedle výkladu, od výpisu po třídy, LINQ a async",
  },
  {
    flag: "CZ",
    name: "Český jazyk a literatura",
    detail:
      "Literatura (4 ročníky, 32 lekcí podle osnov středních škol), mluvnice (20 cvičení) a maturitní četba (82 knih: zápisky, kvíz, sestavení děje)",
  },
  {
    flag: "MAT",
    name: "Matematika",
    detail:
      "Opakování základní školy a 4 ročníky, 40 lekcí; příklady se píšou a kontrolují, u geometrie jde i rýsovat na mřížku",
  },
  {
    flag: "FYZ",
    name: "Fyzika",
    detail:
      "4 ročníky, 32 lekcí podle osnov středních škol (mechanika, teplo a vlny, elektřina a magnetismus, optika až astrofyzika)",
  },
  {
    flag: "ZPV",
    name: "Základy přírodních věd",
    detail:
      "Chemie a biologie, v každé 8 lekcí (od atomu a buňky po biochemii a ekologii) s výkladem a kvízem",
  },
  {
    flag: "OBN",
    name: "Občanská nauka",
    detail:
      "4 ročníky (17 + 16 + 16 + 16 lekcí): člověk v lidském společenství, občan, právo, hospodářství, svět a filozofie",
  },
  {
    flag: "EN",
    name: "Angličtina",
    detail:
      "4 ročníky, 32 lekcí podle osnov gymnázia (A2 až maturita): poslech, čtení, psaní, doplňování, kvízy a ročníkové testy",
  },
];

export function Subjects() {
  return (
    <section id="predmety" className="px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Třináct otevřených předmětů</h2>
        <p className="section-lead">
          Všechny předměty v aplikaci jsou odemčené — od jazyků a IT přes
          grafiku a programování až po matematiku, fyziku a společenské vědy.
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
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
