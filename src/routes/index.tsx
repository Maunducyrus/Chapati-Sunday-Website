import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Heart, Sparkles, Users, Calendar, MapPin, Quote } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

import { Counter } from "@/components/site/Counter";
import { siteContent } from "@/content/site";

const { brand, hero, about, stats, needs, events, testimonials, cta } = siteContent;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${brand.name} — ${brand.tagline}` },
      { name: "description", content: brand.metaDescription },
      { property: "og:title", content: `${brand.name} — ${brand.tagline}` },
      { property: "og:description", content: brand.metaDescription },
      { property: "og:image", content: hero.image },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO — full viewport background */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <img
          src={hero.image}
          alt={hero.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown/60 via-brown/40 to-background" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="container-page relative grid min-h-screen gap-10 py-12 md:py-20 lg:grid-cols-12 lg:gap-10 lg:py-28">
          <div className="lg:col-span-7 flex flex-col justify-center text-primary-foreground">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-3 py-1.5 text-[11px] font-medium text-brown backdrop-blur sm:text-xs">
              <BadgeCheck className="h-3.5 w-3.5 text-leaf" />
              {hero.badge}
            </span>
            <h1 className="mt-5 font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {hero.headlineStart}
              <em className="not-italic text-gradient-warm">{hero.headlineHighlight}</em>
              {hero.headlineEnd}
            </h1>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/90 sm:text-lg">{hero.subtitle}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to={hero.primaryCta.href} className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-5 py-3 text-sm font-semibold text-primary-foreground shadow-warm transition-transform hover:-translate-y-0.5">
                <Heart className="h-4 w-4" /> {hero.primaryCta.label}
              </Link>
              <Link to={hero.secondaryCta.href} className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-background/10 px-5 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-background/20">
                {hero.secondaryCta.label}
              </Link>
              <Link to={hero.tertiaryCta.href} className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm font-semibold text-primary-foreground hover:text-accent">
                {hero.tertiaryCta.label} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-primary-foreground/90">
              <div className="flex -space-x-2">
                {[g1, g4, g2].map((src, i) => (
                  <img key={i} src={src} alt="" width={36} height={36} className="h-9 w-9 rounded-full border-2 border-background object-cover" loading="lazy" />
                ))}
              </div>
              <p><span className="font-semibold">{hero.socialProof}</span></p>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex items-end justify-end">
            <div className="rounded-2xl bg-background/95 p-4 shadow-warm backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-leaf/15 text-leaf">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground">{hero.overlayBadge.label}</p>
                  <p className="text-sm font-semibold">{hero.overlayBadge.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* IMPACT */}
      <section className="container-page py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Impact</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Small acts. Big ripples.</h2>
          </div>
          <Link to="/impact" className="text-sm font-semibold text-primary hover:underline">
            Read the full impact report →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <p className="font-display text-5xl text-gradient-warm">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-cream py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img src={about.image} alt="Volunteers cooking chapati together" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft" width={1200} height={900} loading="lazy" />
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-background p-4 shadow-warm md:block">
              <p className="font-display text-3xl text-primary">{brand.foundedYear}</p>
              <p className="text-xs text-muted-foreground">Year founded</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">{about.eyebrow}</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">{about.title}</h2>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="mt-5 text-muted-foreground">{p}</p>
            ))}
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background p-5">
                <Heart className="h-5 w-5 text-primary" />
                <p className="mt-3 font-display text-lg">Our Mission</p>
                <p className="mt-1 text-sm text-muted-foreground">{about.mission}</p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-5">
                <Sparkles className="h-5 w-5 text-primary" />
                <p className="mt-3 font-display text-lg">Our Vision</p>
                <p className="mt-1 text-sm text-muted-foreground">{about.vision}</p>
              </div>
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="container-page py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Upcoming</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Join the next outreach</h2>
          </div>
          <Link to="/events" className="text-sm font-semibold text-primary hover:underline">All events →</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {events.map((e) => (
            <article key={e.name} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-warm">
              <div className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                {e.slots} slots
              </div>
              <Calendar className="h-5 w-5 text-primary" />
              <h3 className="mt-4 font-display text-2xl">{e.name}</h3>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />{e.date}</span>
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" />{e.location}</span>
              </div>
              <Link to="/volunteer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Sign up <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* NEEDS */}
      <section className="bg-cream py-20">
        <div className="container-page">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Current Needs</p>
            <h2 className="mt-2 max-w-2xl font-display text-4xl md:text-5xl">Practical ways you can help today.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {needs.map((n) => (
              <div key={n.title} className="rounded-3xl border border-border bg-background p-7 shadow-soft">
                <div
                  className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: `color-mix(in oklab, var(--${n.color}) 18%, transparent)`,
                    color: `var(--${n.color === "accent" ? "brown" : n.color})`,
                  }}
                >
                  {n.title} Needs
                </div>
                <ul className="mt-5 space-y-2.5">
                  {n.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/donate" className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 text-sm font-semibold text-primary-foreground shadow-warm">
              <Heart className="h-4 w-4" /> Contribute now
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="container-page py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Moments</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">From our outreach visits</h2>
          </div>
          <Link to="/gallery" className="text-sm font-semibold text-primary hover:underline">View full gallery →</Link>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[g1, g2, g3, g4].map((src, i) => (
            <div key={i} className={`overflow-hidden rounded-3xl ${i % 3 === 0 ? "row-span-2" : ""}`}>
              <img src={src} alt="" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" width={900} height={900} />
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-cream py-20">
        <div className="container-page">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Voices</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Stories from the heart</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-3xl border border-border bg-background p-7 shadow-soft">
                <Quote className="h-6 w-6 text-primary" />
                <blockquote className="mt-4 font-display text-lg leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-5 border-t border-border pt-4 text-sm">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20">
        <div className="relative overflow-hidden rounded-4xl bg-gradient-warm p-10 text-primary-foreground shadow-warm md:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/15 blur-2xl" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Users className="h-8 w-8" />
              <h2 className="mt-4 font-display text-4xl md:text-5xl">{cta.title}</h2>
              <p className="mt-4 max-w-lg text-primary-foreground/90">{cta.description}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link to={cta.primary.href} className="rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-cream">
                {cta.primary.label}
              </Link>
              <Link to={cta.secondary.href} className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-white/10">
                {cta.secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
