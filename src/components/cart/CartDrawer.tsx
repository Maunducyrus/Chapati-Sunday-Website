import { Link } from "@tanstack/react-router";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "./CartContext";
import { cn } from "@/lib/utils";

export function CartDrawer() {
  const { items, isOpen, close, updateQty, remove, subtotal, count } = useCart();

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-brown/40 backdrop-blur-sm transition-opacity",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={close}
        aria-hidden={!isOpen}
      />
      <aside
        className={cn(
          "fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-background shadow-warm transition-transform",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <h2 className="font-display text-xl">Your cart</h2>
            <span className="text-sm text-muted-foreground">({count})</span>
          </div>
          <button
            onClick={close}
            className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-foreground hover:bg-muted"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-secondary">
              <ShoppingBag className="h-7 w-7 text-muted-foreground" />
            </div>
            <p className="font-display text-lg">Your cart is empty</p>
            <p className="text-sm text-muted-foreground">Every item helps us cook more chapati.</p>
            <Link
              to="/shop"
              onClick={close}
              className="mt-2 rounded-full bg-gradient-warm px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-warm"
            >
              Browse shop
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="space-y-4">
                {items.map((it) => (
                  <li key={`${it.id}-${it.size ?? ""}`} className="flex gap-3 rounded-2xl border border-border bg-card p-3">
                    <img src={it.image} alt={it.name} className="h-20 w-20 shrink-0 rounded-xl object-cover" />
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-semibold leading-tight">{it.name}</p>
                          {it.size && <p className="text-xs text-muted-foreground">Size {it.size}</p>}
                        </div>
                        <button
                          onClick={() => remove(it.id, it.size)}
                          className="text-muted-foreground hover:text-destructive"
                          aria-label="Remove"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-border">
                          <button
                            onClick={() => updateQty(it.id, it.size, it.qty - 1)}
                            className="grid h-7 w-7 place-items-center hover:text-primary"
                            aria-label="Decrease"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="min-w-6 text-center text-sm font-semibold">{it.qty}</span>
                          <button
                            onClick={() => updateQty(it.id, it.size, it.qty + 1)}
                            className="grid h-7 w-7 place-items-center hover:text-primary"
                            aria-label="Increase"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <p className="text-sm font-semibold">KSh {(it.price * it.qty).toLocaleString()}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border bg-cream/60 px-5 py-4">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Subtotal</span>
                <span className="text-base font-semibold text-foreground">KSh {subtotal.toLocaleString()}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Shipping calculated at checkout.</p>
              <Link
                to="/checkout"
                onClick={close}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-warm px-5 py-3 text-sm font-semibold text-primary-foreground shadow-warm"
              >
                Checkout · KSh {subtotal.toLocaleString()}
              </Link>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
