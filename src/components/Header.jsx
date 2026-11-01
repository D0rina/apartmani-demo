"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/config/site";
import { languages, languageNames, getDict } from "@/i18n/dict";

export default function Header({ lang }) {
    const t = getDict(lang);
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    // ista stranica na drugom jeziku: /hr/apartmani/x -> /en/apartmani/x
    const switchTo = (l) => pathname.replace(/^\/(hr|en|de)/, `/${l}`);

    const links = [
        { href: `/${lang}#apartmani`, label: t.nav.apartments },
        { href: `/${lang}#lokacija`, label: t.nav.location },
        { href: `/${lang}#kontakt`, label: t.nav.contact },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-stone-200">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
                <Link href={`/${lang}`} className="font-serif text-2xl text-sea">
                    {site.name}
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm">
                    {links.map((l) => (
                        <Link key={l.href} href={l.href} className="hover:text-sea transition-colors">
                            {l.label}
                        </Link>
                    ))}
                    <div className="flex gap-1 border-l border-stone-200 pl-6">
                        {languages.map((l) => (
                            <Link
                                key={l}
                                href={switchTo(l)}
                                className={`px-2 py-1 rounded text-xs font-medium ${l === lang ? "bg-sea text-white" : "text-stone-500 hover:text-sea"}`}
                            >
                                {languageNames[l]}
                            </Link>
                        ))}
                    </div>
                </nav>

                <button className="md:hidden text-2xl text-sea" onClick={() => setOpen(!open)} aria-label="Menu">
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {open && (
                <nav className="md:hidden flex flex-col gap-4 px-6 pb-6 text-sm">
                    {links.map((l) => (
                        <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                            {l.label}
                        </Link>
                    ))}
                    <div className="flex gap-2 pt-2">
                        {languages.map((l) => (
                            <Link
                                key={l}
                                href={switchTo(l)}
                                onClick={() => setOpen(false)}
                                className={`px-3 py-1 rounded text-xs font-medium ${l === lang ? "bg-sea text-white" : "border border-stone-300"}`}
                            >
                                {languageNames[l]}
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
}
