"use client";

import type { ProductCategory } from "@/lib/data/products";

const filters: { id: ProductCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "cookies", label: "Cookies" },
  { id: "brownies", label: "Brownies" },
  { id: "bundles", label: "Bundles" },
];

type FilterStripProps = {
  active: ProductCategory | "all";
  onChange: (f: ProductCategory | "all") => void;
};

export function FilterStrip({ active, onChange }: FilterStripProps) {
  return (
    <div className="sticky top-16 z-40 border-b border-sand bg-shell/95 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 sm:px-6">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => onChange(f.id)}
            className={`rounded-full px-4 py-2 font-body text-sm font-semibold transition ${
              active === f.id
                ? "bg-coral text-whitecap shadow"
                : "bg-whitecap text-driftwood ring-1 ring-sand hover:ring-coral/40"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}
