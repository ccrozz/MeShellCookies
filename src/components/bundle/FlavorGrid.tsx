"use client";

import { boxBuilderProducts } from "@/lib/data/products";
import { useCartStore } from "@/lib/store/cartStore";
import { FlavorCard } from "@/components/bundle/FlavorCard";
import { FadeUp } from "@/components/ui/FadeUp";

export function FlavorGrid() {
  const bundle = useCartStore((s) => s.bundle);
  const inc = useCartStore((s) => s.incrementFlavor);
  const dec = useCartStore((s) => s.decrementFlavor);
  const max = bundle.bundleSize ?? 0;
  const flavors = boxBuilderProducts();

  if (!bundle.bundleSize) return null;

  return (
    <FadeUp className="mt-12">
      <div className="mb-8 text-center md:text-left">
        <h2 className="font-display text-3xl text-driftwood">Pick your flavors 🍪</h2>
        <p className="mt-2 font-body text-driftwood/70">Mix & match however you like!</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {flavors.map((p) => (
          <FlavorCard
            key={p.id}
            product={p}
            qty={bundle.selectedFlavors[p.id] ?? 0}
            bundleMax={max}
            totalSelected={bundle.totalSelected}
            onInc={() => inc(p.id)}
            onDec={() => dec(p.id)}
          />
        ))}
      </div>
    </FadeUp>
  );
}
