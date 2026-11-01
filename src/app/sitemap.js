import { units } from "@/data/units";
import { languages } from "@/i18n/dict";

// upiši pravu adresu stranice nakon objave (ili postavi NEXT_PUBLIC_SITE_URL)
const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://apartmani-demo.vercel.app";

export default function sitemap() {
  return languages.flatMap((lang) => [
    { url: `${BASE}/${lang}` },
    ...units.map((u) => ({ url: `${BASE}/${lang}/apartmani/${u.slug}` })),
  ]);
}
