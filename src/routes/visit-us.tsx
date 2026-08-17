import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Clock, Navigation, ArrowRight, Star } from "lucide-react";
import { CtaBand } from "../components/site/CtaBand";
import { InstagramGrid } from "../components/site/InstagramGrid";

export const Route = createFileRoute("/visit-us")({
  head: () => ({
    meta: [
      { title: "Visit Us — S Square Fitness | Blackpine District, Ridgefall" },
      { name: "description", content: "Find S Square Fitness on Ironforge Lane, Ridgefall. Open daily from 5:30 AM. Get directions or call (555) 014-2088." },
      { property: "og:title", content: "Visit S Square Fitness — Blackpine District, Ridgefall" },
      { property: "og:description", content: "We're open daily from 5:30 AM. Come say hello." },
    ],
  }),
  component: VisitUs,
});

function VisitUs() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-24 md:pt-32 lg:px-10 lg:pb-24 lg:pt-40">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ember)]">Visit Us</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[0.98] md:text-7xl lg:text-[96px]">
            Come say<br />
            <span className="text-[color:var(--color-ember)]">hello.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base text-white/70 md:text-lg">
            We're on Ironforge Lane in the Blackpine District, Ridgefall — open daily from 5:30 AM.
          </p>
        </div>
      </section>

      {/* LOCATION */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="tilt-card overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="S Square Fitness location"
              src="https://www.google.com/maps?q=18%20Ironforge%20Lane%20Ridgefall&output=embed"
              width="100%"
              height="520"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full grayscale"
              style={{ border: 0, colorScheme: "normal" }}
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-ember)]/10 text-[color:var(--color-ember)]">
                <MapPin size={22} />
              </div>
              <h3 className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Address</h3>
              <p className="mt-2 text-base text-white">
                18 Ironforge Lane,<br />
                Blackpine District,<br />
                Ridgefall 55021
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=18%20Ironforge%20Lane%20Ridgefall"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-ember)] px-5 py-3 text-sm font-semibold text-[color:var(--color-ink)] transition-transform hover:scale-[1.02]"
              >
                <Navigation size={16} /> Get Directions
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="tel:+15550142088"
                className="tilt-card group rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <Phone size={20} className="text-[color:var(--color-ember)]" />
                <p className="mt-4 font-display text-xs uppercase tracking-[0.18em] text-white/50">Call</p>
                <p className="mt-1 font-display text-lg font-semibold">(555) 014-2088</p>
              </a>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <Clock size={20} className="text-[color:var(--color-ember)]" />
                <p className="mt-4 font-display text-xs uppercase tracking-[0.18em] text-white/50">Hours</p>
                <p className="mt-1 font-display text-lg font-semibold">Opens 5:30 AM</p>
                <p className="text-xs text-white/50">Every day</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex items-center gap-2 text-[color:var(--color-ember)]">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={14} className="fill-current" />
                ))}
                <span className="ml-2 font-display text-xl font-bold text-white">4.8</span>
                <span className="text-sm text-white/50">· 162 Google Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 lg:px-10 lg:py-32">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ember)]">Callback</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] md:text-5xl">
              Prefer we ring you back?
            </h2>
            <p className="mt-4 text-white/60">
              Drop your details. We'll call inside gym hours.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4"
          >
            <div>
              <label className="font-display text-xs uppercase tracking-[0.18em] text-white/50">Name</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[color:var(--color-ember)]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-display text-xs uppercase tracking-[0.18em] text-white/50">Phone</label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[color:var(--color-ember)]"
                placeholder="10-digit mobile"
              />
            </div>
            <div>
              <label className="font-display text-xs uppercase tracking-[0.18em] text-white/50">Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[color:var(--color-ember)]"
                placeholder="What would you like to know?"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-ember)] px-6 py-3 text-sm font-semibold text-[color:var(--color-ink)] transition-transform hover:scale-[1.02]"
            >
              Request a Callback <ArrowRight size={16} />
            </button>
            {submitted && (
              <p className="text-sm text-[color:var(--color-ember)]">
                Thanks — we'll be in touch soon.
              </p>
            )}
          </form>
        </div>
      </section>

      <InstagramGrid
        heading="See the gym before you arrive."
        caption="Real photos, real sessions — straight from our Instagram."
      />

      <CtaBand
        eyebrow="Ready when you are"
        title="4.8★ rated. Open early. Ready when you are."
      />
    </>
  );
}