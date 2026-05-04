"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCartStore } from "@/lib/store/cartStore";
import { logoUrl } from "@/lib/data/galleryPhotos";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/build-your-box", label: "Build Your Box", highlight: true },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const itemCount = useCartStore((s) => s.itemCount());
  const toggleCart = useCartStore((s) => s.toggleCart);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-sand bg-whitecap/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logoUrl}
            alt="MeShell Cookies"
            width={160}
            height={56}
            className="h-14 w-auto rounded-lg object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) =>
            l.highlight ? (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full bg-coral px-4 py-2 text-sm font-semibold text-whitecap shadow-sm transition hover:bg-coral/90"
              >
                {l.label}
              </Link>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="font-body text-sm font-medium text-driftwood/80 transition hover:text-coral"
              >
                {l.label}
              </Link>
            ),
          )}
          <button
            type="button"
            onClick={toggleCart}
            className="relative rounded-full p-2 text-coral transition hover:bg-shell"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-coral px-1 text-[10px] font-bold text-whitecap">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleCart}
            className="relative rounded-full p-2 text-coral"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-coral px-1 text-[10px] font-bold text-whitecap">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
          </button>
          <button
            type="button"
            className="rounded-full p-2 text-driftwood"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-shell md:hidden">
          <div className="flex items-center justify-between border-b border-sand px-4 py-3">
            <span className="font-display text-lg text-driftwood">Menu</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-driftwood"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col gap-4 p-6">
            {links.map((l) =>
              l.highlight ? (
                <Button
                  key={l.href}
                  href={l.href}
                  variant="primary"
                  className="w-full justify-center"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Button>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-body text-lg text-driftwood"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </header>
  );
}
