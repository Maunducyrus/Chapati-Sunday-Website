import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
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

const photos = [g1, g2, g3, g4, hero, about, g4, g1, g2, g3, hero, about];

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Moments of <em className="not-italic text-gradient-warm">joy</em> and connection.</>}
        description="Photographs from our outreach visits, kitchens and the children we love."
      />
      <section className="container-page py-20">
        <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
          {photos.map((src, i) => (
            <img key={i} src={src} alt="" loading="lazy" className="mb-4 w-full break-inside-avoid rounded-2xl object-cover" />
          ))}
        </div>
      </section>
    </>
  );
}
