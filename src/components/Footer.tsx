export function Footer() {
  return (
    <footer className="px-5 sm:px-8 lg:px-12 pb-10 pt-4">
      <div className="max-w-6xl mx-auto glass rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="m-0 font-[family-name:var(--font-fraunces)] text-lg font-semibold text-ink">
          Graduately
        </p>
        <p className="m-0 text-sm text-ink-muted">
          Vzdělávací aplikace k přípravě na maturitu · open source (GPL-3.0)
        </p>
      </div>
    </footer>
  );
}
