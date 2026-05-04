"use client";

import Image from "next/image";
import { galleryPhotos } from "@/lib/data/galleryPhotos";
import { FadeUp } from "@/components/ui/FadeUp";

const doubled = [...galleryPhotos, ...galleryPhotos];

export function PhotoMarquee() {
  return (
    <section className="sand-texture py-16 sm:py-20">
      <FadeUp className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="font-accent text-3xl text-mauve sm:text-4xl">From the kitchen</p>
        <h2 className="mt-2 font-display text-3xl text-driftwood sm:text-4xl md:text-5xl">
          Baked with love 🌊
        </h2>
        <p className="mx-auto mt-3 max-w-xl font-body text-driftwood/65">
          Real trays, real sprinkles, real chocolate — nothing stock about it.
        </p>
      </FadeUp>
      <div className="marquee-pause mt-12 overflow-hidden sm:mt-14">
        <div className="flex w-max gap-4 animate-marquee-slow hover:[animation-play-state:paused] sm:gap-5">
          {doubled.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative h-52 w-40 shrink-0 overflow-hidden rounded-2xl shadow-lg ring-1 ring-sand sm:h-56 sm:w-44"
            >
              <Image
                src={src}
                alt="MeShell Cookies bake"
                fill
                sizes="180px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
