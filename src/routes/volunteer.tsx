import { PageHero } from "@/components/site/PageHero";
import { ChefHat, Car, Megaphone, Camera, HeartHandshake } from "lucide-react";
import { useState } from "react";

const roles = [
  { icon: ChefHat, title: "Cooking Team", text: "Roll, knead and cook chapati with our kitchen crew." },
  { icon: Car, title: "Drivers", text: "Help us reach homes across counties with safe transport." },
  { icon: Megaphone, title: "Event Coordinators", text: "Plan logistics, volunteers and partnerships." },
  { icon: Camera, title: "Media Team", text: "Capture stories through photo, video and design." },
  { icon: HeartHandshake, title: "Fundraising", text: "Mobilize resources, sponsors and partners." },
];

const WHATSAPP_NUMBER = "254701165121";

export default function Volunteer() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "");
    const phone = String(fd.get("phone") ?? "");
    const email = String(fd.get("email") ?? "");
    const role = String(fd.get("role") ?? "");
    const reason = String(fd.get("reason") ?? "");

    const message =
      `*New Volunteer Registration*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Email:* ${email}%0A` +
      `*Preferred Role:* ${role}%0A` +
      `*Why join:* ${reason}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Volunteer"
        title={<>Bring your <em className="not-italic text-gradient-warm">gifts</em> to the table.</>}
        description="Volunteering with Chapati Sunday is more than service — it's a community. Pick a role that fits you."
      />

      <section className="container-page py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {roles.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-border bg-card p-6">
              <Icon className="h-6 w-6 text-primary" />
              <p className="mt-4 font-display text-xl">{title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-page max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl">Register as a Volunteer</h2>
          <p className="mt-3 text-muted-foreground">Fill in your details — your registration will be sent to our team on WhatsApp so we can welcome you personally.</p>

          {submitted ? (
            <div className="mt-8 rounded-3xl border border-leaf/30 bg-background p-8 text-center shadow-soft">
              <p className="font-display text-2xl">Karibu! 🎉</p>
              <p className="mt-2 text-muted-foreground">Your WhatsApp message is ready — tap send to complete your registration.</p>
              <button onClick={() => setSubmitted(false)} className="mt-4 text-sm font-semibold text-primary hover:underline">
                Submit another registration
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 grid gap-4 rounded-3xl border border-border bg-background p-6 shadow-soft md:p-8"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field label="Phone (WhatsApp)" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <div>
                <label className="text-sm font-medium">Preferred Role</label>
                <select name="role" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm">
                  {roles.map((r) => <option key={r.title}>{r.title}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Why do you want to join?</label>
                <textarea name="reason" rows={4} className="mt-1.5 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm" />
              </div>
              <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-warm px-6 py-3 text-sm font-semibold text-primary-foreground shadow-warm hover:-translate-y-0.5 transition-transform">
                Send via WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <input id={name} name={name} type={type} required={required} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
    </div>
  );
}