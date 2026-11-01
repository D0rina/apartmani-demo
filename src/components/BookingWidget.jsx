"use client";
import { useEffect, useMemo, useState } from "react";
import { site } from "@/config/site";
import { getUnit } from "@/data/units";
import { getBookings } from "@/data/bookings";
import { getDict } from "@/i18n/dict";
import { addDays, eachNight, isNightBooked, nightsBetween, toISO, todayISO } from "@/lib/dates";
import { formatDate, formatPrice, monthLabel, weekdayLabels } from "@/lib/format";
import { quote } from "@/lib/pricing";

export default function BookingWidget({ unitSlug, lang }) {
    const t = getDict(lang);
    const unit = getUnit(unitSlug);

    // kalendar ovisi o današnjem datumu, pa ga prikazujemo tek u pregledniku
    const [mounted, setMounted] = useState(false);
    const [today, setToday] = useState(null);
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        setToday(todayISO());
        setBookings(getBookings(unitSlug));
        setMounted(true);
    }, [unitSlug]);

    const [offset, setOffset] = useState(0); // pomak u mjesecima od trenutnog
    const [arrival, setArrival] = useState(null);
    const [departure, setDeparture] = useState(null);
    const [warning, setWarning] = useState("");

    function handleDayClick(iso) {
        setWarning("");
        // novi odabir
        if (!arrival || departure) {
            if (isNightBooked(iso, bookings)) return;
            setArrival(iso);
            setDeparture(null);
            return;
        }
        // drugi klik: odlazak
        if (iso <= arrival) {
            if (!isNightBooked(iso, bookings)) setArrival(iso);
            return;
        }
        if (eachNight(arrival, iso).some((n) => isNightBooked(n, bookings))) {
            setWarning(t.calendar.conflict);
            return;
        }
        if (nightsBetween(arrival, iso) < site.minNights) {
            setWarning(t.calendar.minStay.replace("{n}", site.minNights));
            return;
        }
        setDeparture(iso);
    }

    function clear() {
        setArrival(null);
        setDeparture(null);
        setWarning("");
    }

    if (!mounted) {
        return <div className="h-96 rounded-2xl bg-sand animate-pulse" />;
    }

    const base = new Date(today);
    const months = [0, 1].map((i) => {
        const d = new Date(Date.UTC(base.getUTCFullYear(), base.getUTCMonth() + offset + i, 1));
        return { year: d.getUTCFullYear(), month: d.getUTCMonth() };
    });

    return (
        <div className="rounded-2xl border border-stone-200 p-6">
            {/* Navigacija */}
            <div className="flex items-center justify-between mb-4">
                <button
                    onClick={() => setOffset((o) => Math.max(0, o - 1))}
                    disabled={offset === 0}
                    className="w-10 h-10 rounded-full border border-stone-300 disabled:opacity-30 hover:border-sea"
                    aria-label={t.calendar.prev}
                >
                    ←
                </button>
                <p className="text-sm text-stone-500">
                    {!arrival || departure ? t.calendar.pickArrival : t.calendar.pickDeparture}
                </p>
                <button
                    onClick={() => setOffset((o) => Math.min(11, o + 1))}
                    className="w-10 h-10 rounded-full border border-stone-300 hover:border-sea"
                    aria-label={t.calendar.next}
                >
                    →
                </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
                {months.map((m) => (
                    <Month
                        key={`${m.year}-${m.month}`}
                        {...m}
                        lang={lang}
                        today={today}
                        bookings={bookings}
                        arrival={arrival}
                        departure={departure}
                        onDayClick={handleDayClick}
                    />
                ))}
            </div>

            {/* Legenda */}
            <div className="flex flex-wrap gap-4 mt-4 text-xs text-stone-500">
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-white border border-stone-300" /> {t.calendar.available}</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-stone-200" /> {t.calendar.booked}</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-sea" /> {t.calendar.selected}</span>
                {arrival && (
                    <button onClick={clear} className="ml-auto underline hover:text-sea">
                        {t.calendar.clear}
                    </button>
                )}
            </div>

            {warning && <p className="mt-4 text-sm text-red-600">{warning}</p>}

            <InquiryForm unit={unit} lang={lang} arrival={arrival} departure={departure} />
        </div>
    );
}

function Month({ year, month, lang, today, bookings, arrival, departure, onDayClick }) {
    const first = new Date(Date.UTC(year, month, 1));
    const lead = (first.getUTCDay() + 6) % 7; // ponedjeljak = 0
    const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => toISO(addDays(toISO(first), i)));

    return (
        <div>
            <p className="text-center font-medium capitalize mb-3">{monthLabel(year, month, lang)}</p>
            <div className="grid grid-cols-7 gap-1 text-center text-xs text-stone-400 mb-1">
                {weekdayLabels(lang).map((w) => (
                    <span key={w}>{w}</span>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: lead }).map((_, i) => (
                    <span key={`e${i}`} />
                ))}
                {days.map((iso) => {
                    const past = iso < today;
                    const booked = isNightBooked(iso, bookings);
                    const isEdge = iso === arrival || iso === departure;
                    const inRange = arrival && departure && iso > arrival && iso < departure;
                    const disabled = past || (booked && !(arrival && !departure && iso > arrival));

                    let cls = "bg-white border border-stone-200 hover:border-sea";
                    if (past) cls = "text-stone-300";
                    else if (booked) cls = "bg-stone-200 text-stone-400 line-through";
                    if (inRange) cls = "bg-sea/15 text-sea-dark";
                    if (isEdge) cls = "bg-sea text-white";

                    return (
                        <button
                            key={iso}
                            onClick={() => onDayClick(iso)}
                            disabled={disabled}
                            className={`aspect-square rounded-lg text-sm transition-colors disabled:cursor-not-allowed ${cls}`}
                        >
                            {Number(iso.slice(8))}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

function InquiryForm({ unit, lang, arrival, departure }) {
    const t = getDict(lang);
    const [status, setStatus] = useState("idle"); // idle | sending | sent | demo | error
    const ready = arrival && departure;
    const q = useMemo(() => (ready ? quote(unit, arrival, departure) : null), [unit, arrival, departure, ready]);

    async function handleSubmit(e) {
        e.preventDefault();
        if (!ready) return;
        const data = Object.fromEntries(new FormData(e.currentTarget));
        const payload = {
            ...data,
            apartman: unit.name,
            dolazak: arrival,
            odlazak: departure,
            nocenja: q.nights,
            procjena: q.total,
            jezik: lang,
        };

        if (!site.formspreeId) {
            setStatus("demo");
            return;
        }
        setStatus("sending");
        try {
            const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(payload),
            });
            setStatus(res.ok ? "sent" : "error");
        } catch {
            setStatus("error");
        }
    }

    if (status === "sent" || status === "demo") {
        return (
            <div className="mt-6 rounded-xl bg-sand p-6">
                <p className="font-medium text-sea">✓ {t.form.success}</p>
                {status === "demo" && <p className="text-sm text-stone-500 mt-2">{t.form.demo}</p>}
            </div>
        );
    }

    const input = "w-full rounded-lg border border-stone-300 px-4 py-2.5 focus:outline-none focus:border-sea";

    return (
        <form onSubmit={handleSubmit} className="mt-6 border-t border-stone-200 pt-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                    <p className="text-stone-500">{t.form.arrival}</p>
                    <p className="font-medium">{arrival ? formatDate(arrival, lang) : "—"}</p>
                </div>
                <div>
                    <p className="text-stone-500">{t.form.departure}</p>
                    <p className="font-medium">{departure ? formatDate(departure, lang) : "—"}</p>
                </div>
            </div>

            {q ? (
                <div className="mt-4 rounded-xl bg-sand p-4 text-sm">
                    <p className="font-medium mb-2">{t.form.estimate}</p>
                    <div className="flex justify-between"><span>{t.form.accommodation} ({q.nights} {t.unit.nights})</span><span>{formatPrice(q.accommodation, lang)}</span></div>
                    <div className="flex justify-between"><span>{t.form.cleaning}</span><span>{formatPrice(q.cleaning, lang)}</span></div>
                    <div className="flex justify-between font-semibold text-base border-t border-stone-300 mt-2 pt-2"><span>{t.form.total}</span><span>{formatPrice(q.total, lang)}</span></div>
                    <p className="text-sea mt-2">✓ {t.form.noFee}</p>
                </div>
            ) : (
                <p className="mt-4 text-sm text-stone-500">{t.form.selectDates}</p>
            )}

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <label className="text-sm">
                    {t.form.name}
                    <input name="ime" required className={`${input} mt-1`} />
                </label>
                <label className="text-sm">
                    {t.form.email}
                    <input name="email" type="email" required className={`${input} mt-1`} />
                </label>
                <label className="text-sm">
                    {t.form.phone}
                    <input name="telefon" type="tel" className={`${input} mt-1`} />
                </label>
                <label className="text-sm">
                    {t.form.guests}
                    <select name="gosti" className={`${input} mt-1`} defaultValue={Math.min(2, unit.guests)}>
                        {Array.from({ length: unit.guests }, (_, i) => i + 1).map((n) => (
                            <option key={n} value={n}>{n}</option>
                        ))}
                    </select>
                </label>
                <label className="text-sm sm:col-span-2">
                    {t.form.message}
                    <textarea name="poruka" rows={3} className={`${input} mt-1`} />
                </label>
            </div>

            {status === "error" && <p className="mt-4 text-sm text-red-600">{t.form.error}</p>}

            <button
                type="submit"
                disabled={!ready || status === "sending"}
                className="mt-6 w-full bg-sea text-white font-medium py-3 rounded-full hover:bg-sea-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
                {status === "sending" ? t.form.sending : t.form.submit}
            </button>
            <p className="text-xs text-stone-400 mt-3 text-center">{t.form.privacy}</p>
        </form>
    );
}
