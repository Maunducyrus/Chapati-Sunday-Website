import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ShoppingBag, Heart, Truck } from "lucide-react";
import { useCart } from "@/components/cart/CartContext";
import tshirt from "@/assets/shop-tshirt.jpg";
import hoodie from "@/assets/shop-hoodie.jpg";
import cap from "@/assets/shop-cap.jpg";
import tote from "@/assets/shop-tote.jpg";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Chapati Sunday" },
      { name: "description", content: "Wear the cause. Every t-shirt, hoodie, cap and tote you buy funds meals for children across Kenya." },
      { property: "og:title", content: "Shop Chapati Sunday Merch" },
      { property: "og:description", content: "Branded merch that funds chapati outreach." },
      { property: "og:image", content: tshirt },
    ],
  }),
  component: Shop,
});

const products = [
  { id: "tee", name: "Signature Tee", price: 1500, image: tshirt, tag: "Bestseller", desc: "100% cotton, screen-printed in Nairobi.", sizes: ["S", "M", "L", "XL"] },
  { id: "hoodie", name: "Sunday Hoodie", price: 3500, image: hoodie, tag: "New", desc: "Heavyweight fleece in earthy chapati brown.", sizes: ["S", "M", "L", "XL"] },
  { id: "cap", name: "Outreach Cap", price: 1200, image: cap, tag: "", desc: "Embroidered six-panel cap, adjustable strap.", sizes: [] },
  { id: "tote", name: "Canvas Tote", price: 800, image: tote, tag: "", desc: "Sturdy 12oz canvas — carry the cause.", sizes: [] },
];

function Shop() {
  const { add } = useCart();
  return (
    <>
      <PageHero
        eyebrow="Online Shop"
        title={<>Wear the cause. <em className="not-italic text-gradient-warm">Feed a child.</em></>}
        description="Every item you buy directly funds chapati, transport and supplies for our Sunday outreach visits. 100% of profits go to the kids."
      />

      <section className="container-page py-12 md:py-16">
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Heart, title: "100% to outreach", text: "Profits fund meals & supplies" },
            { icon: Truck, title: "Nationwide delivery", text: "Free shipping over KSh 5,000" },
            { icon: ShoppingBag, title: "Locally made", text: "Printed by Nairobi small businesses" },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-xs text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={add} />
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-cream p-6 text-center md:p-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Pay with M-Pesa Paybill</p>
          <p className="mt-3 font-display text-2xl md:text-3xl">
            Paybill <span className="text-primary">000000</span> · Account <span className="text-primary">SHOP-YOURNAME</span>
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Send your order details to <span className="font-semibold text-foreground">+254 700 000 000</span> on WhatsApp after payment and we'll arrange delivery.
          </p>
        </div>
      </section>
    </>
  );
}
