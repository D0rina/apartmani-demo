// =====================================================================
// Smještajne jedinice - tekstovi na hr / en / de
// Slike: public/images/<slug>-1.jpg, -2.jpg, -3.jpg (prva je naslovna)
// =====================================================================

export const units = [
  {
    slug: "apartman-more",
    name: "Apartman More",
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    size: 58,
    prices: { low: 70, mid: 95, high: 130 }, // cijena po noćenju
    amenities: ["seaView", "balcony", "aircon", "wifi", "kitchen", "parking"],
    images: ["/images/apartman-more-1.jpg", "/images/apartman-more-2.jpg", "/images/apartman-more-3.jpg"],
    text: {
      hr: {
        short: "Prostrani apartman s balkonom i pogledom na Kvarnerski zaljev.",
        description:
          "Apartman More smješten je na prvom katu obiteljske kuće, pet minuta hoda od plaže i šetnice Lungomare. Dvije spavaće sobe, dnevni boravak s potpuno opremljenom kuhinjom i balkon s kojeg se pruža pogled na more idealni su za obitelji ili dva para.",
      },
      en: {
        short: "A spacious apartment with a balcony overlooking the Kvarner Bay.",
        description:
          "Apartment More is on the first floor of a family house, a five-minute walk from the beach and the Lungomare promenade. Two bedrooms, a living room with a fully equipped kitchen and a sea-view balcony make it ideal for families or two couples.",
      },
      de: {
        short: "Geräumiges Apartment mit Balkon und Blick auf die Kvarner Bucht.",
        description:
          "Das Apartment More liegt im ersten Stock eines Familienhauses, fünf Gehminuten vom Strand und der Promenade Lungomare entfernt. Zwei Schlafzimmer, ein Wohnzimmer mit voll ausgestatteter Küche und ein Balkon mit Meerblick – ideal für Familien oder zwei Paare.",
      },
    },
  },
  {
    slug: "studio-lovor",
    name: "Studio Lovor",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    size: 32,
    prices: { low: 50, mid: 70, high: 95 },
    amenities: ["garden", "aircon", "wifi", "kitchenette", "parking"],
    images: ["/images/studio-lovor-1.jpg", "/images/studio-lovor-2.jpg", "/images/studio-lovor-3.jpg"],
    text: {
      hr: {
        short: "Udoban studio za dvoje s vlastitom terasom u vrtu.",
        description:
          "Studio Lovor je miran smještaj u prizemlju, s izlazom na terasu u vrtu punom lovora i ružmarina. Savršen je za parove koji žele odmor u tišini, a ipak blizu centra Opatije i plaže.",
      },
      en: {
        short: "A cosy studio for two with a private garden terrace.",
        description:
          "Studio Lovor is a quiet ground-floor retreat opening onto a terrace in a garden full of bay laurel and rosemary. Perfect for couples looking for a peaceful stay close to Opatija's centre and beach.",
      },
      de: {
        short: "Gemütliches Studio für zwei mit eigener Gartenterrasse.",
        description:
          "Das Studio Lovor ist eine ruhige Unterkunft im Erdgeschoss mit Zugang zu einer Terrasse im Garten voller Lorbeer und Rosmarin. Ideal für Paare, die Ruhe suchen und trotzdem nah am Zentrum von Opatija und am Strand wohnen möchten.",
      },
    },
  },
];

export function getUnit(slug) {
  return units.find((u) => u.slug === slug);
}
