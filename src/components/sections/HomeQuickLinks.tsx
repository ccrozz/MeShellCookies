"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Boxes, ShoppingBag, Sparkles } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";

const links = [
  {
    href: "/shop",
    title: "Shop the menu",
    description: "Cookies, brownies & packs",
    icon: ShoppingBag,
  },
  {
    href: "/build-your-box",
    title: "Build a box",
    description: "Mix flavors · 6, 12, or 24",
    icon: Boxes,
  },
  {
    href: "/about",
    title: "Meet Michelle",
    description: "Our story on the Space Coast",
    icon: Sparkles,
  },
] as const;

export function HomeQuickLinks() {
  return (
    <section className="border-y border-sand/60 bg-whitecap py-12 sm:py-14">
      <FadeUp className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {links.map(({ href, title, description, icon: Icon }, i) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.06, duration: 0.35 }}
            >
              <Link
                href={href}
                className="group flex h-full flex-col rounded-3xl border border-sand bg-shell/40 p-6 shadow-sm transition hover:border-coral/40 hover:bg-shell hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-aqua/15 text-aqua transition group-hover:bg-coral group-hover:text-whitecap">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <span className="mt-4 font-display text-xl text-driftwood group-hover:text-coral">
                  {title}
                </span>
                <span className="mt-1 font-body text-sm text-driftwood/65">
                  {description}
                </span>
                <span className="mt-4 font-body text-sm font-semibold text-coral">
                  Explore →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
