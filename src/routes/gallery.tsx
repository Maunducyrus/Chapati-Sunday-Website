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

type Photo = { src?: string; alt?: string; placeholder?: boolean };

const photos: Photo[] = [
  { src: hero, alt: "Outreach team at sunset" },
  { src: g1, alt: "Children sharing chapati" },
  { src: g2, alt: "Volunteers cooking" },
  { src: "https://res.cloudinary.com/drg4s6msd/image/upload/v1779699708/G15_xwhaqq.jpg", alt: "Community gathering" },
  { src: g3, alt: "Mid-day meal service" },
  { src: g4, alt: "Joy at the table" },
  { src: about, alt: "Our team" },
  { src: "https://res.cloudinary.com/drg4s6msd/image/upload/v1779699709/G14_poqgjm.jpg", alt: "Children playing" },
  { src: "https://res.cloudinary.com/drg4s6msd/image/upload/q_auto/f_auto/v1779698737/Chapati_Nakuru_zzt2ik.jpg", alt: "Hands sharing food" },

  { src: "https://res.cloudinary.com/drg4s6msd/image/upload/v1779699763/G12_aogrha.jpg", alt: "Hands sharing food" },
  { src: "https://res.cloudinary.com/drg4s6msd/image/upload/v1779699836/G11_eaov4u.jpg", alt: "Hands sharing food" },
  { src: "https://res.cloudinary.com/drg4s6msd/image/upload/v1779699837/G10_cspcnm.jpg", alt: "Hands sharing food" },
  { src: "https://res.cloudinary.com/drg4s6msd/image/upload/v1779699837/G9_fjr2jj.jpg", alt: "Hands sharing food" },
  { src: "https://res.cloudinary.com/drg4s6msd/image/upload/v1779699842/G8_nqzga5.jpg", alt: "Hands sharing food" },
  { src: "https://res.cloudinary.com/drg4s6msd/image/upload/v1779699849/G7_n1lo9g.jpg", alt: "Hands sharing food" },
  { src: "https://res.cloudinary.com/drg4s6msd/image/upload/v1779699850/G5_zsalft.jpg", alt: "Hands sharing food" },

  { src: "https://res.cloudinary.com/drg4s6msd/image/upload/v1779699855/G3_vy4b1p.jpg", alt: "Hands sharing food" },
  { src: "https://res.cloudinary.com/drg4s6msd/image/upload/v1779699855/G6_p7wuxa.jpg", alt: "Hands sharing food" },
  { src: "https://res.cloudinary.com/drg4s6msd/image/upload/v1779699856/G4_wicmrp.jpg", alt: "Hands sharing food" },

  { src: "https://res.cloudinary.com/drg4s6msd/image/upload/v1779699863/G1_baalkq.jpg", alt: "Hands sharing food" },
  { src: "https://res.cloudinary.com/drg4s6msd/image/upload/v1779699886/G13_igmckt.jpg", alt: "Hands sharing food" },



  { src: "https://res.cloudinary.com/drg4s6msd/image/upload/v1779700761/G16_k2vuj3.jpg", alt: "Chapati Preparations" },
  { src: "https://res.cloudinary.com/drg4s6msd/image/upload/v1779701223/G17_xvjuny.jpg", alt: "Chapati Preparations" },
  { src: "https://res.cloudinary.com/drg4s6msd/image/upload/v1779701224/G18_x8qvbh.jpg", alt: "Chapati Preparations" },  
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
      <section className="container-page py-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {photos.map((p, i) => (
            <div
              key={i}
              // className="aspect-square overflow-hidden rounded-3xl border border-border bg-cream"
              className="aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-cream"
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
