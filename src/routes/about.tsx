import { PageHero } from "@/components/site/PageHero";
import aboutImg from "@/assets/about-team.jpg";
import { Heart, Sparkles, Users, HandHeart } from "lucide-react";

const milestones = [
  { year: "2019", text: "The First Batch - Friends roll the first chapatis for a Tree Side Special School in Kasarani, sparking a grassroots initiative built on simple acts of kindness." },
  { year: "2020", text: "Unwavering Support - Launched structured monthly outreach sessions across Nairobi during the pandemic, ensuring vulnerable children received food, presence, and consistent support." },
  { year: "2022", text: "Broadening Horizon - Extended outreach initiatives beyond Nairobi, partnering with community shelters and children's homes in neighbouring counties." },
  { year: "2024", text: "Growing Movement - Reached 10 counties and surpassed 5,000+ warm meals shared, expanding our volunteer network to drive sustainable community impact." },
];

const values = [
  { icon: Heart, title: "Empowerment", text: "We inspire individuals to recognize their capacity to create positive, sustainable change right where they are." },
  { icon: HandHeart, title: "Mentorship & Growth", text: "We leverage our presence to offer guidance, practical skill-building, and encouragement so children thrive long after our visits." },
  { icon: Users, title: "Dignity & Respect", text: "We ensure that every meal, mentorship session, and interaction honors the self-worth and potential of those we serve." },
  { icon: Sparkles, title: "Inclusivity & Belonging", text: "We foster a warm, welcoming environment where volunteers, children, and partners unite as one family." },
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
            "What started as a few friends gathering to roll dough and prepare meals
            quickly grew into something far bigger than any of us anticipated.
            Over time, we’ve learned a profound truth: while a hot plate of 
            chapati feeds the body, it is our presence, laughter, and time 
            that truly nourish the heart. Children don’t just remember the food; 
            they remember the people who took the time to listen, play, 
            and stand beside them.
            Every meal we serve carries a quiet, unwavering promise to
            every child we meet: you are seen, you matter, and you are loved.
            "
          </p>
          <p className="mt-4 font-semibold">— Fred Nyaga, Founder & Chairperson</p>
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