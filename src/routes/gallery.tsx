import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ImageIcon } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import hero from "@/assets/hero-outreach.jpg";
import about from "@/assets/about-team.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Chapati Sunday" },
      { name: "description", content: "Moments from our outreach visits across Kenya." },
      { property: "og:title", content: "Gallery — Chapati Sunday" },
      { property: "og:description", content: "Moments from outreach visits." },
    ],
  }),
  component: Gallery,
});

// EDIT THIS LIST — mix of local assets, dummy URLs, and { placeholder: true } slots.
// To add a real image later: replace { placeholder: true } with { src: "https://..." }
// or import a local file at the top and use { src: yourImport }.
type Photo = { src?: string; alt?: string; placeholder?: boolean; size?: "lg" | "sm" };

const photos: Photo[] = [
  { src: hero, alt: "Outreach team at sunset", size: "lg" },
  { src: g1, alt: "Children sharing chapati" },
  { src: g2, alt: "Volunteers cooking" },
  { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80", alt: "Community gathering", size: "lg" },
  { src: g3, alt: "Mid-day meal service" },
  { src: g4, alt: "Joy at the table" },
  { src: about, alt: "Our team", size: "lg" },
  { src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80", alt: "Children playing" },
  { placeholder: true },
  { src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80", alt: "Hands sharing food", size: "lg" },
  { placeholder: true },
  { placeholder: true },
];

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Moments of <em className="not-italic text-gradient-warm">joy</em> and connection.</>}
        description="Photographs from our outreach visits, kitchens and the children we love."
      />
      <section className="container-page py-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p, i) => {
            const aspect = p.size === "lg" ? "aspect-[4/3]" : "aspect-square";
            return (
              <div
                key={i}
                className={`${aspect} ${p.size === "lg" ? "sm:col-span-2" : ""} overflow-hidden rounded-3xl border border-border bg-cream`}
              >
                {p.placeholder || !p.src ? (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground">
                    <ImageIcon className="h-8 w-8" />
                    <p className="text-xs">Image coming soon</p>
                  </div>
                ) : (
                  <img
                    src={p.src}
                    alt={p.alt ?? ""}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
