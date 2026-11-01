import Image from "next/image";
import Link from "next/link";
import UnitCard from "@/components/UnitCard";
import { units } from "@/data/units";
import { site } from "@/config/site";
import { getDict } from "@/i18n/dict";

export default async function Home({ params }) {
  const { lang } = await params;
  const t = getDict(lang);

  return (
    <>
      {/* Naslovna slika */}
      <section className="relative h-[70vh] min-h-[420px] flex items-end">
        <Image src={site.heroImage} alt={site.name} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 pb-16 text-white w-full">
          <p className="uppercase tracking-widest text-sm text-white/80">{site.location}</p>
          <h1 className="font-serif text-4xl md:text-6xl mt-3 max-w-3xl">{t.hero.title}</h1>
          <p className="mt-4 max-w-xl text-white/90 text-lg">{t.hero.subtitle}</p>
          <Link href="#apartmani" className="inline-block mt-8 bg-sun text-stone-900 font-medium px-8 py-3 rounded-full hover:bg-white transition-colors">
            {t.hero.cta}
          </Link>
        </div>
      </section>

      {/* Apartmani */}
      <section id="apartmani" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20">
        <h2 className="font-serif text-4xl text-sea mb-10">{t.units.title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {units.map((u) => (
            <UnitCard key={u.slug} unit={u} lang={lang} />
          ))}
        </div>
      </section>

      {/* Zašto izravno */}
      <section className="bg-sand">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="font-serif text-4xl text-sea mb-10">{t.why.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.why.items.map((item, i) => (
              <div key={item.title} className="bg-white rounded-2xl p-8">
                <p className="font-serif text-4xl text-sun">0{i + 1}</p>
                <h3 className="font-serif text-2xl text-sea mt-2">{item.title}</h3>
                <p className="text-stone-600 mt-3">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lokacija */}
      <section id="lokacija" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center scroll-mt-20">
        <div>
          <h2 className="font-serif text-4xl text-sea">{t.location.title}</h2>
          <p className="text-stone-600 mt-4 text-lg">{t.location.text}</p>
        </div>
        <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-stone-200">
          <iframe
            title={t.location.title}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=13&output=embed`}
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="max-w-6xl mx-auto px-6 pb-8 scroll-mt-20">
        <div className="rounded-2xl bg-sea text-white p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-serif text-4xl">{t.contact.title}</h2>
            <p className="mt-3 text-white/85">{t.contact.text}</p>
            <p className="mt-6 text-sm uppercase tracking-widest text-white/60">{t.contact.host}</p>
            <p className="font-serif text-2xl">{site.contact.host}</p>
          </div>
          <div className="flex flex-col gap-3">
            <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="bg-white/10 hover:bg-white/20 rounded-xl px-5 py-4">
              📞 {site.contact.phone}
            </a>
            <a href={`https://wa.me/${site.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 rounded-xl px-5 py-4">
              💬 WhatsApp
            </a>
            <a href={`mailto:${site.contact.email}`} className="bg-white/10 hover:bg-white/20 rounded-xl px-5 py-4">
              ✉️ {site.contact.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
