import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-xl mx-auto px-6 py-24 text-center">
      <h1 className="font-serif text-4xl text-sea">404</h1>
      <p className="mt-4 text-stone-600">Stranica nije pronađena · Page not found · Seite nicht gefunden</p>
      <Link href="/hr" className="inline-block mt-6 text-sea underline">← Apartmani Lumen</Link>
    </section>
  );
}
