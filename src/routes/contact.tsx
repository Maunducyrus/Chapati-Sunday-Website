import { PageHero } from "@/components/site/PageHero";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>We'd love to <em className="not-italic text-gradient-warm">hear from you</em>.</>}
        description="Partnerships, media or just to say hi — pick the channel that works for you."
      />

      <section className="container-page py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            {[
              { icon: Phone, label: "Phone", value: "+254 718 044 520" },
              { icon: MessageCircle, label: "WhatsApp", value: "+254 718 044 520" },
              { icon: Mail, label: "Email", value: "hello@chapatisunday.org" },
              { icon: MapPin, label: "Location", value: "Nairobi, Kenya" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                  <p className="font-semibold">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll get back to you soon."); }}
            className="rounded-3xl border border-border bg-card p-7 shadow-soft md:p-8"
          >
            <h2 className="font-display text-2xl">Send us a message</h2>
            <div className="mt-5 grid gap-4">
              <input placeholder="Your name" required className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm" />
              <input placeholder="Your email" type="email" required className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm" />
              <input placeholder="Subject" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm" />
              <textarea rows={5} placeholder="How can we help?" className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm" />
              <button type="submit" className="rounded-full bg-gradient-warm px-6 py-3 text-sm font-semibold text-primary-foreground shadow-warm">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}