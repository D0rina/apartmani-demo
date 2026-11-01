import { site } from "@/config/site";
import { getDict } from "@/i18n/dict";

export default function Footer({ lang }) {
    const t = getDict(lang);
    return (
        <footer className="bg-sea-dark text-white/80 mt-24">
            <div className="max-w-6xl mx-auto px-6 py-10 text-sm flex flex-col md:flex-row justify-between gap-4">
                <p>
                    © {new Date().getFullYear()} {site.name} · {site.location}
                </p>
                <p>
                    {t.footer.demo} {t.footer.madeBy}{" "}
                    <a href="https://dsc-studio.hr" className="underline hover:text-white">
                        DSC STUDIO
                    </a>
                </p>
            </div>
        </footer>
    );
}
