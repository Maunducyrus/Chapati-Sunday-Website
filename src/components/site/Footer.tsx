import { Link } from "@tanstack/react-router";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

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
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full bg-background text-foreground/70 transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Social"
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
              <li>M-Pesa Paybill: <span className="font-semibold text-foreground">000000</span></li>
              <li>Account: <span className="font-semibold text-foreground">CHAPATI</span></li>
              <li>Till Number: <span className="font-semibold text-foreground">123456</span></li>
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
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> +254 700 000 000</li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> hello@chapatisunday.org</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>Reg. No. CDF/00000/2019 — Fully Registered Community Group</p>
          <p>© {new Date().getFullYear()} Chapati Sunday. Made with love.</p>
        </div>
      </div>
    </footer>
  );
}
