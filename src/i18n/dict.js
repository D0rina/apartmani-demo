// Prijevodi sučelja. Tekstovi o apartmanima su u src/data/units.js

export const languages = ["hr", "en", "de"];
export const languageNames = { hr: "HR", en: "EN", de: "DE" };

export const dict = {
  hr: {
    nav: { apartments: "Apartmani", location: "Lokacija", contact: "Kontakt", book: "Pošalji upit" },
    hero: {
      title: "Odmor uz more, na korak od Opatije",
      subtitle: "Obiteljski apartmani s pogledom na Kvarner. Rezervirajte izravno kod domaćina, bez provizije.",
      cta: "Pogledaj apartmane",
    },
    units: { title: "Naši apartmani", from: "od", perNight: "/ noć", guests: { one: "gost", few: "gosta", other: "gostiju" }, bedrooms: { one: "spavaća soba", few: "spavaće sobe", other: "spavaćih soba" }, size: "m²", details: "Detalji i dostupnost" },
    why: {
      title: "Zašto rezervirati izravno?",
      items: [
        { title: "Najbolja cijena", text: "Bez provizija platformi – ista ili niža cijena nego na Bookingu." },
        { title: "Izravan kontakt", text: "Dogovarate se izravno s domaćinom, za sva pitanja i posebne želje." },
        { title: "Brz odgovor", text: "Na upite odgovaramo u roku od 24 sata, najčešće i brže." },
      ],
    },
    location: { title: "Lokacija", text: "Pet minuta hoda do plaže i šetnice Lungomare, deset minuta do centra Opatije. Rijeka je udaljena 15 km, a zračna luka Rijeka 40 km." },
    contact: { title: "Kontakt", text: "Imate pitanje? Javite nam se – rado pomažemo.", host: "Vaš domaćin" },
    amenities: {
      seaView: "Pogled na more", balcony: "Balkon", aircon: "Klima uređaj", wifi: "Besplatni Wi-Fi",
      kitchen: "Kuhinja", kitchenette: "Čajna kuhinja", parking: "Parking", garden: "Terasa u vrtu",
    },
    unit: { back: "← Svi apartmani", amenities: "Sadržaji", prices: "Cijene po noćenju", seasonLow: "Predsezona i posezona", seasonMid: "Lipanj i rujan", seasonHigh: "Srpanj i kolovoz", cleaning: "Završno čišćenje", minNights: "Minimalni boravak", nights: "noćenja", availability: "Dostupnost i upit" },
    calendar: { prev: "Prethodni mjesec", next: "Sljedeći mjesec", available: "Slobodno", booked: "Zauzeto", selected: "Odabrano", pickArrival: "Odaberite datum dolaska", pickDeparture: "Odaberite datum odlaska", minStay: "Minimalni boravak je {n} noćenja.", conflict: "U odabranom razdoblju ima zauzetih dana.", clear: "Poništi odabir" },
    form: {
      arrival: "Dolazak", departure: "Odlazak", guests: "Broj gostiju", name: "Ime i prezime", email: "E-mail", phone: "Telefon (neobavezno)", message: "Poruka (neobavezno)",
      estimate: "Procjena cijene", accommodation: "Smještaj", cleaning: "Čišćenje", total: "Ukupno",
      noFee: "Izravna rezervacija – bez provizije", submit: "Pošalji upit", sending: "Šaljem...",
      success: "Hvala! Upit je poslan. Javit ćemo vam se u roku od 24 sata.",
      demo: "Demo način: upit nije stvarno poslan. Na pravoj stranici stigao bi domaćinu na e-mail.",
      error: "Slanje nije uspjelo. Pokušajte ponovno ili nas kontaktirajte telefonom.",
      selectDates: "Za upit odaberite datume u kalendaru.",
      privacy: "Vaše podatke koristimo isključivo za odgovor na upit.",
    },
    footer: { demo: "Demo stranica – objekt i podaci su izmišljeni.", madeBy: "Izrada:" },
  },

  en: {
    nav: { apartments: "Apartments", location: "Location", contact: "Contact", book: "Send inquiry" },
    hero: {
      title: "A seaside holiday, a step from Opatija",
      subtitle: "Family-run apartments overlooking the Kvarner Bay. Book directly with your host – no commission.",
      cta: "See the apartments",
    },
    units: { title: "Our apartments", from: "from", perNight: "/ night", guests: { one: "guest", other: "guests" }, bedrooms: { one: "bedroom", other: "bedrooms" }, size: "m²", details: "Details & availability" },
    why: {
      title: "Why book direct?",
      items: [
        { title: "Best price", text: "No platform fees – the same or a lower price than on Booking.com." },
        { title: "Direct contact", text: "Talk to your host directly about anything you need." },
        { title: "Quick reply", text: "We answer every inquiry within 24 hours, usually much sooner." },
      ],
    },
    location: { title: "Location", text: "A five-minute walk to the beach and the Lungomare promenade, ten minutes to Opatija's centre. Rijeka is 15 km away, Rijeka Airport 40 km." },
    contact: { title: "Contact", text: "Have a question? Get in touch – we're happy to help.", host: "Your host" },
    amenities: {
      seaView: "Sea view", balcony: "Balcony", aircon: "Air conditioning", wifi: "Free Wi-Fi",
      kitchen: "Kitchen", kitchenette: "Kitchenette", parking: "Parking", garden: "Garden terrace",
    },
    unit: { back: "← All apartments", amenities: "Amenities", prices: "Nightly rates", seasonLow: "Low season", seasonMid: "June and September", seasonHigh: "July and August", cleaning: "Final cleaning", minNights: "Minimum stay", nights: "nights", availability: "Availability & inquiry" },
    calendar: { prev: "Previous month", next: "Next month", available: "Available", booked: "Booked", selected: "Selected", pickArrival: "Choose your arrival date", pickDeparture: "Choose your departure date", minStay: "Minimum stay is {n} nights.", conflict: "Some days in this period are already booked.", clear: "Clear selection" },
    form: {
      arrival: "Arrival", departure: "Departure", guests: "Guests", name: "Full name", email: "Email", phone: "Phone (optional)", message: "Message (optional)",
      estimate: "Price estimate", accommodation: "Accommodation", cleaning: "Cleaning", total: "Total",
      noFee: "Direct booking – no commission", submit: "Send inquiry", sending: "Sending...",
      success: "Thank you! Your inquiry has been sent. We'll reply within 24 hours.",
      demo: "Demo mode: the inquiry was not actually sent. On a live site it would reach the host by email.",
      error: "Sending failed. Please try again or call us.",
      selectDates: "Choose your dates in the calendar to send an inquiry.",
      privacy: "We use your details only to reply to your inquiry.",
    },
    footer: { demo: "Demo website – the property and details are fictional.", madeBy: "Made by" },
  },

  de: {
    nav: { apartments: "Apartments", location: "Lage", contact: "Kontakt", book: "Anfrage senden" },
    hero: {
      title: "Urlaub am Meer, nur einen Schritt von Opatija",
      subtitle: "Familiengeführte Apartments mit Blick auf die Kvarner Bucht. Direkt beim Gastgeber buchen – ohne Provision.",
      cta: "Apartments ansehen",
    },
    units: { title: "Unsere Apartments", from: "ab", perNight: "/ Nacht", guests: { one: "Gast", other: "Gäste" }, bedrooms: { one: "Schlafzimmer", other: "Schlafzimmer" }, size: "m²", details: "Details & Verfügbarkeit" },
    why: {
      title: "Warum direkt buchen?",
      items: [
        { title: "Bester Preis", text: "Keine Plattformgebühren – gleicher oder niedrigerer Preis als bei Booking.com." },
        { title: "Direkter Kontakt", text: "Sie sprechen alles direkt mit Ihrem Gastgeber ab." },
        { title: "Schnelle Antwort", text: "Wir beantworten jede Anfrage innerhalb von 24 Stunden, meist schneller." },
      ],
    },
    location: { title: "Lage", text: "Fünf Gehminuten zum Strand und zur Promenade Lungomare, zehn Minuten ins Zentrum von Opatija. Rijeka ist 15 km entfernt, der Flughafen Rijeka 40 km." },
    contact: { title: "Kontakt", text: "Haben Sie eine Frage? Schreiben Sie uns – wir helfen gern.", host: "Ihre Gastgeberin" },
    amenities: {
      seaView: "Meerblick", balcony: "Balkon", aircon: "Klimaanlage", wifi: "Kostenloses WLAN",
      kitchen: "Küche", kitchenette: "Kochnische", parking: "Parkplatz", garden: "Gartenterrasse",
    },
    unit: { back: "← Alle Apartments", amenities: "Ausstattung", prices: "Preise pro Nacht", seasonLow: "Vor- und Nachsaison", seasonMid: "Juni und September", seasonHigh: "Juli und August", cleaning: "Endreinigung", minNights: "Mindestaufenthalt", nights: "Nächte", availability: "Verfügbarkeit & Anfrage" },
    calendar: { prev: "Vorheriger Monat", next: "Nächster Monat", available: "Frei", booked: "Belegt", selected: "Ausgewählt", pickArrival: "Wählen Sie Ihr Anreisedatum", pickDeparture: "Wählen Sie Ihr Abreisedatum", minStay: "Mindestaufenthalt: {n} Nächte.", conflict: "Im gewählten Zeitraum sind bereits Tage belegt.", clear: "Auswahl löschen" },
    form: {
      arrival: "Anreise", departure: "Abreise", guests: "Gäste", name: "Vor- und Nachname", email: "E-Mail", phone: "Telefon (optional)", message: "Nachricht (optional)",
      estimate: "Preisschätzung", accommodation: "Unterkunft", cleaning: "Reinigung", total: "Gesamt",
      noFee: "Direktbuchung – ohne Provision", submit: "Anfrage senden", sending: "Wird gesendet...",
      success: "Vielen Dank! Ihre Anfrage wurde gesendet. Wir antworten innerhalb von 24 Stunden.",
      demo: "Demo-Modus: Die Anfrage wurde nicht wirklich gesendet. Auf einer echten Website ginge sie per E-Mail an den Gastgeber.",
      error: "Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder rufen Sie uns an.",
      selectDates: "Wählen Sie Ihre Daten im Kalender, um eine Anfrage zu senden.",
      privacy: "Ihre Daten verwenden wir ausschließlich zur Beantwortung Ihrer Anfrage.",
    },
    footer: { demo: "Demo-Website – Unterkunft und Angaben sind fiktiv.", madeBy: "Erstellt von" },
  },
};

export function getDict(lang) {
  return dict[lang] || dict.hr;
}
