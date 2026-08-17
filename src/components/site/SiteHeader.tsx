import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/features", label: "Features" },
  { to: "/services", label: "Services" },
  { to: "/visit-us", label: "Visit Us" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[color:var(--color-ink)]/70 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-[color:var(--color-ember)] font-display text-lg font-bold text-[color:var(--color-ink)]">
            S²
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.18em]">
            S Square Fitness
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="group relative text-sm font-medium text-white/70 transition-colors hover:text-white"
              activeProps={{ className: "text-white" }}
            >
              {n.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[color:var(--color-ember)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <a
          href="tel:+15550142088"
          className="hidden rounded-full bg-[color:var(--color-ember)] px-5 py-2.5 text-sm font-semibold text-[color:var(--color-ink)] transition-transform hover:scale-[1.02] md:inline-block"
        >
          Call · (555) 014-2088
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[color:var(--color-ink)]/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-white/80 hover:bg-white/5"
                activeProps={{ className: "text-[color:var(--color-ember)]" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="tel:+15550142088"
              className="mt-2 rounded-full bg-[color:var(--color-ember)] px-5 py-3 text-center text-sm font-semibold text-[color:var(--color-ink)]"
            >
              Call · (555) 014-2088
            </a>
          </div>
        </div>
      )}
    </header>
  );
}