import { PageHero } from "@/components/site/PageHero";
import aboutImg from "@/assets/about-team.jpg";
import { Heart, Sparkles, Users, HandHeart } from "lucide-react";

const milestones = [
  { year: "2019", text: "Friends roll the first chapatis for a children's home in Kasarani." },
  { year: "2020", text: "Launched monthly outreach across Nairobi during the pandemic." },
  { year: "2022", text: "Extended Outreach outside Nairobi county." },
  { year: "2024", text: "Reached 10 counties and 5,000+ meals shared." },
];

const values = [
  { icon: Heart, title: "Compassion", text: "Every action is rooted in love and dignity." },
  { icon: HandHeart, title: "Service", text: "We show up consistently, rain or shine." },
  { icon: Users, title: "Community", text: "We grow stronger together." },
  { icon: Sparkles, title: "Joy", text: "We make every visit a celebration." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>A simple meal that became <em className="not-italic text-gradient-warm">a movement</em>.</>}
        description="We are volunteers, parents, students and dreamers united by one belief — every child deserves a warm meal and a warmer presence."
      />

      <section className="container-page grid gap-12 py-20 lg:grid-cols-2">
        <img src={aboutImg} alt="Volunteers cooking together" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft" loading="lazy" width={1200} height={900} />
        <div>
          <h2 className="font-display text-3xl md:text-4xl">Founder's Message</h2>
          <p className="mt-4 text-muted-foreground">
            "I never imagined a Sunday afternoon of rolling dough would lead us here. What we've learned is simple — children remember presence more than presents.
            Every plate of chapati carries a quiet promise: you are seen, you are loved."
          </p>
          <p className="mt-4 font-semibold">— Fred Nyaga, Founder</p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-page">
          <h2 className="font-display text-3xl md:text-4xl">Milestones</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m) => (
              <div key={m.year} className="rounded-3xl border border-border bg-background p-6 shadow-soft">
                <p className="font-display text-3xl text-gradient-warm">{m.year}</p>
                <p className="mt-2 text-sm text-muted-foreground">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <h2 className="font-display text-3xl md:text-4xl">Our Values</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-border bg-card p-6">
              <Icon className="h-6 w-6 text-primary" />
              <p className="mt-4 font-display text-xl">{title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}