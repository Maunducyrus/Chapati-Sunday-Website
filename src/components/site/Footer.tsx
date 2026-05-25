import { Link } from "@tanstack/react-router";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

// TikTok logo — lucide doesn't include one, so a tiny inline SVG keeps the social row consistent.
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.61a8.16 8.16 0 0 0 4.77 1.52V7.7a4.85 4.85 0 0 1-1.84-1.01z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-cream">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-warm text-primary-foreground">
                <Heart className="h-4 w-4 fill-current" />
              </span>
              <span className="font-display text-xl">Chapati Sunday</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              A fully registered community group sharing love, meals, and hope with children across Kenya since 2019.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: TikTokIcon, label: "TikTok" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full bg-background text-foreground/70 transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brown">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["About Us", "/about"],
                ["Our Impact", "/impact"],
                ["Events", "/events"],
                ["Gallery", "/gallery"],
                ["Volunteer", "/volunteer"],
                ["Shop", "/shop"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-muted-foreground hover:text-primary">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brown">Donate</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Paybill: <span className="font-semibold text-foreground">714777</span></li>
              <li>Account: <span className="font-semibold text-foreground">0740197332</span></li>
              {/* <li>Till Number: <span className="font-semibold text-foreground">123456</span></li> */}
              <li>
                <Link to="/donate" className="text-primary hover:underline">
                  See all donation options →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brown">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> +254 718 044 520</li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> hello@chapatisunday.org</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          {/* <p>Reg. No. CDF/00000/2019 — Fully Registered Community Group</p> */}
          <p>© {new Date().getFullYear()} Chapati Sunday. Made with love ❤️ by <Link to="https://github.com/Maunducyrus" className="text-primary hover:underline">
                  Cyrus Maundu
                </Link></p>
        </div>
      </div>
    </footer>
  );
}
