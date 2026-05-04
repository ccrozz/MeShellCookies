"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Cookie,
  Mail,
  Menu,
  Phone,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";
import { useCartStore } from "@/lib/store/cartStore";
import { logoUrl } from "@/lib/data/galleryPhotos";

const links: {
  href: string;
  label: string;
  highlight?: boolean;
}[] = [
  { href: "/shop", label: "Shop" },
  { href: "/build-your-box", label: "Build Your Box", highlight: true },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const mobileRows: {
  href: string;
  label: string;
  hint: string;
  Icon: LucideIcon;
}[] = [
  { href: "/shop", label: "Shop", hint: "Cookies & brownies", Icon: Cookie },
  { href: "/about", label: "About us", hint: "Our story", Icon: Sparkles },
  { href: "/contact", label: "Contact", hint: "Questions & orders", Icon: Mail },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const itemCount = useCartStore((s) => s.itemCount());
  const toggleCart = useCartStore((s) => s.toggleCart);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    const prevTouchAction = document.body.style.touchAction;
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.touchAction = prevTouchAction;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const mobileMenu =
    mounted &&
    createPortal(
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu-fullscreen"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-[9999] flex flex-col bg-whitecap md:hidden"
            style={{
              height: "100dvh",
              maxHeight: "100dvh",
              width: "100%",
              overscrollBehavior: "none",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-sand px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-3">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="min-w-0 flex-1"
              >
                <Image
                  src={logoUrl}
                  alt="MeShell Cookies"
                  width={140}
                  height={48}
                  className="h-10 w-auto rounded-md object-contain object-left"
                />
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-sand bg-shell text-driftwood active:bg-coral/10"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav
              className="flex min-h-0 flex-1 flex-col px-4 py-2"
              aria-label="Primary"
            >
              <ul className="flex min-h-0 flex-1 flex-col gap-2 py-2">
                {mobileRows.map(({ href, label, hint, Icon }) => (
                  <li key={href} className="flex min-h-0 flex-1">
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className="flex w-full flex-1 items-center gap-4 rounded-2xl border border-sand bg-shell/60 px-4 py-3 active:bg-coral/10"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-tide/20 text-aqua">
                        <Icon className="h-6 w-6" strokeWidth={1.75} />
                      </span>
                      <span className="min-w-0 flex-1 text-left">
                        <span className="block font-display text-xl leading-tight text-driftwood">
                          {label}
                        </span>
                        <span className="mt-0.5 block font-body text-sm text-driftwood/55">
                          {hint}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="grid shrink-0 grid-cols-1 gap-2 border-t border-sand bg-shell/50 px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <a
                href="tel:+14079277966"
                className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-sand bg-whitecap font-body text-sm font-semibold text-driftwood active:bg-shell"
              >
                <Phone className="h-5 w-5 shrink-0 text-aqua" />
                (407) 927-7966
              </a>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  toggleCart();
                }}
                className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-coral font-body text-sm font-semibold text-whitecap active:bg-coral/90"
              >
                <ShoppingBag className="h-5 w-5" />
                View cart{itemCount > 0 ? ` (${itemCount})` : ""}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body,
    );

  return (
    <>
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
              className="rounded-full p-2 text-driftwood transition hover:bg-shell"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      {mobileMenu}
    </>
  );
}
