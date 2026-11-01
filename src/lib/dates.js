// Datumi kao "YYYY-MM-DD" stringovi, računanje u UTC-u (bez problema s vremenskim zonama)

export function parseISO(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

export function toISO(date) {
  return date.toISOString().slice(0, 10);
}

export function todayISO() {
  const now = new Date();
  return toISO(new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())));
}

export function addDays(isoOrDate, days) {
  const d = typeof isoOrDate === "string" ? parseISO(isoOrDate) : new Date(isoOrDate);
  d.setUTCDate(d.getUTCDate() + days);
  return d;
}

export function nightsBetween(fromISO, toISO_) {
  return Math.round((parseISO(toISO_) - parseISO(fromISO)) / 86400000);
}

// je li noć koja počinje datumom `iso` zauzeta
export function isNightBooked(iso, bookings) {
  return bookings.some((b) => iso >= b.from && iso < b.to);
}

// lista noći [from, to)
export function eachNight(fromISO, toISO_) {
  const out = [];
  for (let d = parseISO(fromISO); toISO(d) < toISO_; d.setUTCDate(d.getUTCDate() + 1)) {
    out.push(toISO(d));
  }
  return out;
}
