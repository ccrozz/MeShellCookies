"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { bundleOptions } from "@/lib/data/products";
import { FadeUp } from "@/components/ui/FadeUp";
import { WaveDivider } from "@/components/ui/WaveDivider";

const sizes = [
  { key: 6 as const, opt: bundleOptions.half },
  { key: 12 as const, opt: bundleOptions.full },
  { key: 24 as const, opt: bundleOptions.party },
];

export function BuildBoxCTA() {
  const [selected, setSelected] = useState<6 | 12 | 24>(12);

  return (
    <section className="relative overflow-hidden sand-texture py-16 sm:py-20">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-tide/25 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-coral/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <FadeUp className="text-center lg:text-left">
          <p className="font-accent text-4xl text-mauve sm:text-5xl">🌊</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-driftwood sm:text-5xl lg:text-[3.25rem]">
            Build the box everyone fights over.
          </h2>
          <p className="mx-auto mt-5 max-w-lg font-body text-lg text-driftwood/70 lg:mx-0">
            Pick your flavors, lock in a half dozen, full dozen, or party size,
            and we&apos;ll have your mix ready for pickup or free Brevard delivery.
          </p>
          <p className="mt-6 font-body text-sm font-medium text-driftwood/55">
            Free local delivery in Brevard County 🌴
          </p>
        </FadeUp>

        <FadeUp>
          <div className="rounded-[2rem] border border-sand bg-whitecap/95 p-6 shadow-lg backdrop-blur-sm sm:p-8">
            <p className="font-display text-lg text-driftwood">How many cookies?</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {sizes.map(({ key, opt }) => {
                const active = selected === key;
                return (
                  <motion.button
                    key={key}
                    type="button"
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelected(key)}
                    className={`rounded-2xl border-2 px-4 py-4 text-left transition ${
                      active
                        ? "border-coral bg-coral text-whitecap shadow-md"
                        : "border-sand bg-shell text-driftwood hover:border-coral/35"
                    }`}
                  >
                    <p className="font-display text-base leading-snug">{opt.label}</p>
                    <p
                      className={`mt-1 font-body text-sm ${active ? "text-whitecap/85" : "text-driftwood/65"}`}
                    >
                      {opt.count} cookies
                    </p>
                    <p className="mt-3 font-display text-xl">${opt.price.toFixed(2)}</p>
                    <p
                      className={`mt-1 font-body text-xs ${active ? "text-whitecap/80" : "text-driftwood/55"}`}
                    >
                      {opt.savings}
                    </p>
                  </motion.button>
                );
              })}
            </div>
            <Link
              href={`/build-your-box?size=${selected}`}
              className="mt-8 flex w-full items-center justify-center rounded-full bg-coral py-4 font-body text-base font-semibold text-whitecap shadow-md transition hover:bg-coral/90"
            >
              Start building →
            </Link>
          </div>
        </FadeUp>
      </div>

      <WaveDivider fillColor="#FAF8F4" bgColor="#E7DFD5" />
    </section>
  );
}
