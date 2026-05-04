import Image from "next/image";
import type { Metadata } from "next";
import { galleryPhotos } from "@/lib/data/galleryPhotos";
import { WaveDivider } from "@/components/ui/WaveDivider";

export const metadata: Metadata = {
  title: "Our Story | MeShell Cookies",
  description:
    "How MeShell Cookies started in a Melbourne Beach kitchen and grew into the Space Coast’s favorite gourmet cookie bakery.",
};

const hero = galleryPhotos[17];
const side = galleryPhotos[11];

export default function AboutPage() {
  return (
    <div className="bg-shell pb-20 pt-24">
      <div className="relative h-[55vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src={hero}
          alt="Cookie flat lay from MeShell Cookies"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-deep/55" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-center font-display text-5xl text-whitecap sm:text-7xl md:text-8xl">
            Our Story 🐚
          </h1>
        </div>
      </div>
      <WaveDivider fillColor="#E7DFD5" bgColor="#18242F" />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-start">
        <div className="relative">
          <div className="-rotate-2 overflow-hidden rounded-3xl shadow-xl ring-1 ring-sand">
            <Image
              src={side}
              alt="Cookie close-up"
              width={560}
              height={420}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-6 font-body text-lg leading-relaxed text-driftwood/80">
          <p>
            At MeShell Cookies, we are passionate about baking the most delicious
            and high-quality cookies, using only the finest ingredients we can
            find — real butter, premium chocolate, and a whole lot of heart.
          </p>
          <p>
            Michelle started experimenting in her Melbourne Beach kitchen, chasing
            that perfect balance of crisp edge and soft center. Friends and
            neighbors became regulars, regulars became family, and every batch
            still carries that same home-kitchen energy — just scaled up with
            professional care.
          </p>
          <p>
            Dan apprenticed alongside Michelle, learning the rhythm of the dough,
            the timing of the ovens, and the little details that turn a good cookie
            into a core memory. Together they built MeShell Cookies into a mobile
            bakery serving all of Brevard County with free local delivery.
          </p>
          <p>
            Whether you&apos;re celebrating something big or making Tuesday a
            little sweeter, we&apos;re honored to be part of your table.
          </p>
        </div>
      </section>
      <section className="bg-tide py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-6 px-4 text-center text-deep sm:px-6">
          <div>
            <p className="font-display text-3xl">3&quot;</p>
            <p className="mt-1 font-body text-sm">Cookie size</p>
          </div>
          <div>
            <p className="font-display text-3xl">2.5&quot;</p>
            <p className="mt-1 font-body text-sm">Brownie size</p>
          </div>
          <div>
            <p className="font-display text-3xl">Brevard</p>
            <p className="mt-1 font-body text-sm">County delivery</p>
          </div>
        </div>
      </section>
    </div>
  );
}
