"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartItem, Product } from "@/types";

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (
    product: Product,
    options: { size: string; colour: string; quantity?: number }
  ) => void;
  removeItem: (productId: string, size: string, colour: string) => void;
  updateQuantity: (
    productId: string,
    size: string,
    colour: string,
    quantity: number
  ) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "helen-lifestyle-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = useCallback(
    (
      product: Product,
      options: { size: string; colour: string; quantity?: number }
    ) => {
      const quantity = options.quantity ?? 1;
      setItems((prev) => {
        const existing = prev.find(
          (i) =>
            i.productId === product.id &&
            i.size === options.size &&
            i.colour === options.colour
        );
        if (existing) {
          return prev.map((i) =>
            i === existing ? { ...i, quantity: i.quantity + quantity } : i
          );
        }
        return [
          ...prev,
          {
            productId: product.id,
            slug: product.slug,
            name: product.name,
            image: product.images[0],
            price: product.price,
            salePrice: product.salePrice,
            size: options.size,
            colour: options.colour,
            quantity,
          },
        ];
      });
    },
    []
  );

  const removeItem = useCallback(
    (productId: string, size: string, colour: string) => {
      setItems((prev) =>
        prev.filter(
          (i) =>
            !(
              i.productId === productId &&
              i.size === size &&
              i.colour === colour
            )
        )
      );
    },
    []
  );

  const updateQuantity = useCallback(
    (productId: string, size: string, colour: string, quantity: number) => {
      if (quantity < 1) {
        removeItem(productId, size, colour);
        return;
      }
      setItems((prev) =>
        prev.map((i) =>
          i.productId === productId && i.size === size && i.colour === colour
            ? { ...i, quantity }
            : i
        )
      );
    },
    [removeItem]
  );

  const clearCart = useCallback(() => setItems([]), []);

  const itemCount = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () =>
      items.reduce(
        (sum, i) => sum + (i.salePrice ?? i.price) * i.quantity,
        0
      ),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    }),
    [items, itemCount, subtotal, addItem, removeItem, updateQuantity, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
