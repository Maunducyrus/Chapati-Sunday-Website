import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { ImageIcon, VideoIcon } from "lucide-react";
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
type Photo = { src?: string; alt?: string; placeholder?: boolean };

const photos: Photo[] = [
  { src: hero, alt: "Outreach team at sunset" },
  { src: g1, alt: "Children sharing chapati" },
  { src: g2, alt: "Volunteers cooking" },
  { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80", alt: "Community gathering" },
  { src: g3, alt: "Mid-day meal service" },
  { src: g4, alt: "Joy at the table" },
  { src: about, alt: "Our team" },
  { src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80", alt: "Children playing" },
  { src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80", alt: "Hands sharing food" },
  { placeholder: true },
  { placeholder: true },
  { placeholder: true },
];

// EDIT THIS LIST — videos. Use YouTube/Vimeo embed URLs, or direct .mp4 URLs.
// For YouTube: use "https://www.youtube.com/embed/VIDEO_ID"
// For direct file: set type: "file" and src to the .mp4 URL.
type Video = {
  src?: string;
  title?: string;
  type?: "embed" | "file";
  poster?: string;
  placeholder?: boolean;
};

const videos: Video[] = [
  {
    type: "embed",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Outreach highlights (replace with your video link)",
  },
  {
    type: "file",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    title: "Sample volunteer day (replace with your .mp4 link)",
    poster: hero,
  },
  { placeholder: true, title: "Video coming soon" },
  { placeholder: true, title: "Video coming soon" },
];

function Gallery() {
  const [tab, setTab] = useState<"images" | "videos">("images");

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Moments of <em className="not-italic text-gradient-warm">joy</em> and connection.</>}
        description="Photographs and videos from our outreach visits, kitchens and the children we love."
      />

      <section className="container-page py-12">
        {/* Tabs */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex rounded-full border border-border bg-cream p-1">
            <button
              onClick={() => setTab("images")}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                tab === "images"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <ImageIcon className="h-4 w-4" /> Images
            </button>
            <button
              onClick={() => setTab("videos")}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                tab === "videos"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <VideoIcon className="h-4 w-4" /> Videos
            </button>
          </div>
        </div>

        {tab === "images" ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {photos.map((p, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-3xl border border-border bg-cream"
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
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v, i) => (
              <div key={i} className="overflow-hidden rounded-3xl border border-border bg-cream">
                <div className="aspect-video w-full bg-foreground/5">
                  {v.placeholder || !v.src ? (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground">
                      <VideoIcon className="h-8 w-8" />
                      <p className="text-xs">Video coming soon</p>
                    </div>
                  ) : v.type === "file" ? (
                    <video
                      src={v.src}
                      poster={v.poster}
                      controls
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <iframe
                      src={v.src}
                      title={v.title ?? "Video"}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  )}
                </div>
                {v.title && (
                  <p className="px-4 py-3 text-sm text-muted-foreground">{v.title}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
