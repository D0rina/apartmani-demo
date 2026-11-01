import { site } from "@/config/site";
import { eachNight, parseISO } from "@/lib/dates";

export function seasonOf(iso) {
  const month = parseISO(iso).getUTCMonth() + 1;
  if (site.seasons.high.includes(month)) return "high";
  if (site.seasons.mid.includes(month)) return "mid";
  return "low";
}

// izračun cijene boravka: zbroj noćenja po sezonama + čišćenje
export function quote(unit, fromISO, toISO) {
  const nights = eachNight(fromISO, toISO);
  const accommodation = nights.reduce((sum, n) => sum + unit.prices[seasonOf(n)], 0);
  return {
    nights: nights.length,
    accommodation,
    cleaning: site.cleaningFee,
    total: accommodation + site.cleaningFee,
  };
}
