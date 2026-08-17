import { createFileRoute } from "@tanstack/react-router";
import { Sunrise, HeartHandshake, Repeat, Star } from "lucide-react";
import aboutImg from "../assets/about-gym.jpg";
import { CtaBand } from "../components/site/CtaBand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — S Square Fitness | Built for Varale" },
      { title: "About — S Square Fitness | Built for Ridgefall" },
      { name: "description", content: "S Square Fitness is Ridgefall's serious neighborhood gym. Community-first, consistency-driven, and open early for the people who train here every day." },
      { property: "og:title", content: "About S Square Fitness — Built for Ridgefall" },
      { property: "og:description", content: "A serious gym, close to home, open early enough to actually fit your life." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Sunrise, title: "Discipline Over Hype", body: "Show up. Do the work. Repeat. That's the only thing that moves the needle." },
  { icon: HeartHandshake, title: "Community Over Competition", body: "We train alongside each other, not against. Everyone gets stronger together." },
  { icon: Repeat, title: "Consistency Over Intensity", body: "The 4-day-a-week person outperforms the once-a-month hero. Every time." },
];

function About() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-24 md:pt-32 lg:px-10 lg:pb-24 lg:pt-40">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ember)]">About Us</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[0.98] md:text-7xl lg:text-[96px]">
            Built for Ridgefall.<br />
            <span className="text-white/50">Built for you.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base text-white/70 md:text-lg">
            S Square Fitness started with a simple idea — a serious gym, close to
            home, open early enough to actually fit your life.
          </p>
        </div>
      </section>

      {/* STORY WITH STICKY IMAGE */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="md:sticky md:top-24 md:h-fit">
            <div className="tilt-card overflow-hidden rounded-2xl border border-white/10">
              <img
                src={aboutImg}
                alt="Inside S Square Fitness"
                loading="lazy"
                width={1400}
                height={1600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-12 text-white/70">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ember)]">Chapter 01</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">A gym that opens before the day does.</h2>
              <p className="mt-4 leading-relaxed">
                In Ridgefall, the day starts early. Workshops, offices, cafés,
                schools — everyone has somewhere to be. So we built a gym that
                fits your morning, not the other way around. Doors open at 5:30
                AM. Coffee can wait; the bar can't.
              </p>
            </div>

            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ember)]">Chapter 02</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">Real equipment. Real coaching.</h2>
              <p className="mt-4 leading-relaxed">
                We didn't want another chain box with mirrors and music. We
                wanted a room that respects the work — barbells that stay
                loaded, coaches who know your last set, and a floor where every
                member knows every other member's name.
              </p>
            </div>

            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ember)]">Chapter 03</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">A community, not a membership.</h2>
              <p className="mt-4 leading-relaxed">
                The reason our members stay isn't the equipment — it's the room.
                It's the person spotting your bench, the coach fixing your hip
                hinge, the group cheering the last rep. That's what 162 people
                have talked about in their reviews. That's what we're here for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ember)]">Our Philosophy</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.05] md:text-6xl">
            Three rules that shape how we train.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="tilt-card rounded-2xl border border-white/10 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-ember)]/10 text-[color:var(--color-ember)]">
                  <v.icon size={22} />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-8 border-y border-white/10 py-16 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-[color:var(--color-ember)]">
              <Star size={20} className="fill-current" />
              <span className="font-display text-5xl font-bold text-white md:text-6xl">4.8</span>
            </div>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/50">Google Rating</p>
          </div>
          <div>
            <span className="font-display text-5xl font-bold md:text-6xl">162</span>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/50">Verified Reviews</p>
          </div>
          <div>
            <span className="font-display text-5xl font-bold text-[color:var(--color-ember)] md:text-6xl">5:30 AM</span>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/50">Open Every Day</p>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="See it yourself"
        title="Come see the gym for yourself."
        subtitle="No commitment. Just walk in and look around."
      />
    </>
  );
}