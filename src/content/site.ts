import heroImg from "@/assets/hero-outreach.jpg";
import aboutImg from "@/assets/about-team.jpg";

export const siteContent = {
  // --- Brand / SEO ---
  brand: {
    name: "Chapati Sunday",
    tagline: "Sharing Love, Meals & Hope",
    foundedYear: "2019",
    metaDescription:
      "We bring chapati, joy and hope to children's homes across Kenya. Volunteer, donate or join an outreach today.",
  },

  // --- Hero section ---
  hero: {
    image: heroImg, // replace src/assets/hero-outreach.jpg with your own photo
    imageAlt: "Volunteers and children sharing chapati at sunset in Kenya",
    badge: "Fully Registered Community Group · Since 2019",
    headlineStart: "Sharing ",
    headlineHighlight: "love, meals",
    headlineEnd: " and hope with children across Kenya.",
    subtitle:
      "Every Sunday, our volunteers cook chapati, share stories and bring joy to children's homes — one warm meal at a time.",
    primaryCta: { label: "Donate Now", href: "/donate" },
    secondaryCta: { label: "Become a Volunteer", href: "/volunteer" },
    tertiaryCta: { label: "Shop Merch", href: "/shop" },
    socialProof: "120+ volunteers serving with us",
    overlayBadge: { label: "Over the Sundays", text: "240 meals shared in Nairobi" },
  },

  // --- About section ---
  about: {
    image: aboutImg,
    eyebrow: "About Chapati Sunday",
    title: "A simple meal that became a movement.",
    paragraphs: [
      "What started as a handful of friends rolling chapati on a quiet Sunday has grown into a community of over a hundred volunteers reaching children's homes in ten counties.",
      "We believe a warm meal is more than food — it is dignity, presence and the promise that someone cares.",
    ],
    mission: "Bring nourishment and joy to every child we meet.",
    vision: "A Kenya where no child eats — or feels — alone.",
  },

  // --- Impact stats ---
  stats: [
    { value: 5000, suffix: "+", label: "Meals Shared" },
    { value: 35, suffix: "", label: "Children's Homes Visited" },
    { value: 120, suffix: "+", label: "Volunteers" },
    { value: 10, suffix: "", label: "Counties Reached" },
  ],

  // --- Current needs ---
  needs: [
    { title: "Food", color: "primary", items: ["Flour", "Cooking oil", "Sugar", "Rice"] },
    { title: "Children", color: "leaf", items: ["Clothes", "Shoes", "Sanitary pads", "School supplies"] },
    { title: "Financial", color: "accent", items: ["Transport", "Medical support", "Emergency funds"] },
  ],

  // --- Upcoming events ---
  events: [
    { name: "Chapati Sunday Outreach", date: "June 15", location: "Nairobi", slots: 12 },
    { name: "Back-to-School Drive", date: "July 06", location: "Kiambu", slots: 8 },
    { name: "Mid-Year Mega Visit", date: "Aug 24", location: "Nakuru", slots: 20 },
  ],

  // --- Testimonials ---
  testimonials: [
    {
      quote:
        "Chapati Sunday brought joy and hope to children. The visits are a highlight every month.",
      name: "Fred Nyaga",
      role: "Chairperson, Chapati Sunday",
    },
    {
      quote: "Volunteering changed my life. I came to give and left with so much more.",
      name: "Cyrus Maundu.",
      role: "Volunteer since 2025",
    },
    {
      quote: "The team is consistent, kind and truly committed to kids. Spreading Love",
      name: "Njambi",
      role: "Volunteer since 2025",
    },
  ],

  // --- Final CTA banner ---
  cta: {
    title: "Become part of the Sunday family.",
    description:
      "Whether you cook, drive, coordinate or donate — there is a place for you at the table.",
    primary: { label: "Join the Team", href: "/volunteer" },
    secondary: { label: "Make a Donation", href: "/donate" },
  },
};
