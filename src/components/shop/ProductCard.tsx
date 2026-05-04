"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Product } from "@/lib/data/products";
import { useCartStore } from "@/lib/store/cartStore";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { QtyStepper } from "@/components/ui/QtyStepper";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const isBundle = product.category === "bundles";

  const handleAdd = () => {
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
      qty,
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.article
      layout
      className="overflow-hidden rounded-3xl border border-sand bg-whitecap shadow-sm transition-shadow hover:shadow-xl"
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1">
          {product.tags.slice(0, 2).map((t) => (
            <Badge key={t} tag={t} />
          ))}
        </div>
      </div>
      <div className="space-y-3 p-5">
        {isBundle ? (
          <Link href={`/build-your-box?size=${product.builderSize}`}>
            <h3 className="font-display text-lg text-driftwood hover:text-coral">
              {product.name}
            </h3>
          </Link>
        ) : (
          <h3 className="font-display text-lg text-driftwood">{product.name}</h3>
        )}
        <div className="flex flex-wrap gap-2">
          {product.flavourNotes.slice(0, 3).map((n) => (
            <span
              key={n}
              className="rounded-full bg-tide/40 px-2 py-0.5 font-body text-xs text-driftwood"
            >
              {n}
            </span>
          ))}
        </div>
        <p className="font-body text-xs text-driftwood/50">{product.size}</p>
        <p className="font-display text-2xl font-bold text-coral">
          ${product.price.toFixed(2)}
          {!isBundle && (
            <span className="ml-1 font-body text-sm font-normal text-driftwood/60">
              {product.unitsPerPrice && product.unitsPerPrice > 1
                ? `for ${product.unitsPerPrice} cookies`
                : "each"}
            </span>
          )}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {!isBundle && (
            <QtyStepper value={qty} onChange={setQty} min={1} max={24} />
          )}
          {isBundle ? (
            <Button
              href={`/build-your-box?size=${product.builderSize}`}
              variant="primary"
              className="w-full sm:w-auto"
            >
              Configure box
            </Button>
          ) : (
            <motion.div
              animate={added ? { scale: [1, 1.08, 1] } : undefined}
              transition={{ duration: 0.35 }}
              className="sm:ml-auto"
            >
              <Button
                variant="primary"
                className="w-full min-w-[140px] sm:w-auto"
                onClick={handleAdd}
                disabled={!product.inStock}
              >
                {added ? "Added! ✓" : "Add to cart"}
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
