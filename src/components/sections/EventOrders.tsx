import { FadeUp } from "@/components/ui/FadeUp";
import { WaveDivider } from "@/components/ui/WaveDivider";

export function EventOrders() {
  return (
    <section className="relative bg-gradient-to-br from-coral/90 via-coral/78 to-deep/35 py-16 text-whitecap">
      <WaveDivider fillColor="#B84A3D" bgColor="#E7DFD5" />
      <FadeUp className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-whitecap/80">
          Parties · Gifts · Corporate 🎉
        </p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl">
          Everyone wants their event to stand out.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-whitecap/85">
          Call to place a special order for parties, celebrations, business
          events, and custom gifts. Depending on your order size, we may need up
          to a week — so reach out early!
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+14079277966"
            className="rounded-full bg-whitecap px-8 py-3 font-body font-semibold text-deep shadow transition hover:bg-whitecap/90"
          >
            (407) 927-7966
          </a>
          <a
            href="mailto:meshellcookies@gmail.com"
            className="rounded-full bg-whitecap px-8 py-3 font-body font-semibold text-deep shadow transition hover:bg-whitecap/90"
          >
            Email us
          </a>
        </div>
      </FadeUp>
      <div className="mt-16">
        <WaveDivider fillColor="#6F9499" bgColor="#B84A3D" />
      </div>
    </section>
  );
}
