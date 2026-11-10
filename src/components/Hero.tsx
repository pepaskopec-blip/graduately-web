import Image from "next/image";

const GITHUB = "https://github.com/pepaskopec-blip/Graduately";

export function Hero() {
  return (
    <header className="relative flex flex-col">
      <nav className="relative z-10 rise flex items-center justify-between px-5 sm:px-8 lg:px-12 pt-6 pb-4">
        <a
          href="#top"
          className="font-[family-name:var(--font-fraunces)] text-xl sm:text-2xl font-semibold tracking-tight text-ink no-underline"
        >
          Graduately
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          <a href="#stahnout" className="btn-ghost !py-2.5 !px-3.5 text-sm">
            Stáhnout
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2.5 !px-3.5 text-sm"
          >
            GitHub
          </a>
        </div>
      </nav>

      <div className="relative z-10 grid flex-1 items-center gap-10 px-5 pb-16 pt-8 sm:px-8 lg:min-h-[calc(100svh-5.5rem)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:px-12 lg:pb-20">
        <div className="max-w-xl">
          <h1 className="rise rise-delay-1 font-[family-name:var(--font-fraunces)] text-[clamp(2.8rem,7vw,4.75rem)] font-semibold leading-[0.95] tracking-[-0.035em] text-ink m-0">
            Graduately
          </h1>
          <p className="rise rise-delay-2 mt-5 font-[family-name:var(--font-fraunces)] text-[clamp(1.65rem,3.2vw,2.35rem)] font-medium leading-snug tracking-[-0.02em] text-ink m-0">
            Maturita? To dáme.
          </p>
          <p className="rise rise-delay-3 mt-4 text-base sm:text-lg text-ink-muted leading-relaxed max-w-md m-0">
            Procvičování k maturitě v jednom okně — všech 13 předmětů
            otevřených, česky i anglicky, se statistikami a automatickými
            aktualizacemi.
          </p>
          <div className="rise rise-delay-4 mt-8 flex flex-wrap gap-3">
            <a href="#stahnout" className="btn-primary">
              Stáhnout aplikaci
            </a>
            <a href="#predmety" className="btn-ghost">
              Co umí
            </a>
          </div>
        </div>

        <div className="rise rise-delay-2 relative aspect-[2920/2188] overflow-hidden rounded-[28px] glass">
          <Image
            src="/screenshots/welcome-app.png"
            alt="Úvodní obrazovka aplikace Graduately se 13 otevřenými předměty"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 52vw"
          />
        </div>
      </div>
    </header>
  );
}
