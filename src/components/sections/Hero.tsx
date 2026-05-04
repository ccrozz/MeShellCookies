"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { FadeUp } from "@/components/ui/FadeUp";

const heroImage =
  "https://images.unsplash.com/photo-1743623173750-ba93bcf6f603?auto=format&fit=crop&w=1600&q=85";

export function Hero() {
  return (
    <section className="relative bg-shell pt-16">
      <div className="flex min-h-[calc(100dvh-4rem)] flex-col lg:flex-row lg:min-h-[calc(100vh-4rem)] lg:items-stretch">
        <div className="sand-texture order-2 flex flex-1 flex-col justify-center px-5 py-12 sm:px-8 lg:order-1 lg:max-w-[min(40rem,46vw)] lg:shrink-0 lg:px-10 lg:py-16 xl:pl-16 xl:pr-8">
          <FadeUp className="space-y-6 lg:space-y-8">
            <div>
              <p className="font-accent text-2xl text-mauve sm:text-3xl">
                MeShell Cookies
              </p>
              <h1 className="mt-2 font-display text-[2.65rem] leading-[1.05] tracking-tight text-driftwood sm:text-6xl lg:text-7xl xl:text-[5rem]">
                Melt in your mouth deliciousness.
              </h1>
            </div>

            <p className="max-w-md font-body text-lg leading-relaxed text-driftwood/75 sm:text-xl">
              Gourmet cookies and toffee brownies, baked fresh and ready to
              order. Free delivery across the Space Coast — because warm cookies
              should not require a road trip. 🌊
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <div className="w-full rounded-2xl border-2 border-coral/45 bg-coral/10 p-1.5 shadow-sm backdrop-blur-sm sm:w-auto">
                <Button
                  href="/shop"
                  variant="primary"
                  className="w-full px-8 py-4 text-base sm:w-auto"
                >
                  Order treats
                </Button>
              </div>
              <div className="w-full rounded-2xl border-2 border-coral/45 bg-coral/10 p-1.5 shadow-sm backdrop-blur-sm sm:w-auto">
                <Button
                  href="/build-your-box"
                  variant="secondary"
                  className="w-full px-8 py-4 text-base sm:w-auto"
                >
                  Build your box
                </Button>
              </div>
            </div>

            <ul className="flex flex-wrap gap-x-6 gap-y-2 border-t border-sand/80 pt-6 font-body text-sm text-driftwood/65">
              <li className="flex items-center gap-2">
                <span className="text-aqua" aria-hidden>
                  ✓
                </span>
                Free local delivery
              </li>
              <li className="flex items-center gap-2">
                <span className="text-aqua" aria-hidden>
                  ✓
                </span>
                Custom &amp; event orders
              </li>
              <li className="flex items-center gap-2">
                <span className="text-aqua" aria-hidden>
                  ✓
                </span>
                Baked to order
              </li>
            </ul>
          </FadeUp>
        </div>

        <motion.div
          className="relative order-1 min-h-[min(52vh,26rem)] w-full sm:min-h-[min(56vh,30rem)] lg:order-2 lg:min-h-0 lg:flex-1"
          initial={{ opacity: 0.85 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={heroImage}
            alt="Decadent chocolate brownie with rich toppings"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-center"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-shell lg:via-shell/25 lg:to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-6 left-1/2 max-w-xs -translate-x-1/2 rounded-2xl border border-whitecap/20 bg-deep/55 px-4 py-3 text-center font-body text-xs text-whitecap/90 backdrop-blur-md sm:left-8 sm:translate-x-0 sm:text-left lg:bottom-10 lg:left-10 lg:max-w-sm lg:text-sm"
            aria-hidden
          >
            <span className="font-display text-base text-whitecap sm:text-lg">
              Fan favorite
            </span>
            <span className="mt-1 block text-whitecap/75">
              Dark chocolate · fudgy · made with real butter
            </span>
          </div>
        </motion.div>
      </div>

      <WaveDivider fillColor="#6F9499" bgColor="#E7DFD5" />
    </section>
  );
}
