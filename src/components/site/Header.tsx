import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/impact", label: "Impact" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-warm text-primary-foreground shadow-warm transition-transform group-hover:scale-105">
            <Heart className="h-4 w-4 fill-current" />
          </span>
          <span className="font-display text-xl font-medium tracking-tight">
            Chapati <span className="text-primary">Sunday</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-full px-3 py-2 text-sm font-medium text-foreground bg-secondary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-warm transition-transform hover:-translate-y-0.5"
          >
            <Heart className="h-4 w-4" /> Donate
          </Link>
        </div>

        <button
          className="lg:hidden grid h-10 w-10 place-items-center rounded-full bg-secondary text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-border/60 bg-background transition-[max-height] duration-300",
          open ? "max-h-[500px]" : "max-h-0",
        )}
      >
        <nav className="container-page flex flex-col gap-1 py-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-lg px-3 py-2.5 text-sm font-medium text-foreground bg-secondary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/donate"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-warm px-5 py-3 text-sm font-semibold text-primary-foreground shadow-warm"
          >
            <Heart className="h-4 w-4" /> Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}
