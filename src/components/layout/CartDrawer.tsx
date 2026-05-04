"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useCartStore } from "@/lib/store/cartStore";
import { Button } from "@/components/ui/Button";
import { QtyStepper } from "@/components/ui/QtyStepper";

export function CartDrawer() {
  const items = useCartStore((s) => s.items);
  const isOpen = useCartStore((s) => s.isOpen);
  const toggleCart = useCartStore((s) => s.toggleCart);
  const setCartOpen = useCartStore((s) => s.setCartOpen);
  const total = useCartStore((s) => s.total());
  const updateQty = useCartStore((s) => s.updateQty);
  const openOrderModal = useCartStore((s) => s.openOrderModal);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close cart overlay"
            className="fixed inset-0 z-[60] bg-deep/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
          />
          <motion.aside
            className="fixed bottom-0 right-0 top-0 z-[70] flex w-full max-w-md flex-col bg-deep shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
          >
            <div className="flex items-center justify-between border-b border-whitecap/10 px-5 py-4">
              <h2 className="font-display text-xl text-whitecap">Your Order 🍪</h2>
              <button
                type="button"
                className="rounded-full p-2 text-whitecap/80 hover:bg-whitecap/10"
                onClick={toggleCart}
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 py-16 text-center text-whitecap/80">
                  <p className="text-4xl">🐚</p>
                  <p className="font-body text-lg">Your order is empty.</p>
                  <p className="font-body text-sm text-whitecap/60">
                    Go pick some cookies — you deserve it.
                  </p>
                  <Button
                    href="/shop"
                    variant="primary"
                    className="mt-2"
                    onClick={() => setCartOpen(false)}
                  >
                    Shop Now
                  </Button>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-3 rounded-2xl border border-whitecap/10 bg-whitecap/5 p-3"
                    >
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-shell">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-2xl">
                            🍪
                          </div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-display text-base text-whitecap">
                          {item.name}
                        </p>
                        {item.note && (
                          <p className="mt-1 line-clamp-2 font-body text-xs text-whitecap/60">
                            {item.note}
                          </p>
                        )}
                        <div className="mt-2 flex items-center justify-between gap-2">
                          <QtyStepper
                            value={item.quantity}
                            onChange={(n) => updateQty(item.id, n)}
                            min={1}
                          />
                          <p className="font-display text-coral">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-whitecap/10 bg-deep px-5 py-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-body text-whitecap/70">Subtotal</span>
                  <span className="font-display text-2xl text-coral">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <p className="mb-4 font-body text-sm text-seafoam">
                  🌴 Free local delivery
                </p>
                {/* TODO: Replace OrderModal with Stripe checkout when ready */}
                <Button
                  variant="primary"
                  className="mb-2 w-full uppercase tracking-wide"
                  onClick={() => openOrderModal()}
                >
                  Place order →
                </Button>
                <Button
                  variant="ghost"
                  className="w-full border-whitecap/30 text-sm text-whitecap/80"
                  onClick={() => setCartOpen(false)}
                >
                  Continue shopping
                </Button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
