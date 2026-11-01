import { DM_Serif_Display, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { languages, getDict } from "@/i18n/dict";
import { site } from "@/config/site";

const display = DM_Serif_Display({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
});

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = getDict(lang);
  return {
    title: { default: `${site.name} – ${site.location}`, template: `%s | ${site.name}` },
    description: t.hero.subtitle,
    alternates: { languages: Object.fromEntries(languages.map((l) => [l, `/${l}`])) },
  };
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  if (!languages.includes(lang)) notFound();

  return (
    <html lang={lang}>
      <body className={`${display.variable} ${body.variable} font-sans bg-white text-stone-800 antialiased`}>
        <Header lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
