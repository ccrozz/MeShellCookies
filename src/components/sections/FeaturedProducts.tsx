import Link from "next/link";
import { featuredProductIds, products } from "@/lib/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { FadeUp } from "@/components/ui/FadeUp";
import { WaveDivider } from "@/components/ui/WaveDivider";

export function FeaturedProducts() {
  const featured = featuredProductIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section className="bg-whitecap pb-16 pt-14 sm:pb-20 sm:pt-16">
      <FadeUp className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 border-b border-sand/70 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl text-left">
            <p className="font-accent text-2xl text-mauve sm:text-3xl">
              Fresh from the oven 🍪
            </p>
            <h2 className="mt-2 font-display text-4xl text-driftwood sm:text-5xl">
              A few favorites to get you started
            </h2>
            <p className="mt-3 font-body text-lg text-driftwood/65">
              New batch. Same obsession.
            </p>
          </div>
          <Link
            href="/shop"
            className="inline-flex shrink-0 items-center justify-center rounded-full border-2 border-coral px-6 py-3 font-body text-sm font-semibold text-coral transition hover:bg-coral hover:text-whitecap"
          >
            View full menu
          </Link>
        </div>
      </FadeUp>

      <div className="mx-auto mt-12 grid max-w-6xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 sm:px-6">
        {featured.map((p) =>
          p ? <ProductCard key={p.id} product={p} /> : null,
        )}
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-4 text-center sm:px-6">
        <Link
          href="/shop"
          className="font-body text-sm font-semibold uppercase tracking-wide text-coral underline decoration-2 underline-offset-[6px] transition hover:text-driftwood"
        >
          See all cookies & brownies
        </Link>
      </div>

      <WaveDivider fillColor="#18242F" bgColor="#FAF8F4" />
    </section>
  );
}
