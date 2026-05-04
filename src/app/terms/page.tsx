import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | MeShell Cookies",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-28 font-body text-driftwood/80">
      <h1 className="font-display text-4xl text-driftwood">Terms & conditions</h1>
      <p className="mt-6 leading-relaxed">
        Orders placed through this website are requests subject to confirmation.
        Pricing, availability, and lead times may vary. Delivery is offered within
        Brevard County as described on the site. For full order terms, contact
        Michelle at{" "}
        <a className="text-coral underline" href="tel:+14079277966">
          (407) 927-7966
        </a>
        .
      </p>
    </div>
  );
}
