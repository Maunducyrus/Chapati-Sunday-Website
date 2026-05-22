import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useCart } from "@/components/cart/CartContext";
import { Check, Copy, MessageCircle, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Chapati Sunday Shop" },
      { name: "description", content: "Pay via M-Pesa Paybill and confirm your merch order with our team." },
    ],
  }),
  component: Checkout,
});

const PAYBILL = "000000";
const ACCOUNT_PREFIX = "SHOP";
const WHATSAPP_NUMBER = "254701165121";
const SHIPPING_FLAT = 300;
const SHIPPING_FREE_OVER = 5000;

function genOrderId() {
  return `CS-${Date.now().toString(36).toUpperCase()}`;
}

function Checkout() {
  const { items, subtotal, clear } = useCart();
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", city: "", address: "", notes: "" });
  const [stage, setStage] = useState<"details" | "pay">("details");
  const [copied, setCopied] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    setOrderId(genOrderId());
  }, []);

  const shipping = subtotal === 0 ? 0 : subtotal >= SHIPPING_FREE_OVER ? 0 : SHIPPING_FLAT;
  const total = subtotal + shipping;
  const account = `${ACCOUNT_PREFIX}-${orderId.replace("CS-", "")}`;

  const copy = (text: string, key: string) => {
    navigator.clipboard?.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  if (items.length === 0 && !confirmed) {
    return (
      <section className="container-page py-24 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-secondary">
          <ShoppingBag className="h-7 w-7 text-muted-foreground" />
        </div>
        <h1 className="mt-5 font-display text-3xl">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">Add a few items first, then come back to checkout.</p>
        <Link to="/shop" className="mt-6 inline-flex rounded-full bg-gradient-warm px-6 py-3 text-sm font-semibold text-primary-foreground shadow-warm">
          Go to shop
        </Link>
      </section>
    );
  }

  if (confirmed) {
    return (
      <section className="container-page py-20">
        <div className="mx-auto max-w-xl rounded-3xl border border-border bg-card p-8 text-center shadow-soft">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-leaf/15 text-leaf">
            <Check className="h-7 w-7" />
          </div>
          <h1 className="mt-5 font-display text-3xl">Asante sana!</h1>
          <p className="mt-2 text-muted-foreground">
            Your order <span className="font-semibold text-foreground">{orderId}</span> has been recorded.
            We'll confirm payment and arrange delivery shortly.
          </p>
          <Link to="/shop" className="mt-6 inline-flex rounded-full bg-gradient-warm px-6 py-3 text-sm font-semibold text-primary-foreground shadow-warm">
            Continue shopping
          </Link>
        </div>
      </section>
    );
  }

  const buildWhatsAppMessage = () => {
    const lines = [
      `Hello Chapati Sunday! I have placed an order:`,
      ``,
      `Order: ${orderId}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Delivery: ${form.address}, ${form.city}`,
      ``,
      `Items:`,
      ...items.map((i) => `- ${i.name}${i.size ? ` (${i.size})` : ""} x${i.qty} — KSh ${(i.price * i.qty).toLocaleString()}`),
      ``,
      `Shipping: KSh ${shipping.toLocaleString()}`,
      `Total: KSh ${total.toLocaleString()}`,
      `Paid via M-Pesa Paybill ${PAYBILL}, Account ${account}`,
      form.notes ? `\nNotes: ${form.notes}` : "",
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  const handleSubmitDetails = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setStage("pay");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleConfirmPaid = () => {
    setConfirmed(true);
    clear();
    setTimeout(() => navigate({ to: "/" }), 6000);
  };

  return (
    <section className="container-page py-12 md:py-16">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Checkout</p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">
          {stage === "details" ? "Shipping details" : "Pay with M-Pesa"}
        </h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="order-2 lg:order-1">
          {stage === "details" ? (
            <form onSubmit={handleSubmitDetails} className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" required>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Jane Wanjiku"
                  />
                </Field>
                <Field label="Phone (M-Pesa)" required>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="07XX XXX XXX"
                  />
                </Field>
              </div>
              <Field label="City / Town" required>
                <input
                  required
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Nairobi"
                />
              </Field>
              <Field label="Delivery address" required>
                <textarea
                  required
                  rows={3}
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                  placeholder="Estate, street, building, house number"
                />
              </Field>
              <Field label="Order notes (optional)">
                <textarea
                  rows={2}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                  placeholder="Anything we should know?"
                />
              </Field>
              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-leaf px-6 py-3 text-sm font-semibold text-leaf-foreground shadow-warm"
              >
                <MessageCircle className="h-4 w-4" /> Send order via WhatsApp →
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Your order summary opens in WhatsApp to +254 701 165 121. Payment details show next.
              </p>
            </form>
          ) : (
            <div className="space-y-5">
              <div className="rounded-3xl bg-gradient-warm p-6 text-primary-foreground shadow-warm md:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider opacity-90">Step 1 · Send M-Pesa</p>
                <h2 className="mt-2 font-display text-2xl md:text-3xl">Pay KSh {total.toLocaleString()} via Paybill</h2>
                <ol className="mt-5 space-y-3 text-sm text-primary-foreground/95">
                  <li>1. On M-Pesa, choose <span className="font-semibold">Lipa na M-Pesa → Paybill</span>.</li>
                  <li>2. Enter the details below exactly as shown.</li>
                  <li>3. Confirm payment, then come back and tap <span className="font-semibold">"I've paid"</span>.</li>
                </ol>

                <dl className="mt-6 space-y-2.5 rounded-2xl bg-white/15 p-4 backdrop-blur">
                  <PayRow label="Paybill" value={PAYBILL} onCopy={() => copy(PAYBILL, "pb")} copied={copied === "pb"} />
                  <PayRow label="Account no." value={account} onCopy={() => copy(account, "acc")} copied={copied === "acc"} />
                  <PayRow label="Amount (KSh)" value={total.toLocaleString()} onCopy={() => copy(String(total), "amt")} copied={copied === "amt"} />
                </dl>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Step 2 · Confirm</p>
                <h2 className="mt-2 font-display text-2xl">Send us your order</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Send your M-Pesa confirmation to our team via WhatsApp so we can dispatch your items.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-leaf px-5 py-3 text-sm font-semibold text-leaf-foreground"
                  >
                    <MessageCircle className="h-4 w-4" /> Send on WhatsApp
                  </a>
                  <button
                    onClick={handleConfirmPaid}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold hover:bg-secondary"
                  >
                    <Check className="h-4 w-4" /> I've paid
                  </button>
                </div>
                <button
                  onClick={() => setStage("details")}
                  className="mt-4 text-xs text-muted-foreground hover:text-foreground"
                >
                  ← Edit shipping details
                </button>
              </div>
            </div>
          )}
        </div>

        <aside className="order-1 lg:order-2">
          <div className="sticky top-24 rounded-3xl border border-border bg-cream p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl">Order summary</h2>
              <span className="text-xs text-muted-foreground">#{orderId}</span>
            </div>
            <ul className="mt-4 space-y-3">
              {items.map((it) => (
                <li key={`${it.id}-${it.size ?? ""}`} className="flex gap-3">
                  <div className="relative">
                    <img src={it.image} alt={it.name} className="h-14 w-14 rounded-xl object-cover" />
                    <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-foreground px-1 text-[10px] font-semibold text-background">
                      {it.qty}
                    </span>
                  </div>
                  <div className="flex flex-1 items-center justify-between gap-2 text-sm">
                    <div>
                      <p className="font-medium leading-tight">{it.name}</p>
                      {it.size && <p className="text-xs text-muted-foreground">Size {it.size}</p>}
                    </div>
                    <p className="font-semibold">KSh {(it.price * it.qty).toLocaleString()}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
              <Row label="Subtotal" value={`KSh ${subtotal.toLocaleString()}`} />
              <Row label="Shipping" value={shipping === 0 ? "Free" : `KSh ${shipping.toLocaleString()}`} />
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-border pt-4">
              <span className="font-display text-lg">Total</span>
              <span className="font-display text-2xl text-primary">KSh {total.toLocaleString()}</span>
            </div>
            {subtotal < SHIPPING_FREE_OVER && (
              <p className="mt-3 text-xs text-muted-foreground">
                Add KSh {(SHIPPING_FREE_OVER - subtotal).toLocaleString()} more for free shipping.
              </p>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}{required && <span className="ml-1 text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-muted-foreground">
      <span>{label}</span>
      <span className="font-medium text-foreground">{value}</span>
    </div>
  );
}

function PayRow({ label, value, onCopy, copied }: { label: string; value: string; onCopy: () => void; copied: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="text-sm opacity-90">{label}</dt>
      <dd className="flex items-center gap-2">
        <span className="font-mono text-base font-semibold tracking-wider">{value}</span>
        <button
          onClick={onCopy}
          className="grid h-7 w-7 place-items-center rounded-full bg-white/20 hover:bg-white/30"
          aria-label={`Copy ${label}`}
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        </button>
      </dd>
    </div>
  );
}
