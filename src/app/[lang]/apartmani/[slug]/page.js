import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookingWidget from "@/components/BookingWidget";
import { units, getUnit } from "@/data/units";
import { languages, getDict } from "@/i18n/dict";
import { plural } from "@/lib/plural";
import { site } from "@/config/site";
import { formatPrice } from "@/lib/format";

export function generateStaticParams() {
  return languages.flatMap((lang) => units.map((u) => ({ lang, slug: u.slug })));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const unit = getUnit(slug);
  if (!unit) return {};
  return { title: unit.name, description: unit.text[lang].short };
}

export default async function UnitPage({ params }) {
  const { lang, slug } = await params;
  const unit = getUnit(slug);
  if (!unit) notFound();
  const t = getDict(lang);

  const seasons = [
    { key: "low", label: t.unit.seasonLow },
    { key: "mid", label: t.unit.seasonMid },
    { key: "high", label: t.unit.seasonHigh },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Link href={`/${lang}#apartmani`} className="text-sm text-stone-500 hover:text-sea">
        {t.unit.back}
      </Link>
      <h1 className="font-serif text-4xl md:text-5xl text-sea mt-4">{unit.name}</h1>
      <p className="text-stone-500 mt-2">
        {plural(lang, unit.guests, t.units.guests)} · {plural(lang, unit.bedrooms, t.units.bedrooms)} · {unit.size} {t.units.size}
      </p>

      {/* Galerija */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
        <div className="col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto rounded-2xl overflow-hidden bg-sand">
          <Image src={unit.images[0]} alt={unit.name} width={1200} height={900} priority className="w-full h-full object-cover" />
        </div>
        {unit.images.slice(1).map((src) => (
          <div key={src} className="aspect-[4/3] rounded-2xl overflow-hidden bg-sand">
            <Image src={src} alt={unit.name} width={600} height={450} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-12 mt-12">
        {/* Opis, sadržaji, cijene */}
        <div className="lg:col-span-2">
          <p className="text-lg text-stone-700 leading-relaxed">{unit.text[lang].description}</p>

          <h2 className="font-serif text-2xl text-sea mt-10">{t.unit.amenities}</h2>
          <ul className="grid grid-cols-2 gap-3 mt-4">
            {unit.amenities.map((a) => (
              <li key={a} className="flex items-center gap-2 text-stone-700">
                <span className="text-sun">●</span> {t.amenities[a]}
              </li>
            ))}
          </ul>

          <h2 className="font-serif text-2xl text-sea mt-10">{t.unit.prices}</h2>
          <table className="w-full mt-4 text-sm">
            <tbody>
              {seasons.map((s) => (
                <tr key={s.key} className="border-b border-stone-200">
                  <td className="py-3 text-stone-600">{s.label}</td>
                  <td className="py-3 text-right font-medium">{formatPrice(unit.prices[s.key], lang)}</td>
                </tr>
              ))}
              <tr className="border-b border-stone-200">
                <td className="py-3 text-stone-600">{t.unit.cleaning}</td>
                <td className="py-3 text-right font-medium">{formatPrice(site.cleaningFee, lang)}</td>
              </tr>
              <tr>
                <td className="py-3 text-stone-600">{t.unit.minNights}</td>
                <td className="py-3 text-right font-medium">
                  {site.minNights} {t.unit.nights}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Kalendar i upit */}
        <div className="lg:col-span-3" id="upit">
          <h2 className="font-serif text-2xl text-sea mb-4">{t.unit.availability}</h2>
          <BookingWidget unitSlug={unit.slug} lang={lang} />
        </div>
      </div>
    </div>
  );
}
