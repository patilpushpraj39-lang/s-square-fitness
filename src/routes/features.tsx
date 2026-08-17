import { createFileRoute } from "@tanstack/react-router";
import { Clock, Dumbbell, Activity, UserCheck, Sparkles, Users } from "lucide-react";
import stripImg from "../assets/features-strip.jpg";
import { CtaBand } from "../components/site/CtaBand";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — S Square Fitness | Everything You Need to Train Hard" },
      { name: "description", content: "Early opening hours, strength zone, functional training, experienced coaching — inside S Square Fitness in Varale." },
      { property: "og:title", content: "Features — S Square Fitness" },
      { property: "og:description", content: "A clean, well-equipped space designed for focus — no clutter, no waiting." },
    ],
  }),
  component: Features,
});

const features = [
  { icon: Clock, title: "Early Access Hours", body: "Doors open at 5:30 AM every day of the week. Beat the traffic, beat the day." },
  { icon: Dumbbell, title: "Strength & Conditioning Zone", body: "Barbells, plates, racks, and benches — the essentials for building real strength." },
  { icon: Activity, title: "Functional Training Area", body: "Space to move: kettlebells, ropes, and open floor for full-body work." },
  { icon: UserCheck, title: "Experienced Coaching", body: "Trainers on the floor who correct form, program smarter, and remember your goals." },
  { icon: Sparkles, title: "Clean & Well-Maintained", body: "Equipment that works, a floor you'll actually want to lift on, every day." },
  { icon: Users, title: "Community Atmosphere", body: "Members who show up, cheer each other on, and turn workouts into a habit." },
];

function Features() {
  return (
    <>
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-24 md:pt-32 lg:px-10 lg:pb-24 lg:pt-40">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ember)]">Features</p>
          <h1 className="mt-4 max-w-5xl font-display text-5xl font-bold leading-[0.98] md:text-7xl lg:text-[96px]">
            Everything you need to<br />
            <span className="text-[color:var(--color-ember)]">train hard.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base text-white/70 md:text-lg">
            A clean, well-equipped space designed for focus — no clutter, no
            waiting, no excuses.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="tilt-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-ember)]/10 text-[color:var(--color-ember)]">
                  <f.icon size={22} />
                </div>
                <span className="font-display text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-16 font-display text-xl font-semibold">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARALLAX STRIP */}
      <section className="relative h-[60vh] overflow-hidden md:h-[80vh]">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center"
          style={{ backgroundImage: `url(${stripImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-ink)]/70 via-[color:var(--color-ink)]/40 to-[color:var(--color-ink)]" />
        <div className="relative mx-auto flex h-full max-w-7xl items-end px-6 pb-16 lg:px-10 lg:pb-24">
          <p className="max-w-2xl font-display text-3xl font-bold leading-tight md:text-5xl">
            "The best gym in the area. Great equipment, great people."
            <span className="mt-4 block text-sm font-medium uppercase tracking-[0.2em] text-white/50">
              — From our 162 Google reviews
            </span>
          </p>
        </div>
      </section>

      <CtaBand
        eyebrow="Come train"
        title="Experience it yourself — visit today."
      />
    </>
  );
}