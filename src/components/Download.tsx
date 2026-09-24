const platforms = [
  {
    name: "macOS",
    note: "Apple Silicon",
    href: "https://github.com/pepaskopec-blip/Graduately/raw/main/installers/graduately-installer-macos.zip",
  },
  {
    name: "Windows",
    note: "x64",
    href: "https://github.com/pepaskopec-blip/Graduately/raw/main/installers/graduately-installer-windows.zip",
  },
  {
    name: "Linux",
    note: "x86_64",
    href: "https://github.com/pepaskopec-blip/Graduately/raw/main/installers/graduately-installer-linux.zip",
  },
  {
    name: "Android",
    note: "8+",
    href: "https://github.com/pepaskopec-blip/Graduately/raw/main/installers/graduately-installer-android.zip",
  },
  {
    name: "iOS",
    note: "26+",
    href: "https://github.com/pepaskopec-blip/Graduately/raw/main/installers/graduately-installer-ios.zip",
  },
];

export function Download() {
  return (
    <section id="stahnout" className="px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="glass-strong rounded-[28px] p-8 sm:p-12">
          <h2 className="section-title">Stáhni a nainstaluj</h2>
          <p className="section-lead">
            Zip rozbalíš a spustíš instalátor. Buildy se aktualizují samy z
            větve builds.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-white/50 bg-white/35 px-5 py-4 no-underline text-ink backdrop-blur-md transition-[background,transform] duration-200 hover:bg-white/55 hover:-translate-y-0.5"
              >
                <span>
                  <span className="block font-semibold text-base">
                    {platform.name}
                  </span>
                  <span className="block text-sm text-ink-muted mt-0.5">
                    {platform.note}
                  </span>
                </span>
                <span
                  className="text-accent font-semibold text-sm tracking-wide transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden
                >
                  ↓
                </span>
              </a>
            ))}
          </div>

          <p className="mt-8 mb-0 text-sm text-ink-muted">
            Zdrojáky a dokumentace jsou na{" "}
            <a
              href="https://github.com/pepaskopec-blip/Graduately"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal font-semibold underline-offset-2 hover:underline"
            >
              GitHubu
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
