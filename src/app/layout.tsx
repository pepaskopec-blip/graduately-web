import type { Metadata } from "next";
import { Fraunces, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Graduately — příprava na maturitu",
  description:
    "Vzdělávací aplikace k přípravě na maturitu. 13 otevřených předmětů — jazyky, sítě, hardware, grafika, programování v C#, čeština, matematika, fyzika, přírodní vědy i občanská nauka — na macOS, Windows, Linux, Android i iOS.",
  openGraph: {
    title: "Graduately",
    description:
      "Procvičování k maturitě v jednom okně — všech 13 předmětů otevřených.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="cs"
      className={`${sora.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
