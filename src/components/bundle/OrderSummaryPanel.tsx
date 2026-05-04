"use client";

import { useCartStore } from "@/lib/store/cartStore";
import { getProductById, bundleOptions } from "@/lib/data/products";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/bundle/ProgressBar";

function savingsFor(size: 6 | 12 | 24) {
  if (size === 6) return "$3";
  if (size === 12) return "$8";
  return "$21";
}

function labelFor(size: 6 | 12 | 24) {
  if (size === 6) return bundleOptions.half.label;
  if (size === 12) return bundleOptions.full.label;
  return bundleOptions.party.label;
}

export function OrderSummaryPanel() {
  const bundle = useCartStore((s) => s.bundle);
  const addBundle = useCartStore((s) => s.addBundleToCart);
  const setNote = useCartStore((s) => s.setBundleNote);
  const setCartOpen = useCartStore((s) => s.setCartOpen);

  const max = bundle.bundleSize ?? 0;
  const full = max > 0 && bundle.totalSelected === max;
  const price =
    bundle.bundleSize === 6
      ? 21
      : bundle.bundleSize === 12
        ? 40
        : bundle.bundleSize === 24
          ? 75
          : 0;

  const entries = Object.entries(bundle.selectedFlavors).filter(([, q]) => q > 0);

  return (
    <div className="lg:sticky lg:top-24">
      <div className="rounded-3xl border border-sand bg-whitecap p-6 shadow-lg">
        <h2 className="font-display text-xl text-driftwood">Your cookie box 🍪</h2>
        {bundle.bundleSize ? (
          <p className="mt-1 font-body text-sm text-driftwood/60">
            {labelFor(bundle.bundleSize)} · {max} cookies
          </p>
        ) : (
          <p className="mt-1 font-body text-sm text-driftwood/60">
            Choose a box size to begin.
          </p>
        )}
        <div className="my-4 h-px bg-sand" />
        <p className="font-body text-sm font-semibold text-driftwood">Selected:</p>
        <ul className="mt-2 max-h-48 space-y-2 overflow-y-auto font-body text-sm text-driftwood/80">
          {entries.length === 0 && <li className="text-driftwood/50">Nothing yet…</li>}
          {entries.map(([id, qty]) => {
            const p = getProductById(id);
            return (
              <li key={id}>
                • {p?.shortName ?? id} × {qty}
              </li>
            );
          })}
        </ul>
        <div className="my-4 h-px bg-sand" />
        {max > 0 && (
          <>
            <ProgressBar value={bundle.totalSelected} max={max} className="mb-2" />
            <p className="mb-4 text-center font-body text-xs text-driftwood/60">
              {bundle.totalSelected} / {max}
            </p>
          </>
        )}
        <p className="font-display text-3xl text-coral">${price.toFixed(2)}</p>
        {bundle.bundleSize && (
          <p className="mt-1 font-body text-sm text-seafoam">
            You&apos;re saving {savingsFor(bundle.bundleSize)}!
          </p>
        )}
        <Button
          variant="primary"
          className="mt-6 w-full"
          disabled={!full}
          onClick={() => {
            addBundle();
            setCartOpen(true);
          }}
        >
          Add to cart →
        </Button>
        <p className="mt-4 font-body text-xs text-driftwood/60">
          📦 Free Brevard delivery
        </p>
        <p className="font-body text-xs text-driftwood/60">🕐 Ready in ~5–7 days</p>
      </div>

      <div className="mt-6 rounded-3xl border border-sand bg-shell p-4">
        <label className="font-body text-sm font-medium text-driftwood">
          Add a note (allergies, special requests, gifting):
        </label>
        <textarea
          rows={3}
          value={bundle.note}
          onChange={(e) => setNote(e.target.value)}
          className="mt-2 w-full rounded-2xl border border-sand bg-whitecap px-3 py-2 font-body text-sm text-driftwood outline-none ring-coral/30 focus:ring-2"
        />
      </div>
    </div>
  );
}
