import Image from "next/image";
import { galleryPhotos } from "@/lib/data/galleryPhotos";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";
import { WaveDivider } from "@/components/ui/WaveDivider";

const brownies = galleryPhotos[1];

export function BrandStatement() {
  return (
    <section className="relative bg-deep py-16 text-whitecap sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <FadeUp>
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-coral/30 via-transparent to-tide/20 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-whitecap/10">
              <Image
                src={brownies}
                alt="Rows of brownie cupcakes"
                width={640}
                height={480}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </FadeUp>
        <FadeUp className="space-y-6">
          <p className="font-accent text-2xl text-mauve sm:text-3xl">Our story 🐚</p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Small-batch baking, Space Coast heart.
          </h2>
          <p className="font-body text-base leading-8 text-whitecap/75 sm:text-lg">
            At MeShell Cookies, we obsess over real ingredients and recipes that
            feel like home — because that&apos;s where this all started.
          </p>
          <p className="font-body text-base leading-8 text-whitecap/75 sm:text-lg">
            Today every tray still gets the same care as that very first kitchen
            experiment: a little science, a lot of butter, and zero shortcuts.
          </p>
          <ul className="grid gap-3 font-body text-sm text-whitecap/85 sm:grid-cols-2">
            <li className="rounded-2xl border border-whitecap/10 bg-whitecap/5 px-4 py-3">
              🍪 3&quot; gourmet cookies
            </li>
            <li className="rounded-2xl border border-whitecap/10 bg-whitecap/5 px-4 py-3">
              🍫 2.5&quot; brownie cupcakes
            </li>
            <li className="rounded-2xl border border-whitecap/10 bg-whitecap/5 px-4 py-3">
              🌴 Free Brevard delivery
            </li>
            <li className="rounded-2xl border border-whitecap/10 bg-whitecap/5 px-4 py-3">
              📦 Events &amp; gifts
            </li>
          </ul>
          <Button href="/about" variant="ghost" className="mt-2">
            Read the full story →
          </Button>
        </FadeUp>
      </div>
      <div className="mt-16 sm:mt-20">
        <WaveDivider fillColor="#E7DFD5" bgColor="#18242F" />
      </div>
    </section>
  );
}
