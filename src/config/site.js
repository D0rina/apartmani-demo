// =====================================================================
// Postavke objekta - za novog klijenta mijenjaj ovu datoteku,
// apartmane u src/data/units.js i zauzete termine u src/data/bookings.js
// =====================================================================

export const site = {
  name: "Apartmani Lumen",
  location: "Opatija, Hrvatska",
  // Google Maps: upiši adresu ili naziv mjesta
  mapQuery: "Opatija, Croatia",

  contact: {
    host: "Ana",
    phone: "+385 91 000 0000",
    email: "info@apartmani-lumen.example",
    whatsapp: "385910000000", // broj bez + i razmaka
  },

  currency: "EUR",
  cleaningFee: 40, // jednokratno po boravku
  minNights: 3,

  // sezone po mjesecima (1 = siječanj); svi ostali mjeseci su "low"
  seasons: {
    high: [7, 8],
    mid: [6, 9],
  },

  // Formspree: upiši ID obrasca (npr. "xyzabcd") da upiti stižu na e-mail.
  // Ako je prazno, obrazac radi u demo načinu (samo prikaže potvrdu).
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID || "",

  heroImage: "/images/hero.jpg",
};
