import dumbbell from "../../assets/3d-dumbbell.png";
import kettlebell from "../../assets/3d-kettlebell.png";
import plate from "../../assets/3d-plate.png";

export function Equipment3D() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[color:var(--color-ink)]">
      {/* radial glow */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--color-ember)]/10 blur-[140px]" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2 md:items-center lg:px-10 lg:py-32">
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ember)]">
            The Equipment
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.02] md:text-6xl lg:text-7xl">
            Iron.<br />Kettle.<br /><span className="text-[color:var(--color-ember)]">Plate.</span>
          </h2>
          <p className="mt-6 max-w-md text-base text-white/60">
            Barbells that stay loaded. Kettlebells that outlast trends. Plates
            with a history. Nothing fancy — just tools that work.
          </p>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {[
              { n: "20+", l: "Dumbbell pairs" },
              { n: "8", l: "Kettlebell sizes" },
              { n: "500kg", l: "Plate load" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-white/10 p-4">
                <p className="font-display text-2xl font-bold text-white">{s.n}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-white/50">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[420px] md:h-[560px]">
          {/* orbit ring */}
          <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10 md:h-[500px] md:w-[500px]" />
          <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 md:h-[360px] md:w-[360px]" />

          {/* dumbbell — floats */}
          <img
            src={dumbbell}
            alt=""
            aria-hidden
            className="float-3d absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 object-contain md:h-96 md:w-96"
          />
          {/* kettlebell — swings, top-left */}
          <img
            src={kettlebell}
            alt=""
            aria-hidden
            className="swing-3d absolute left-0 top-4 h-28 w-28 object-contain md:h-40 md:w-40"
          />
          {/* plate — spins, bottom-right */}
          <img
            src={plate}
            alt=""
            aria-hidden
            className="spin-slow absolute bottom-4 right-2 h-28 w-28 object-contain md:h-44 md:w-44"
          />

          {/* labels */}
          <span className="absolute left-2 top-40 font-display text-[10px] uppercase tracking-[0.22em] text-white/40 md:top-52">
            — Kettle · 24kg
          </span>
          <span className="absolute right-2 bottom-40 font-display text-[10px] uppercase tracking-[0.22em] text-white/40 md:bottom-52">
            Plate · 20kg —
          </span>
        </div>
      </div>
    </section>
  );
}