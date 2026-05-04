"use client";

import Image from "next/image";
import type { Product } from "@/lib/data/products";
import { QtyStepper } from "@/components/ui/QtyStepper";

type FlavorCardProps = {
  product: Product;
  qty: number;
  bundleMax: number;
  totalSelected: number;
  onInc: () => void;
  onDec: () => void;
};

export function FlavorCard({
  product,
  qty,
  bundleMax,
  totalSelected,
  onInc,
  onDec,
}: FlavorCardProps) {
  const atCapacity = bundleMax > 0 && totalSelected >= bundleMax;
  const active = qty > 0;

  return (
    <div
      className={`flex flex-col overflow-hidden rounded-3xl border bg-whitecap shadow-sm transition ${
        active ? "border-2 border-coral bg-coral/5" : "border border-sand"
      }`}
    >
      <div className="relative h-40 w-full">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width:768px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-base text-driftwood">{product.name}</h3>
        <p className="mt-1 line-clamp-2 font-body text-xs text-driftwood/60">
          {product.description}
        </p>
        <div className="mt-4 flex flex-1 flex-col items-center justify-end gap-2">
          <QtyStepper
            value={qty}
            onChange={(n) => {
              if (n > qty) onInc();
              else if (n < qty) onDec();
            }}
            min={0}
            disabledPlus={atCapacity}
            accent
          />
          <p className="font-body text-[11px] text-driftwood/50">
            {qty} in your box
          </p>
        </div>
      </div>
    </div>
  );
}
