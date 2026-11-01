# Apartment website template — direct booking inquiries

A multilingual website template for holiday apartment owners: present the units, show live
availability and let guests send booking inquiries directly — no platform commission.

🇭🇷 *Predložak web stranice za privatne iznajmljivače: prikaz apartmana, kalendar dostupnosti
i izravni upiti za rezervaciju, na hrvatskom, engleskom i njemačkom.*

🌐 **Live demo:** *(add link after deploying)* — demo property "Apartmani Lumen" is fictional.

## Features

- **Three languages** (HR / EN / DE) with a language switcher that keeps the current page
- **Apartment pages** with gallery, amenities and seasonal price table
- **Availability calendar** — booked nights are blocked, minimum stay is enforced,
  bookings in the selected period are detected
- **Instant price estimate** — nightly rates by season plus cleaning fee
- **Inquiry form** sent by email via Formspree (works in demo mode without it)
- Contact by phone, WhatsApp and email; Google Maps location
- SEO: per-page titles and descriptions, language alternates, `sitemap.xml`, `robots.txt`
- Statically generated pages, responsive design

## Adapting for a new client

| What | Where |
|---|---|
| Property name, location, contact, cleaning fee, minimum stay, seasons | `src/config/site.js` |
| Apartments, prices, amenities, texts in three languages | `src/data/units.js` |
| Booked dates | `src/data/bookings.js` (set `DEMO_MODE = false`) |
| Interface texts and translations | `src/i18n/dict.js` |
| Colours | `src/app/globals.css` |
| Photos | `public/images/` |

To receive inquiries by email, create a form on [formspree.io](https://formspree.io) and set
the environment variable `NEXT_PUBLIC_FORMSPREE_ID` (or write the ID in `site.js`).

## Tech stack

Next.js 16 (App Router) · React 19 · JavaScript · Tailwind CSS v4 · `Intl` API for dates,
prices and plural forms · Formspree · Vercel

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 (redirects to `/hr`).

## Possible extensions

- Sync booked dates from Booking.com / Airbnb calendars (iCal)
- Store inquiries in a database with an admin panel for confirming bookings
