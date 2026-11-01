// =====================================================================
// Zauzeti termini (dolazak uključen, odlazak isključen - kao na Bookingu)
//
// Za pravog klijenta ovdje upisuješ stvarne datume, npr.:
//   "apartman-more": [{ from: "2027-07-03", to: "2027-07-10" }],
//
// Za demo se termini generiraju relativno od današnjeg dana,
// pa kalendar uvijek izgleda "živo".
// =====================================================================

import { addDays, toISO, todayISO } from "@/lib/dates";

const DEMO_MODE = true;

const fixedBookings = {
  "apartman-more": [],
  "studio-lovor": [],
};

// pomaci u danima od danas: [početak, broj noćenja]
const demoPattern = {
  "apartman-more": [[2, 4], [9, 7], [20, 5], [31, 7], [44, 3], [52, 10]],
  "studio-lovor": [[0, 3], [6, 4], [15, 7], [27, 3], [36, 6], [48, 4]],
};

export function getBookings(slug) {
  if (!DEMO_MODE) return fixedBookings[slug] || [];
  const today = todayISO();
  return (demoPattern[slug] || []).map(([start, nights]) => ({
    from: toISO(addDays(today, start)),
    to: toISO(addDays(today, start + nights)),
  }));
}
