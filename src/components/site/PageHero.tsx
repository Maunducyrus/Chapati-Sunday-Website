import { ReactNode } from "react";

export function PageHero({ eyebrow, title, description, children }: { eyebrow: string; title: ReactNode; description?: string; children?: ReactNode }) {
  return (
    <section className="bg-gradient-sunset">
      <div className="container-page py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[1.02] md:text-6xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{description}</p>}
        {children}
      </div>
    </section>
  );
}
