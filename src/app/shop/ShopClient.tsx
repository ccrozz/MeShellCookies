"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { ProductCategory } from "@/lib/data/products";
import { products } from "@/lib/data/products";
import { FilterStrip } from "@/components/shop/FilterStrip";
import { ProductGrid } from "@/components/shop/ProductGrid";
export function ShopClient() {
  const [filter, setFilter] = useState<ProductCategory | "all">("all");

  const filtered = useMemo(() => {
    if (filter === "all") return products;
    return products.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="bg-shell pb-20 pt-24">
      <div className="sand-texture border-b border-sand pb-12 pt-10 text-center">
        <h1 className="font-display text-5xl text-driftwood sm:text-6xl lg:text-7xl">
          All cookies & brownies
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-body text-driftwood/70">
          Fresh batches, beach-town vibes, and flavors worth obsessing over.
        </p>
        <p className="mx-auto mt-3 max-w-2xl font-body text-sm text-driftwood/60">
          Gourmet cookies here are sold as 2-packs: the price is for two
          cookies, and cart quantity is the number of 2-packs (not singles).
        </p>
      </div>
      <FilterStrip active={filter} onChange={setFilter} />
      <ProductGrid products={filtered} />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Link
          href="/build-your-box"
          className="block rounded-3xl bg-coral px-6 py-5 text-center font-body text-lg font-semibold text-whitecap shadow-md transition hover:bg-coral/90"
        >
          Save more with a cookie box →
        </Link>
      </div>
    </div>
  );
}
