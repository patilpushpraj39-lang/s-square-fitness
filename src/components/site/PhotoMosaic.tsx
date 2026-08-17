import photoDumbbells from "../../assets/photo-dumbbells.jpg";
import photoSquat from "../../assets/photo-squat.jpg";
import photoAthlete from "../../assets/photo-athlete.jpg";
import photoKettlebell from "../../assets/photo-kettlebell.jpg";
import stripImg from "../../assets/features-strip.jpg";

const photos = [
  { src: photoAthlete, alt: "Athlete lacing shoes on the gym floor", label: "5:30 AM", tag: "The Ritual", className: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" },
  { src: photoDumbbells, alt: "Rack of dumbbells at S Square Fitness", label: "The Rack", tag: "Iron", className: "aspect-square" },
  { src: photoKettlebell, alt: "Kettlebells lit by warm light", label: "Kettlebells", tag: "Functional", className: "aspect-square" },
  { src: photoSquat, alt: "Squat rack with loaded barbell", label: "Squat Rack", tag: "Strength", className: "aspect-square" },
  { src: stripImg, alt: "Chalked hands gripping a barbell", label: "The Grip", tag: "Effort", className: "aspect-square" },
];

export function PhotoMosaic() {
  return (
    <section className="border-t border-white/10 bg-[color:var(--color-ink)]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ember)]">Inside the gym</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] md:text-6xl">
              A room built for work.
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/60">
            Real corners of the floor — the racks, the plates, the people who
            keep showing up.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {photos.map((p, i) => (
            <figure
              key={i}
              className={`tilt-card group relative overflow-hidden rounded-2xl border border-white/10 ${p.className}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                width={1200}
                height={1200}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 md:p-5">
                <div>
                  <p className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-ember)]">{p.tag}</p>
                  <p className="mt-1 font-display text-lg font-semibold text-white">{p.label}</p>
                </div>
                <span className="font-display text-xs text-white/50">0{i + 1}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}