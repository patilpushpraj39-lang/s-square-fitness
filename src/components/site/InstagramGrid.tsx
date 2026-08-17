import { Instagram } from "lucide-react";

const tiles = [
  { label: "Squat day", tag: "#strength" },
  { label: "5:30 AM crew", tag: "#earlybirds" },
  { label: "Functional Friday", tag: "#functional" },
  { label: "PR board", tag: "#pr" },
  { label: "Coach Notes", tag: "#coaching" },
  { label: "Community", tag: "#ssquare" },
];

const gradients = [
  "from-[#ff4e2e]/25 to-[#0b0b0c]",
  "from-[#ff7a5c]/20 to-[#0b0b0c]",
  "from-[#ff4e2e]/15 to-[#0b0b0c]",
  "from-[#ff7a5c]/25 to-[#0b0b0c]",
  "from-[#ff4e2e]/20 to-[#0b0b0c]",
  "from-[#ff7a5c]/15 to-[#0b0b0c]",
];

export function InstagramGrid({
  heading,
  caption,
}: {
  heading: string;
  caption?: string;
}) {
  return (
    <section className="border-t border-white/10 bg-[color:var(--color-ink)]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ember)]">
              Instagram
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] md:text-6xl">
              {heading}
            </h2>
            {caption && (
              <p className="mt-4 text-base text-white/60">{caption}</p>
            )}
          </div>
          <a
            href="https://www.instagram.com/s_square_fitness_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition-colors hover:border-[color:var(--color-ember)] hover:text-white"
          >
            <Instagram size={16} />
            Follow @s_square_fitness_
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {tiles.map((t, i) => (
            <a
              key={t.label}
              href="https://www.instagram.com/s_square_fitness_"
              target="_blank"
              rel="noopener noreferrer"
              className={`tilt-card group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${gradients[i]}`}
            >
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <Instagram
                  size={20}
                  className="text-white/40 transition-colors group-hover:text-[color:var(--color-ember)]"
                />
                <div>
                  <p className="font-display text-lg font-semibold">{t.label}</p>
                  <p className="text-xs text-white/50">{t.tag}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}