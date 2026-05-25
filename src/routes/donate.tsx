import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Heart, Repeat, Home } from "lucide-react";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Chapati Sunday" },
      { name: "description", content: "Support our outreach via M-Pesa, bank transfer or sponsorship. Every shilling becomes a meal." },
      { property: "og:title", content: "Donate to Chapati Sunday" },
      { property: "og:description", content: "Every shilling becomes a meal." },
    ],
  }),
  component: Donate,
});

const amounts = [500, 1000, 2500, 5000];

function Donate() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title={<>Every contribution becomes a <em className="not-italic text-gradient-warm">warm meal</em>.</>}
        description="Your generosity provides chapati, essentials and joy to the children we serve. Choose how you'd like to give."
      />

      <section className="container-page py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-gradient-warm p-8 text-primary-foreground shadow-warm md:p-10">
            <Heart className="h-7 w-7" />
            <h2 className="mt-4 font-display text-3xl">M-Pesa</h2>
            <dl className="mt-6 space-y-3 text-primary-foreground/95">
              <div className="flex items-center justify-between border-b border-white/20 pb-3"><dt>Paybill</dt><dd className="font-semibold">714777</dd></div>
              <div className="flex items-center justify-between border-b border-white/20 pb-3"><dt>Account</dt><dd className="font-semibold">0740197332</dd></div>
              {/* <div className="flex items-center justify-between"><dt>Till Number</dt><dd className="font-semibold">123456</dd></div> */}
            </dl>
            <p className="mt-6 text-sm text-primary-foreground/85">After sending, you'll receive an automated thank-you via SMS or WhatsApp.</p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10">
            <h2 className="font-display text-3xl">Quick Give</h2>
            <p className="mt-2 text-sm text-muted-foreground">Pick an amount that feels right.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {amounts.map((a) => (
                <button key={a} className="rounded-2xl border border-border bg-background py-4 text-sm font-semibold transition-colors hover:border-primary hover:bg-primary/5">
                  KSh {a.toLocaleString()}
                </button>
              ))}
            </div>
            <input placeholder="Custom amount (KSh)" className="mt-4 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm" />
            <button className="mt-4 w-full rounded-full bg-gradient-warm px-6 py-3 text-sm font-semibold text-primary-foreground shadow-warm">
              Donate Now
            </button>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {[
            { icon: Repeat, title: "Become a Monthly Donor", text: "Set a recurring contribution and help us plan ahead with confidence." },
            { icon: Home, title: "Sponsor a Children's Home", text: "Adopt a home and cover their monthly visit, meals and supplies." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-border bg-card p-7">
              <Icon className="h-6 w-6 text-primary" />
              <p className="mt-4 font-display text-xl">{title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              <button className="mt-5 inline-flex items-center rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-secondary">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
