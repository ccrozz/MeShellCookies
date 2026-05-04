"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { BoxSizeSelector } from "@/components/bundle/BoxSizeSelector";
import { FlavorGrid } from "@/components/bundle/FlavorGrid";
import { OrderSummaryPanel } from "@/components/bundle/OrderSummaryPanel";
import { ProgressBar } from "@/components/bundle/ProgressBar";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { useCartStore } from "@/lib/store/cartStore";

export function BuildYourBoxClient() {
  const searchParams = useSearchParams();
  const bundle = useCartStore((s) => s.bundle);
  const setBundleSize = useCartStore((s) => s.setBundleSize);

  useEffect(() => {
    const raw = searchParams.get("size");
    if (raw === "6" || raw === "12" || raw === "24") {
      setBundleSize(Number(raw) as 6 | 12 | 24);
    }
  }, [searchParams, setBundleSize]);

  const max = bundle.bundleSize ?? 0;

  return (
    <div className="bg-shell pb-20 pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-10 text-center md:text-left">
          <p className="font-accent text-3xl text-mauve">🌊</p>
          <h1 className="mt-2 font-display text-4xl text-driftwood sm:text-5xl">
            Build your cookie box
          </h1>
          <p className="mt-3 max-w-2xl font-body text-driftwood/70">
            Choose your box size, mix your flavors, and we&apos;ll bake it to
            order.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="order-2 lg:order-1">
            <BoxSizeSelector
              selected={bundle.bundleSize}
              onSelect={(s) => setBundleSize(s)}
            />
            {bundle.bundleSize && (
              <div className="mt-8 rounded-3xl border border-sand bg-whitecap p-6 shadow-sm">
                <p className="font-body text-sm text-driftwood">
                  You&apos;ve selected{" "}
                  <span className="font-semibold text-coral">
                    {bundle.totalSelected}
                  </span>{" "}
                  of {max} cookies
                </p>
                <div className="mt-3 flex items-center gap-4">
                  <ProgressBar
                    value={bundle.totalSelected}
                    max={max}
                    className="flex-1"
                  />
                  <span className="font-display text-sm text-driftwood/60">
                    {max > 0
                      ? `${Math.round((bundle.totalSelected / max) * 100)}%`
                      : ""}
                  </span>
                </div>
              </div>
            )}
            <FlavorGrid />
          </div>
          <div className="order-1 lg:order-2">
            <OrderSummaryPanel />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <WaveDivider fillColor="#FAF8F4" bgColor="#E7DFD5" />
      </div>
    </div>
  );
}
