import Link from "next/link";
import Image from "next/image";
import { getDict } from "@/i18n/dict";
import { plural } from "@/lib/plural";
import { formatPrice } from "@/lib/format";

export default function UnitCard({ unit, lang }) {
    const t = getDict(lang);
    const fromPrice = Math.min(...Object.values(unit.prices));

    return (
        <Link href={`/${lang}/apartmani/${unit.slug}`} className="group block rounded-2xl overflow-hidden border border-stone-200 bg-white hover:shadow-lg transition-shadow">
            <div className="aspect-[4/3] overflow-hidden bg-sand">
                <Image
                    src={unit.images[0]}
                    alt={unit.name}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="p-6">
                <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-2xl text-sea">{unit.name}</h3>
                    <p className="text-sm text-stone-500 whitespace-nowrap">
                        {t.units.from} <span className="text-lg font-semibold text-stone-800">{formatPrice(fromPrice, lang)}</span> {t.units.perNight}
                    </p>
                </div>
                <p className="text-stone-600 mt-2">{unit.text[lang].short}</p>
                <p className="text-sm text-stone-500 mt-4">
                    {plural(lang, unit.guests, t.units.guests)} · {plural(lang, unit.bedrooms, t.units.bedrooms)} · {unit.size} {t.units.size}
                </p>
                <p className="mt-4 text-sea font-medium group-hover:underline">{t.units.details} →</p>
            </div>
        </Link>
    );
}
