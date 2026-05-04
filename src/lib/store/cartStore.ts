import { create } from "zustand";
import { getProductById } from "@/lib/data/products";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  note?: string;
}

interface BundleState {
  selectedFlavors: Record<string, number>;
  bundleSize: 6 | 12 | 24 | null;
  totalSelected: number;
  note: string;
}

interface CartStore {
  items: CartItem[];
  bundle: BundleState;
  isOpen: boolean;
  isOrderModalOpen: boolean;
  addItem: (item: Omit<CartItem, "quantity">, qty?: number) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setCartOpen: (open: boolean) => void;
  openOrderModal: () => void;
  closeOrderModal: () => void;
  total: () => number;
  itemCount: () => number;
  setBundleSize: (size: 6 | 12 | 24) => void;
  incrementFlavor: (productId: string) => void;
  decrementFlavor: (productId: string) => void;
  addBundleToCart: () => void;
  clearBundle: () => void;
  setBundleNote: (note: string) => void;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  isOrderModalOpen: false,
  bundle: {
    selectedFlavors: {},
    bundleSize: null,
    totalSelected: 0,
    note: "",
  },

  addItem: (item, qty = 1) =>
    set((s) => {
      const add = Math.max(1, qty);
      const existing = s.items.find((i) => i.id === item.id);
      if (existing) {
        return {
          items: s.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + add } : i,
          ),
          isOpen: true,
        };
      }
      return { items: [...s.items, { ...item, quantity: add }], isOpen: true };
    }),

  removeItem: (id) =>
    set((s) => ({ items: s.items.filter((i) => i.id !== id) })),

  updateQty: (id, qty) =>
    set((s) => ({
      items:
        qty <= 0
          ? s.items.filter((i) => i.id !== id)
          : s.items.map((i) => (i.id === id ? { ...i, quantity: qty } : i)),
    })),

  clearCart: () => set({ items: [] }),
  toggleCart: () => set((s) => ({ isOpen: !s.isOpen })),
  setCartOpen: (open) => set({ isOpen: open }),
  openOrderModal: () => set({ isOrderModalOpen: true, isOpen: false }),
  closeOrderModal: () => set({ isOrderModalOpen: false }),

  total: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
  itemCount: () =>
    get().items.reduce((sum, i) => sum + i.quantity, 0),

  setBundleSize: (size) =>
    set((s) => ({
      bundle: {
        ...s.bundle,
        bundleSize: size,
        selectedFlavors: {},
        totalSelected: 0,
        note: "",
      },
    })),

  setBundleNote: (note) =>
    set((s) => ({ bundle: { ...s.bundle, note } })),

  incrementFlavor: (productId) =>
    set((s) => {
      const current = s.bundle.selectedFlavors[productId] ?? 0;
      const total = s.bundle.totalSelected;
      const max = s.bundle.bundleSize ?? 0;
      if (total >= max) return s;
      return {
        bundle: {
          ...s.bundle,
          selectedFlavors: {
            ...s.bundle.selectedFlavors,
            [productId]: current + 1,
          },
          totalSelected: total + 1,
        },
      };
    }),

  decrementFlavor: (productId) =>
    set((s) => {
      const current = s.bundle.selectedFlavors[productId] ?? 0;
      if (current <= 0) return s;
      const updated = { ...s.bundle.selectedFlavors, [productId]: current - 1 };
      if (updated[productId] === 0) delete updated[productId];
      return {
        bundle: {
          ...s.bundle,
          selectedFlavors: updated,
          totalSelected: s.bundle.totalSelected - 1,
        },
      };
    }),

  addBundleToCart: () => {
    const { bundle, items } = get();
    const bundleLabel =
      bundle.bundleSize === 6
        ? "Half Dozen"
        : bundle.bundleSize === 12
          ? "Full Dozen"
          : "Party Box";
    const bundlePrice =
      bundle.bundleSize === 6
        ? 21.0
        : bundle.bundleSize === 12
          ? 40.0
          : 75.0;
    const flavorNote = Object.entries(bundle.selectedFlavors)
      .map(([id, qty]) => {
        const p = getProductById(id);
        return `${qty}× ${p?.shortName ?? id}`;
      })
      .join(", ");
    const note = [flavorNote, bundle.note?.trim()].filter(Boolean).join(" · ");
    const firstFlavorId = Object.keys(bundle.selectedFlavors)[0];
    const cover = firstFlavorId
      ? getProductById(firstFlavorId)?.image ?? ""
      : "";
    set({
      items: [
        ...items,
        {
          id: `bundle-${Date.now()}`,
          name: `${bundleLabel} Cookie Box`,
          price: bundlePrice,
          quantity: 1,
          image: cover,
          note,
        },
      ],
      isOpen: true,
    });
    get().clearBundle();
  },

  clearBundle: () =>
    set({
      bundle: {
        selectedFlavors: {},
        bundleSize: null,
        totalSelected: 0,
        note: "",
      },
    }),
}));
