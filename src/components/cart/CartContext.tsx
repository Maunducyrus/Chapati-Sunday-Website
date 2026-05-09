import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  size?: string;
  qty: number;
};

type CartContextType = {
  items: CartItem[];
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  remove: (id: string, size?: string) => void;
  updateQty: (id: string, size: string | undefined, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const CartContext = createContext<CartContextType | null>(null);
const STORAGE_KEY = "chapati-cart-v1";

const keyOf = (id: string, size?: string) => `${id}::${size ?? ""}`;

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const add: CartContextType["add"] = (item, qty = 1) => {
    setItems((prev) => {
      const k = keyOf(item.id, item.size);
      const existing = prev.find((p) => keyOf(p.id, p.size) === k);
      if (existing) {
        return prev.map((p) => (keyOf(p.id, p.size) === k ? { ...p, qty: p.qty + qty } : p));
      }
      return [...prev, { ...item, qty }];
    });
    setIsOpen(true);
  };

  const remove: CartContextType["remove"] = (id, size) => {
    setItems((prev) => prev.filter((p) => keyOf(p.id, p.size) !== keyOf(id, size)));
  };

  const updateQty: CartContextType["updateQty"] = (id, size, qty) => {
    if (qty <= 0) return remove(id, size);
    setItems((prev) => prev.map((p) => (keyOf(p.id, p.size) === keyOf(id, size) ? { ...p, qty } : p)));
  };

  const clear = () => setItems([]);

  const value = useMemo<CartContextType>(
    () => ({
      items,
      add,
      remove,
      updateQty,
      clear,
      count: items.reduce((n, i) => n + i.qty, 0),
      subtotal: items.reduce((s, i) => s + i.qty * i.price, 0),
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    [items, isOpen],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
