"use client";

import { motion } from "framer-motion";
import { bundleOptions } from "@/lib/data/products";

type BundleOption = (typeof bundleOptions)[keyof typeof bundleOptions];

const sizes: { size: 6 | 12 | 24; opt: BundleOption }[] = [
  { size: 6, opt: bundleOptions.half },
  { size: 12, opt: bundleOptions.full },
  { size: 24, opt: bundleOptions.party },
];

type BoxSizeSelectorProps = {
  selected: 6 | 12 | 24 | null;
  onSelect: (s: 6 | 12 | 24) => void;
};

export function BoxSizeSelector({ selected, onSelect }: BoxSizeSelectorProps) {
  return (
    <div className="rounded-3xl border border-sand bg-whitecap p-6 shadow-sm">
      <p className="font-display text-xl text-driftwood">
        How many cookies would you like?
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {sizes.map(({ size, opt }) => {
          const active = selected === size;
          return (
            <motion.button
              key={size}
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={() => onSelect(size)}
              className={`rounded-2xl border-2 px-4 py-4 text-left transition ${
                active
                  ? "border-coral bg-coral/5 shadow-md ring-1 ring-coral/30"
                  : "border-sand bg-shell hover:border-coral/40"
              }`}
            >
              <p className="font-display text-lg text-driftwood">{opt.label}</p>
              <p className="mt-1 font-body text-sm text-driftwood/70">
                {opt.count} cookies
              </p>
              <p className="mt-2 font-display text-2xl text-coral">
                ${opt.price.toFixed(2)}
              </p>
              <p className="mt-1 font-body text-xs text-driftwood/60">
                {opt.savings}
              </p>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
