import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, Star, Sunrise, Users, Dumbbell, Award } from "lucide-react";
import heroImg from "../assets/hero-gym.jpg";
import heroDumbbell from "../assets/3d-dumbbell.png";
import { CtaBand } from "../components/site/CtaBand";
import { InstagramGrid } from "../components/site/InstagramGrid";
import { PhotoMosaic } from "../components/site/PhotoMosaic";
import { Equipment3D } from "../components/site/Equipment3D";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "S Square Fitness — Strength Starts at 5:30 AM | Ridgefall" },
      { name: "description", content: "Ridgefall's serious neighborhood gym. Real equipment, real coaching, open daily from 5:30 AM. Rated 4.8★ across 162 Google reviews." },
      { property: "og:title", content: "S Square Fitness — Strength Starts at 5:30 AM" },
      { property: "og:description", content: "Where Ridgefall trains. Strength, functional, and personal coaching — open early, every day." },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Sunrise, title: "Early Opening Hours", body: "Train before work. Doors open at 5:30 AM, seven days a week." },
  { icon: Users, title: "Community-First Coaching", body: "Expert guidance from people who know your name — not just a room of machines." },
  { icon: Dumbbell, title: "Full-Spectrum Training", body: "Strength, functional, and conditioning equipment under one roof." },
  { icon: Award, title: "Highly Rated Locally", body: "4.8★ across 162 verified Google reviews from Ridgefall and the Blackpine District." },
];

const services = [
  { title: "Strength Training", body: "Build raw power with structured, progressive lifting.", tag: "01" },
  { title: "Functional Fitness", body: "Full-body conditioning for everyday strength and mobility.", tag: "02" },
  { title: "Personal Coaching", body: "Hands-on form correction and program design.", tag: "03" },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Athlete training at dawn inside S Square Fitness"
            width={1920}
            height={1280}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-ink)]/70 via-[color:var(--color-ink)]/60 to-[color:var(--color-ink)]" />
          <div className="absolute left-1/2 top-1/3 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[color:var(--color-ember)]/20 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-24 md:pt-32 lg:px-10 lg:pb-32 lg:pt-40">
          {/* Floating 3D dumbbell */}
          <img
            src={heroDumbbell}
            alt=""
            aria-hidden
            className="float-3d pointer-events-none absolute right-[-40px] top-24 hidden h-[420px] w-[420px] object-contain opacity-90 md:block lg:right-6 lg:top-32 lg:h-[520px] lg:w-[520px]"
          />

          <div className="relative max-w-4xl">
            <p className="reveal inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-ember)]" />
              Blackpine District · Ridgefall's Neighborhood Gym
            </p>
            <h1
              className="reveal mt-6 font-display text-[2.6rem] font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[96px]"
              style={{ animationDelay: "0.1s" }}
            >
              Strength Starts at{" "}
              <span className="relative inline-block text-[color:var(--color-ember)]">
                5:30 AM
                <span className="absolute -bottom-2 left-0 h-1 w-full bg-[color:var(--color-ember)]/40" />
              </span>
              .
            </h1>
            <p
              className="reveal mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
              style={{ animationDelay: "0.2s" }}
            >
              S Square Fitness is where Ridgefall trains — real equipment, real
              coaching, real results, seven days a week.
            </p>

            <div
              className="reveal mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="tel:+15550142088"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-ember)] px-7 py-4 text-sm font-semibold text-[color:var(--color-ink)] transition-transform hover:scale-[1.02]"
              >
                Start Your Free Visit
                <ArrowRight size={16} />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-medium text-white backdrop-blur transition-colors hover:border-white/40"
              >
                See Our Programs
              </Link>
            </div>

            <div
              className="reveal mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/60"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={14} className="fill-[color:var(--color-ember)] text-[color:var(--color-ember)]" />
                  ))}
                </div>
                <span className="text-white"><span className="font-semibold">4.8</span> · 162 Google Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[color:var(--color-ember)]" />
                Blackpine District, Ridgefall
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-white/10 bg-[color:var(--color-ink)] py-6 overflow-hidden">
        <div className="marquee-track flex w-max gap-16 whitespace-nowrap font-display text-2xl font-semibold uppercase tracking-tight md:text-3xl">
          {Array.from({ length: 2 }).map((_, idx) => (
            <div key={idx} className="flex items-center gap-16">
              <span>4.8★ Rated on Google</span>
              <span className="text-[color:var(--color-ember)]">/</span>
              <span>Open Daily from 5:30 AM</span>
              <span className="text-[color:var(--color-ember)]">/</span>
              <span>Trusted across Ridgefall</span>
              <span className="text-[color:var(--color-ember)]">/</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ember)]">Why S Square</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
              A serious gym.<br />Close to home.
            </h2>
          </div>
          <p className="text-base text-white/60 md:text-lg">
          Four reasons Ridgefall keeps showing up — before sunrise, week after week.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="tilt-card group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-ember)]/10 text-[color:var(--color-ember)]">
                <f.icon size={22} />
              </div>
              <div className="mt-16">
                <span className="font-display text-xs font-medium uppercase tracking-[0.2em] text-white/40">0{i + 1}</span>
                <h3 className="mt-2 font-display text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Equipment3D />

      {/* SERVICES TEASER */}
      <section className="border-t border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ember)]">Programs</p>
              <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">Train with intent.</h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[color:var(--color-ember)]"
            >
              Explore all programs <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="tilt-card group relative overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--color-ink)] p-8"
              >
                <span className="font-display text-6xl font-bold text-white/5 transition-colors group-hover:text-[color:var(--color-ember)]/20">
                  {s.tag}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{s.body}</p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[color:var(--color-ember)]"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PhotoMosaic />

      {/* ABOUT TEASER */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:py-32">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ember)]">Our Story</p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-[1.15] md:text-5xl">
          Built in Ridgefall — for the people who train here every morning.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/60">
          S Square Fitness started with a simple idea: a serious gym, close to home, open early enough to actually fit your life.
        </p>
        <Link
          to="/about"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium hover:border-[color:var(--color-ember)] hover:text-[color:var(--color-ember)]"
        >
          Read our story <ArrowRight size={16} />
        </Link>
      </section>

      <InstagramGrid
        heading="Follow the Grind."
        caption="Real photos, real sessions — straight from @ssquare_ridgefall."
      />

      <CtaBand
        eyebrow="Your first session"
        title="Your first session is waiting."
        subtitle="18 Ironforge Lane, Blackpine District, Ridgefall · Open Daily from 5:30 AM"
      />
    </>
  );
}
