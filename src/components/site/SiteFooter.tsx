import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Star } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[color:var(--color-ink)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-[color:var(--color-ember)] font-display text-lg font-bold text-[color:var(--color-ink)]">
              S²
            </span>
            <span className="font-display text-base font-semibold uppercase tracking-[0.18em]">
              S Square Fitness
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-white/60">
            Ridgefall's neighborhood gym. Real equipment, real coaching, real
            results — open daily from 5:30 AM.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-white/70">
            <Star size={14} className="fill-[color:var(--color-ember)] text-[color:var(--color-ember)]" />
            <span className="font-medium">4.8</span>
            <span className="text-white/40">·</span>
            <span>162 Google Reviews</span>
          </div>
        </div>

        <div>
          <h4 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="text-white/70 hover:text-white">About</Link></li>
            <li><Link to="/features" className="text-white/70 hover:text-white">Features</Link></li>
            <li><Link to="/services" className="text-white/70 hover:text-white">Services</Link></li>
            <li><Link to="/visit-us" className="text-white/70 hover:text-white">Visit Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2 text-white/70">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[color:var(--color-ember)]" />
              <span>18 Ironforge Lane, Blackpine District, Ridgefall 55021</span>
            </li>
            <li>
              <a href="tel:+15550142088" className="flex items-center gap-2 text-white/70 hover:text-white">
                <Phone size={16} className="text-[color:var(--color-ember)]" />
                (555) 014-2088
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ssquare_ridgefall"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white"
              >
                <Instagram size={16} className="text-[color:var(--color-ember)]" />
                @ssquare_ridgefall
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-white/40 md:flex-row md:items-center lg:px-10">
          <p>© {new Date().getFullYear()} S Square Fitness. All rights reserved.</p>
          <p>Open Daily · 5:30 AM</p>
        </div>
      </div>
    </footer>
  );
}