import { site } from "@/config/site";
import { parseISO } from "@/lib/dates";

const localeOf = { hr: "hr-HR", en: "en-GB", de: "de-DE" };

export function formatPrice(amount, lang) {
  return new Intl.NumberFormat(localeOf[lang], {
    style: "currency",
    currency: site.currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(iso, lang) {
  return new Intl.DateTimeFormat(localeOf[lang], {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(parseISO(iso));
}

export function monthLabel(year, month, lang) {
  return new Intl.DateTimeFormat(localeOf[lang], {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month, 1)));
}

export function weekdayLabels(lang) {
  // ponedjeljak prvi
  const base = Date.UTC(2024, 0, 1); // 1.1.2024. je ponedjeljak
  return Array.from({ length: 7 }, (_, i) =>
    new Intl.DateTimeFormat(localeOf[lang], { weekday: "short", timeZone: "UTC" }).format(
      new Date(base + i * 86400000)
    )
  );
}
