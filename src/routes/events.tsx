import { Link } from "react-router-dom";
import { PageHero } from "@/components/site/PageHero";
import { Calendar, MapPin, Users } from "lucide-react";

const events = [
  { name: "Chapati Sunday Outreach", date: "May 31, 2026", location: "Kiambu", slots: 100, desc: "Cooking, games and storytime with the kids of Hope Children's Home." },
  { name: "Back-to-School Drive", date: "August 20, 2026", location: "Nairobi", slots: 100, desc: "Distributing school supplies and shoes ahead of the new term." },
  { name: "Mid-Year Team Building", date: "June , 2026", location: "Nairobi", slots: 100, desc: "Our biggest visit of the year. Bus transport provided from Nairobi." },
  { name: "Mentorship Sunday", date: "Sept 14, 2026", location: "....", slots: 100, desc: "Career conversations with teen residents at Pwani Children's Home." },
];

export default function Events() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title={<>Pick a Sunday to <em className="not-italic text-gradient-warm">show up</em>.</>}
        description="We host outreach visits monthly across multiple counties. RSVP for your slot below."
      />
      <section className="container-page py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {events.map((e) => (
            <article key={e.name} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-warm">
              <div className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                <Users className="h-3 w-3" /> {e.slots} slots
              </div>
              <h3 className="font-display text-2xl">{e.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4 text-primary" />{e.date}</span>
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" />{e.location}</span>
              </div>
              <Link to="/volunteer" className="mt-6 inline-flex items-center rounded-full bg-gradient-warm px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-warm">
                Reserve a slot
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}