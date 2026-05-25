import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { ShoppingBag, Heart, Truck, Plus, Check } from "lucide-react";
import { useCart } from "@/components/cart/CartContext";
import tshirt from "@/assets/shop-tshirt.jpg";
import hoodie from "@/assets/shop-hoodie.jpg";
import cap from "@/assets/shop-cap.jpg";
import tote from "@/assets/shop-tote.jpg";

const products = [
  { id: "tee", name: "Signature Tee", price: 1500, image: tshirt, tag: "Bestseller", desc: "100% cotton, screen-printed in Nairobi.", sizes: ["S", "M", "L", "XL"] },
  { id: "hoodie", name: "Sunday Hoodie", price: 3500, image: hoodie, tag: "New", desc: "Heavyweight fleece in earthy chapati brown.", sizes: ["S", "M", "L", "XL"] },
  { id: "cap", name: "Outreach Cap", price: 1200, image: cap, tag: "", desc: "Embroidered six-panel cap, adjustable strap.", sizes: [] },
  { id: "tote", name: "Canvas Tote", price: 800, image: tote, tag: "", desc: "Sturdy 12oz canvas — carry the cause.", sizes: [] },
];

export default function Shop() {
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
            Paybill <span className="text-primary">714777</span> · Account <span className="text-primary">0740197332</span>
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Send your order details to <span className="font-semibold text-foreground">+254 718 044 520</span> on WhatsApp after payment and we'll arrange delivery.
          </p>
        </div>
      </section>
    </>
  );
}

type Product = (typeof products)[number];

function ProductCard({ product, onAdd }: { product: Product; onAdd: ReturnType<typeof useCart>["add"] }) {
  const hasSizes = product.sizes.length > 0;
  const [size, setSize] = useState<string>(hasSizes ? product.sizes[0] : "");
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd({ id: product.id, name: product.name, price: product.price, image: product.image, size: size || undefined });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-warm">
      <div className="relative aspect-square overflow-hidden bg-cream">
        <img
          src={product.image}
          alt={product.name}
          width={800}
          height={800}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            {product.tag}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl">{product.name}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{product.desc}</p>
        {hasSizes && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={
                  "h-7 min-w-8 rounded-full border px-2 text-[11px] font-semibold transition-colors " +
                  (size === s
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background hover:border-primary")
                }
              >
                {s}
              </button>
            ))}
          </div>
        )}
        <div className="mt-4 flex items-center justify-between gap-2">
          <p className="font-display text-lg text-primary">KSh {product.price.toLocaleString()}</p>
          <button
            onClick={handleAdd}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-warm px-4 py-2 text-xs font-semibold text-primary-foreground shadow-warm transition-transform hover:-translate-y-0.5"
          >
            {added ? <><Check className="h-3.5 w-3.5" /> Added</> : <><Plus className="h-3.5 w-3.5" /> Add</>}
          </button>
        </div>
      </div>
    </article>
  );
}