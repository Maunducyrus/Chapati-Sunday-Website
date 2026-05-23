import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — Chapati Sunday" },
      { name: "description", content: "The numbers behind our outreach: meals shared, homes visited and communities reached." },
      { property: "og:title", content: "Our Impact" },
      { property: "og:description", content: "The numbers behind our outreach." },
    ],
  }),
  component: Impact,
});

const stats = [
  { value: 5000, suffix: "+", label: "Meals Shared" },
  { value: 35, suffix: "", label: "Children's Homes Visited" },
  { value: 120, suffix: "+", label: "Volunteers" },
  { value: 10, suffix: "", label: "Counties Reached" },
  { value: 240, suffix: "", label: "Donations Distributed" },
  { value: 52, suffix: "", label: "Sunday Outreaches / Year" },
];

function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Our Impact"
        title={<>Numbers that <em className="not-italic text-gradient-warm">tell a story</em>.</>}
        description="Every figure here represents a child smiling, a kitchen warmed and a community moved."
      />

      <section className="container-page py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <p className="font-display text-6xl text-gradient-warm">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm font-medium text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
