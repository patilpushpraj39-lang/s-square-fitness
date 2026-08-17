import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Dumbbell, Activity, UserCheck, Users } from "lucide-react";
import servicesImg from "../assets/services-hero.jpg";
import { CtaBand } from "../components/site/CtaBand";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — S Square Fitness | Programs for Every Goal" },
      { name: "description", content: "Strength training, functional fitness, personal coaching, and community sessions at S Square Fitness in Varale." },
      { property: "og:title", content: "Programs — S Square Fitness" },
      { property: "og:description", content: "From your first rep to your next PR — training built around real progress." },
    ],
  }),
  component: Services,
});

const services = [
  {
    tag: "01",
    icon: Dumbbell,
    title: "Strength Training",
    body: "Build raw power with structured, progressive lifting. Squats, deadlifts, presses, and the accessory work that makes them stick.",
  },
  {
    tag: "02",
    icon: Activity,
    title: "Functional Fitness",
    body: "Full-body conditioning for everyday strength and mobility. Kettlebells, ropes, carries, and circuits that translate outside the gym.",
  },
  {
    tag: "03",
    icon: UserCheck,
    title: "Personal Coaching",
    body: "Hands-on form correction and program design. One coach, one plan, one goal — mapped to your schedule and body.",
  },
  {
    tag: "04",
    icon: Users,
    title: "Community Sessions",
    body: "Train alongside the S Square community. Guided workouts, shared PRs, and the accountability that makes consistency easy.",
  },
];

const process = [
  { n: "01", title: "Visit & Consult", body: "Walk in, meet a coach, tell us your goals." },
  { n: "02", title: "Get Your Plan", body: "Program built around your body and your calendar." },
  { n: "03", title: "Train With Support", body: "Coaches on the floor. Community around you." },
  { n: "04", title: "See Results", body: "Consistency + coaching = the thing you came for." },
];

function Services() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10">
          <img
            src={servicesImg}
            alt="Athlete lifting at S Square Fitness"
            loading="lazy"
            width={1600}
            height={1200}
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-ink)]/80 to-[color:var(--color-ink)]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-24 md:pt-32 lg:px-10 lg:pb-24 lg:pt-40">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ember)]">Programs</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[0.98] md:text-7xl lg:text-[96px]">
            Programs for<br />every goal.
          </h1>
          <p className="mt-8 max-w-2xl text-base text-white/70 md:text-lg">
            From your first rep to your next PR — training built around real
            progress.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.tag}
              className="tilt-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-5xl font-bold text-white/10 transition-colors group-hover:text-[color:var(--color-ember)]/40">
                  {s.tag}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-ember)]/10 text-[color:var(--color-ember)]">
                  <s.icon size={22} />
                </div>
              </div>
              <h3 className="mt-10 font-display text-2xl font-semibold md:text-3xl">{s.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60 md:text-base">{s.body}</p>
              <a
                href="tel:09028577759"
                className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ember)]"
              >
                Enquire <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ember)]">The Process</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.05] md:text-6xl">
            Four steps, no shortcuts.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.n} className="relative">
                <span className="font-display text-6xl font-bold text-[color:var(--color-ember)]">{p.n}</span>
                <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/60">{p.body}</p>
                {i < process.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-white/20 to-transparent md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready to start"
        title="Ready to start? Call 90285 77759."
      />
    </>
  );
}