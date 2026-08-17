import { Phone } from "lucide-react";

export function CtaBand({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-ember)] text-[color:var(--color-ink)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-[1fr_auto] md:items-center md:py-24 lg:px-10">
        <div>
          {eyebrow && (
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] opacity-70">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] md:text-6xl">
            {title}
          </h2>
          {subtitle && <p className="mt-4 max-w-xl text-base opacity-80">{subtitle}</p>}
        </div>
        <a
          href="tel:09028577759"
          className="inline-flex items-center gap-2 justify-self-start rounded-full bg-[color:var(--color-ink)] px-6 py-4 text-sm font-semibold text-[color:var(--color-bone)] transition-transform hover:scale-[1.02] md:justify-self-end"
        >
          <Phone size={18} />
          Call 90285 77759
        </a>
      </div>
    </section>
  );
}